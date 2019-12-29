import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntegerSpiralViaMatrixComponent } from './integer-spiral-via-matrix/integer-spiral-via-matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    IntegerSpiralViaMatrixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
