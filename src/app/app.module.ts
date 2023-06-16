import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    CKEditorModule
  ],
  bootstrap: [AppComponent]
})


export class AppModule {

}
