import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl ="http://localhost:8081/movies/"

  constructor(private _httpClient: HttpClient) { }

  getAllMovies(){
    return this._httpClient.get<Expense[]>(this.baseUrl)
                      .pipe(catchError(this.handleError));
  }

  addMovie(movie: Expense): Observable<Expense>{
    return this._httpClient.post<Expense>(`${this.baseUrl}movie/`, movie);
  }


  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
