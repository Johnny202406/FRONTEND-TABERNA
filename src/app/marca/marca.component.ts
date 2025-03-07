import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {
  marcas: any[] = [];
  formData = { nombre: '' };
  selectedMarca: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadMarcas();
  }

  loadMarcas(): void {
    this.apiService.getMarcas().subscribe(data => {
      this.marcas = data;
    });
  }

  saveMarca(): void {
    if (this.selectedMarca) {
      this.apiService.updateMarca(this.selectedMarca.id, this.formData).subscribe(() => {
        this.loadMarcas();
        this.resetForm();
      });
    } else {
      this.apiService.createMarca(this.formData).subscribe(() => {
        this.loadMarcas();
        this.resetForm();
      });
    }
  }

  editMarca(marca: any): void {
    this.selectedMarca = marca;
    this.formData = { ...marca };
  }

  deleteMarca(id: number): void {
    this.apiService.deleteMarca(id).subscribe(() => {
      this.loadMarcas();
    });
  }

  resetForm(): void {
    this.formData = { nombre: '' };
    this.selectedMarca = null;
  }
}