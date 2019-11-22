import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';

// Angular Material

//Rutas
import { APP_ROUTES } from './app.routes';

// Directivas
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

// Componentes
import { AppComponent } from './app.component';
import { CircualesAdminComponent } from './components/circulares-admin/circulares-admin.component';
import { CargaComponent } from './components/carga/carga.component';

// Servicios
import { CargaImagenesService } from './services/carga-imagenes.service';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CircularesComponent } from './components/circulares/circulares.component';

import { MatInputModule, MatProgressBarModule, MatPaginatorModule, MatTableModule } from '@angular/material';

export class MaterialModule { }


@NgModule({
  declarations: [
    AppComponent,
    CircualesAdminComponent,
    CargaComponent,
    CircularesComponent,
    NgDropFilesDirective,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatInputModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatTableModule
  ],

  providers: [
    CargaImagenesService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }