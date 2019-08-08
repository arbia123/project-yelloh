import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetpwdComponent } from './setting/resetpwd/resetpwd.component';
import { ProfilsComponent } from './setting/profils/profils.component';
import { UsersComponent } from './setting/users/users.component';
import { ParametreComponent } from './setting/parametre/parametre.component';
import { QualiteComponent } from './qualite/qualite.component';


const routes: Routes = [
  {path: 'vente' , redirectTo:'/' , pathMatch:'full'},
  {path:'reset' , component: ResetpwdComponent},
  {path:'profils' , component: ProfilsComponent},
  {path:'users' , component: UsersComponent},
  {path:'pwd' , component: ParametreComponent},
  {path: 'qualite', component :QualiteComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
