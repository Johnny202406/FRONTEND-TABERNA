import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // Categorías
  getCategorias(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categorias`);
  }

  createCategoria(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/categorias`, data);
  }

  updateCategoria(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/categorias/${id}`, data);
  }

  deleteCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/categorias/${id}`);
  }

  // Marcas
  getMarcas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/marcas`);
  }

  createMarca(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/marcas`, data);
  }

  updateMarca(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/marcas/${id}`, data);
  }

  deleteMarca(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/marcas/${id}`);
  }

  // Productos
  getProductos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/productos`);
  }

  createProducto(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/productos`, data);
  }

  updateProducto(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/productos/${id}`, data);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/productos/${id}`);
  }
}