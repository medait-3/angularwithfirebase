import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddskillsComponent } from './addskills/addskills.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyskillComponent } from './myskill/myskill.component';
import { SkillComponent } from './skill/skill.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const appRoutes:Routes=[
{ path:'',redirectTo:'home',pathMatch:'full' },
{ path:'home',component:HomeComponent },
{ path:'addskills',component:AddskillsComponent },
{ path:'login',component:LoginComponent },
{ path:'register',component:RegisterComponent },
{ path:'myskill',component:MyskillComponent },
{ path:'skill',component:SkillComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddskillsComponent,
    LoginComponent,
    RegisterComponent,
    MyskillComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
     AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
      RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
