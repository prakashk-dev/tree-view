import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NodeTreeViewComponent } from './components/node-tree-view/node-tree-view.component';
import { NodeInputComponent } from './shared/components/node-input/node-input.component';
import { NodeNameComponent } from './shared/components/node-name/node-name.component';
import { PrimaryButtonComponent } from './shared/components/primary-button/primary-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeTreeViewComponent,
    NodeInputComponent,
    NodeNameComponent,
    PrimaryButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
