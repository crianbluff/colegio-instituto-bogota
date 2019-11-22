import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';
import { FileItem } from 'src/app/models/file-item';
import * as firebase from 'firebase';
import Swal from 'sweetalert2';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  private CARPETA_IMAGENES = 'img';
  displayedColumns: string[] = ['title'];

  estaSobreElemento:boolean = false;
  archivos:FileItem[] = [];
  urlPrevisualizacion:Object;
  estanSubiendo:boolean;

  numeroImagenes = 0;
  almacenarLengthArrayActual = 0;
  almacenarLengthArrayAnterior = 0;
  cleaner = false;

  dataSource = new MatTableDataSource<FileItem>(this.archivos);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(
    public _cargaImagenes: CargaImagenesService,
    private db: AngularFirestore,
    private router: Router,

  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarImagenes() {
    this.cargarImagenesFirebase(this.archivos);
  }

  limpiarArchivos() {
    this.estanSubiendo = false;
    this.limpiarImagenes();
    this.archivos = [];
  }

  limpiarImagenes() {
    this.cleaner = true;
  }

  cargarImagenesFirebase(imagenes:FileItem[]) {
    // console.log(imagenes);

    this.estanSubiendo = true;

    const storageRef = firebase.storage().ref();

    this.almacenarLengthArrayAnterior = this.almacenarLengthArrayActual;
    if (this.cleaner) {
      this.almacenarLengthArrayAnterior = 0;
      this.cleaner = false
    }
    this.numeroImagenes = imagenes.length - this.almacenarLengthArrayAnterior;
    this.almacenarLengthArrayActual = imagenes.length;
    // console.log('array anterior', this.almacenarLengthArrayAnterior);

    // let imagenesCalculo = this.numeroImagenes - this.numeroImagenes + 1;
    let imagenesCalculo = 1;

    for ( const item of imagenes ) {
      item.estaSubiendo = true;
      if (item.progreso >= 100) {
        continue;
      }

      // console.log(item);

      const uploadTask:firebase.storage.UploadTask = 
      storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
      .put(item.archivo);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot:firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('Error al subir', error),
        () => {
          item.estaSubiendo = false;
          storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).getDownloadURL()
          .then(url => {
            
            this.guardarImagen({
              desc: item.desc,
              title: item.title,
              url: url
            });

            let imagenesCargadas = imagenesCalculo++;
            // console.log('imagenes cargadas', imagenesCargadas);
            // console.log('numero de imagenes', this.numeroImagenes);
            if ( imagenesCargadas === this.numeroImagenes ) {
              this.limpiarArchivos();

              if (imagenes.length <= 1) {
                this.mostrarOk('Circular subida satisfactoriamente');
                this.estanSubiendo = false;
              }
              else if (imagenes.length > 1) {
                this.mostrarOk(`${imagenesCargadas} Circulares subidas satisfactoriamente`);
                this.estanSubiendo = false;
              }

              setTimeout( () => {
                this.router.navigateByUrl('/circulares');
              }, 2000);
            }
            
          });
        });
      }
  }

  private guardarImagen(imagen: { desc:string, title:string, url:string }) {
    // console.log(imagen);
    this.db.collection(`/${this.CARPETA_IMAGENES}`)
    .add(imagen);
  }

  mostrarOk(msgSuccess) {
    const Toast = Swal.mixin({
      position: 'center',
      showConfirmButton: false,
      timer: 2000
    });
    
    Toast.fire({
      type: 'success',
      title: msgSuccess
    });
  }

}