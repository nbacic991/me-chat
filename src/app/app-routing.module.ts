import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {EventsComponent} from './events/events.component';
import {EventDetailsComponent} from './event-details/event-details.component';

// const routes: Routes = [
//   {path: '', component: HomeComponent, canActivate: [AuthGuard]},
//   {path: 'events', component: EventsComponent, canActivate: [AuthGuard]},
//   {path: 'events/:albumId', component: EventDetailsComponent, canActivate: [AuthGuard]},
//   {path: 'login', component: LoginComponent},
//   {path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard]},
//
//   // otherwise redirect to home
//   {path: '**', redirectTo: ''}
// ];
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'events/:eventId', component: EventDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
