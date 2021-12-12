import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from '../shared/components/shared.components.module';
import { NodeTreeViewComponent } from './node-tree-view/node-tree-view.component';


const components = [
  NodeTreeViewComponent,
];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    SharedComponentsModule,
    FormsModule,
  ],
  providers: [],
  exports: components
})
export class ComponentsModule { }

