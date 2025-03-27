import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Other options: 'disabled', 'top', or a function
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
