import { Component, OnInit } from '@angular/core';
import { Expense } from '../models/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  movies: Expense[] = [];  
  movie: Expense = new Expense;

  constructor(private expense:ExpenseService) { }

  ngOnInit(): void {
    console.log('All movies ')
        this.expense.getAllMovies().subscribe(data =>{  
            console.log(data);
            this.movies = data;  
        }) 
  }

}
