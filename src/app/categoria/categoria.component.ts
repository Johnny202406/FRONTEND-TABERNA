import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: any[] = [];
  formData = { nombre: '' };
  selectedCategoria: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCategorias();
  }

  loadCategorias(): void {
    this.apiService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  saveCategoria(): void {
    if (this.selectedCategoria) {
      this.apiService.updateCategoria(this.selectedCategoria.id, this.formData).subscribe(() => {
        this.loadCategorias();
        this.resetForm();
      });
    } else {
      this.apiService.createCategoria(this.formData).subscribe(() => {
        this.loadCategorias();
        this.resetForm();
      });
    }
  }

  editCategoria(categoria: any): void {
    this.selectedCategoria = categoria;
    this.formData = { ...categoria };
  }

  deleteCategoria(id: number): void {
    this.apiService.deleteCategoria(id).subscribe(() => {
      this.loadCategorias();
    });
  }

  resetForm(): void {
    this.formData = { nombre: '' };
    this.selectedCategoria = null;
  }
}