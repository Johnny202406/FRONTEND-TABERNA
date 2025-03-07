import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { MarcaComponent } from './marca/marca.component';
import { ProductoComponent } from './producto/producto.component';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CategoriaComponent, MarcaComponent, ProductoComponent],
  
})
export class AppComponent {}