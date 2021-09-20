import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { appendFile } from 'fs';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
  path : '',
  component : AppComponent,
  children : [
    {
      path : '',
      component : LoginComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
