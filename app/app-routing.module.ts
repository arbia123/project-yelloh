
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ResetpwdComponent } from './setting/resetpwd/resetpwd.component';
import { ProfilsComponent } from './setting/profils/profils.component';
import { UsersComponent } from './setting/users/users.component';
import { ParametreComponent } from './setting/parametre/parametre.component';
import { QualiteComponent } from './qualite/qualite.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './security/auth.guard';
import { AppComponent } from './app.component';
import { TemplateContentComponent } from './shared/template-content/template-content.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    path: '', component: TemplateContentComponent/*,canActivate: [AuthGuard]*/, children: [
      { path: 'dashboard', component: AppComponent },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
