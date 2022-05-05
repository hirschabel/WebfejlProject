import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    MainComponent,
    ImageViewerComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MainModule { }
