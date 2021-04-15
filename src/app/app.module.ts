import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BudgetComponent } from './budget/budget.component';
import { ProvideBudgetComponent } from './main/provide-budget/provide-budget.component';
import { DisplayBudgetComponent } from './main/display-budget/display-budget.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BudgetComponent,
    ProvideBudgetComponent,
    DisplayBudgetComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
