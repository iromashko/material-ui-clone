import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class QuoteService {
  randomQuote$ = this.http
    .get<string[][]>('http://www.famous-quotes.uk/api.php?id=random&minpop=80')
    .pipe(
      map((response) => ({ quote: response[0][1], author: response[0][2] })),
      catchError(() => of({ quote: 'Not found', author: 'Connection error' })),
      shareReplay(1)
    );

  constructor(private http: HttpClient) {}
}
