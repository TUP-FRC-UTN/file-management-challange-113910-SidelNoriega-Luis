import { Component } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { FILE_LIST } from '../../data/file.storage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-archivos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-archivos.component.html',
  styleUrl: './listar-archivos.component.css'
})
export class ListarArchivosComponent {
  listaArchivos: FileItem[] = [];
  
  ngOnInit() {
    this.listaArchivos = FILE_LIST;
  }
  trackById(index: number, item: FileItem): string {
    return item.id;
  }
}
