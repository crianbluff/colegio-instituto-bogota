import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

export interface Item {
  nombre:string;
  url:string;
}

@Component({
  selector: 'app-circulares',
  templateUrl: './circulares.component.html',
  styleUrls: ['./circulares.component.css']
})
export class CircularesComponent implements OnInit {

  lengthItems:number;
  images:any;

  private itemsCollection:AngularFirestoreCollection<Item>;
  items:Observable<Item[]>;

  constructor(private afs:AngularFirestore, public _cargaImagenes:CargaImagenesService) {
    this.itemsCollection = this.afs.collection<Item>('img');
    this.items = this.itemsCollection.valueChanges();
    this.items.forEach(item => {
      this.lengthItems = item.length;
    });
  }

  getImages() {
    this.afs.collection('img').snapshotChanges()
    .subscribe( res => {
      this.images = res;
    });
  }

  verCircular(event) {
    const modal = document.getElementById('modal-lightbox');
    let imgModal = modal.querySelector('.ctn-modal-lightbox .modal-lightbox-body img');
    let pathImage = event.target.parentElement.parentElement.style.backgroundImage.slice(5, -2).replace(/'/g);
    imgModal.setAttribute('src', pathImage)
    modal.classList.add('show-modal-lightbox');
    document.body.classList.add('no-scroll-y');
  }

  cerrarModalClickFuera(event) {
    let temp = event.target;
    temp.classList.remove('show-modal-lightbox');
    document.body.classList.remove('no-scroll-y');
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  closeModal() {
    const modal = document.getElementById('modal-lightbox');
    modal.classList.remove('show-modal-lightbox');
    document.body.classList.remove('no-scroll-y');
  }

  ngOnInit() {
    this.getImages();
  }

}