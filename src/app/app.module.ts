import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileBrowseModule } from './file-browse/file-browse.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileBrowseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
