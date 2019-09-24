import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from './comps/home/home.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './comps/register/register.component';
import { AddPostsComponent } from './comps/add-posts/add-posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'add-posts', component: AddPostsComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
