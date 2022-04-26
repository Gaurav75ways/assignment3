import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
console.warn("loaded")

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
