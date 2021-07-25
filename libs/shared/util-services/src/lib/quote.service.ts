import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class QuoteService {
  randomQuote$ = this.http.get<string[][]>(
    'http://www.famous-quotes.uk/api.php?id=random&minpop=80'
  );

  constructor(private http: HttpClient) {}
}
