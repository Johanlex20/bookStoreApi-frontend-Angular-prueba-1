import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'singup',
        component:SingupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
