import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorDetailsComponent } from './authors/author-details-component';
import { AuthorListComponent } from './authors/author-list-component';
import { HelloComponent } from './hello.compomemt';
import { ProgessBarComponent } from './progess-bar/progess-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProgessBarComponent,
    AuthorListComponent,
    AuthorDetailsComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
