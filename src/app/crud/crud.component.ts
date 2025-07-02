import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  usuarios = [
    { nombre: 'Juan Pérez', correo: 'juan@example.com' },
    { nombre: 'Ana Gómez', correo: 'ana@example.com' }
  ];

  nuevoUsuario = { nombre: '', correo: '' };
  editandoIndex: number | null = null;

  agregarUsuario() {
    if (!this.nuevoUsuario.nombre || !this.nuevoUsuario.correo) return;
    this.usuarios.push({ ...this.nuevoUsuario });
    this.nuevoUsuario = { nombre: '', correo: '' };
  }

  eliminarUsuario(index: number) {
    this.usuarios.splice(index, 1);
  }

  editarUsuario(index: number) {
    this.editandoIndex = index;
    this.nuevoUsuario = { ...this.usuarios[index] };
  }

  actualizarUsuario() {
    if (this.editandoIndex === null) return;
    this.usuarios[this.editandoIndex] = { ...this.nuevoUsuario };
    this.nuevoUsuario = { nombre: '', correo: '' };
    this.editandoIndex = null;
  }

  cancelarEdicion() {
    this.editandoIndex = null;
    this.nuevoUsuario = { nombre: '', correo: '' };
  }
}
