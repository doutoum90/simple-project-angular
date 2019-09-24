import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './comps/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './comps/home/home.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';
import { RegisterComponent } from './comps/register/register.component';
import { CustomHeaderInterceptor } from './interceptors/custom-header.interceptor';
import { AddPostsComponent } from './comps/add-posts/add-posts.component';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    RegisterComponent,
    AddPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CustomHeaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
