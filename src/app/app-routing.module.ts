import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveExpenseComponent } from './components/save-expense/save-expense.component';
import { ExpenseComponent } from './expense/expense.component';

const routes: Routes = [
  // {path: 'displaymovies', component: ExpenseComponent},
  // {path: 'savemovies', component: SaveExpenseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
