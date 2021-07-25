import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class QuoteService {
  randomQuote$ = this.http
    .get<string[][]>('http://www.famous-quotes.uk/api.php?id=random&minpop=80')
    .pipe(
      map((response) => ({ quote: response[0][1], author: response[0][2] }))
    );

  constructor(private http: HttpClient) {}
}
