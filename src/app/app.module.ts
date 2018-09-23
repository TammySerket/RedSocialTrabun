// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RegisterComponent } from './register/register.component';
import { FriendsComponent } from './friends/friends.component';
import { ProducerComponent } from './producer/producer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ProfileWallComponent } from './profile-wall/profile-wall.component';

// Funcionalidad y estilos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

// Formulario
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Animaciones y Material
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

// Otros
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

// Variable de Rutas

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'wall',
    component: HomePageComponent
  },
  {
    path: 'profile',
    component: PerfilComponent
  },
  {
    path: 'friends',
    component: FriendsComponent
  },
  {
    path: 'producer',
    component: ProducerComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'not-found-page',
    component: NotFoundPageComponent
  }
];

// Configs
export function getAuthServiceConfigs() { }
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    HomePageComponent,
    NavbarComponent,
    PerfilComponent,
    NotFoundPageComponent,
    RegisterComponent,
    FriendsComponent,
    ProducerComponent,
    RecipesComponent,
    PostFormComponent,
    ProfileWallComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Trabun'), // imports firebase/app needed for everything
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    JsonpModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatCardModule,
    MatChipsModule

  ],
  providers: [
    HttpClientModule,
    AuthService,
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }

