import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import Swal from 'sweetalert2';


@Injectable()
export class CargaImagenesService {

  constructor(private db:AngularFirestore) { }
  
  eliminarImagen(key:any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: '¡No podrás revertir esto!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminarla!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Eliminada!',
          'La circular ha sido eliminada.',
          'success'
        );
        this.db.collection('img').doc(key).delete().then(function() {
        }).catch(function(error) {
            console.log('Error: ', error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelada',
            'Tu circular esta segura :)',
            'error'
          );
        }
    });
  }
}