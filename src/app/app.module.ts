import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

//Formulario
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//Components
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component'; // Muro
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';





//Variable de Rutas
const appRoutes: Routes = [
  {
    path : '',
    component : WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    RegisterComponent,
    HomePageComponent,
    NavbarComponent,
    PerfilComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule, 
    HttpModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [
    AuthService, 
    HttpClientModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

