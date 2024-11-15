import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
export const routes: Routes = [
    { 
        path: 'home', 
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details',
        component: DetailsComponent,
        title: 'Details Page'
    }

];
