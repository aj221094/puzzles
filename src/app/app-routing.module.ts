import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegerSpiralViaMatrixComponent } from './integer-spiral-via-matrix/integer-spiral-via-matrix.component';


const routes: Routes = [
  { path:'',  component:IntegerSpiralViaMatrixComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
