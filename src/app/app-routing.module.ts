import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexHomeComponent } from './components/index-home/index-home.component';


const routes: Routes =  
[ { path: '', component: IndexHomeComponent },
{ path: 'index', component: IndexHomeComponent },
// { path: 'about', component: AboutComponent },
// { path: 'admin', component: AdminDashboardComponent },
{ path: '**', component: IndexHomeComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
