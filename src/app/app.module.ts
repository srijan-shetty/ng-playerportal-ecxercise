import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TformComponent } from './tform/tform.component';
import { MinlengthCloneDirective } from './minlength-clone.directive';
import { RformComponent } from './rform/rform.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'portal',
    component: PlayerContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tform',
    component: TformComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'rform',
    component: RformComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    PlayerContainerComponent,
    NavbarComponent,
    FooterComponent,
    TformComponent,
    MinlengthCloneDirective,
    RformComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
