import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

// protecting one single route with Route Guard - below

// export const appRoutes: Routes = [
//     { path: 'home', component: HomeComponent },
//     { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
//     { path: 'messages', component: MessagesComponent },
//     { path: 'lists', component: ListsComponent },
//     { path: '**', redirectTo: 'home', pathMatch: 'full'},
// ];

// protecting multiple routes with Route Guard - below

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',   // http://lolahost:4200/   - '' its empty because concatenates the below paths
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent },
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
