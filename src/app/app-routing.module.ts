import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  { path: "editform", component: EditFormComponent },
  {path:"**",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
