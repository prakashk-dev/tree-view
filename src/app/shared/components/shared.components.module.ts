import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NodeInputComponent } from './node-input/node-input.component';
import { NodeNameComponent } from './node-name/node-name.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';

const components = [
  PrimaryButtonComponent,
  NodeInputComponent,
  NodeNameComponent
];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: components
})
export class SharedComponentsModule { }
