import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-save-expense',
  templateUrl: './save-expense.component.html',
  styleUrls: ['./save-expense.component.css']
})
export class SaveExpenseComponent implements OnInit {

  movie: Expense = new Expense;

  isAdded = false;
  userForm!: FormGroup;
  constructor(private expenseService:ExpenseService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),     
    });
  }

  onSubmit(){
    this.movie.movieId = this.userForm.value.firstName;
    this.movie.name = this.userForm.value.lastName;
    this.save();
  }

  save(){
    this.expenseService.addMovie(this.movie)
                    .subscribe(user=> {console.log(user);
                      this.isAdded = true;
                    }, error=>console.log(error))
  }

}
