import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url1="https://finnhub.io/api/v1/quote?symbol="
  public url2="https://finnhub.io/api/v1/search?q="
  public url3="https://finnhub.io/api/v1/stock/insider-sentiment?symbol="

  //TSLA&from=2022-01-01&to=2022-03-01

  constructor(private http: HttpClient) { }

  getData(stk : string){
    console.log("  service  " + stk)
    return this.http.get(this.url1+stk+'&token=bu4f8kn48v6uehqi3cqg');
  }

  getSymbols(stk : string){
    console.log("  service  " + stk)
    return this.http.get(this.url2+stk+'&token=bu4f8kn48v6uehqi3cqg');
  }

  getSentimentData(stk: string){
    return this.http.get(this.url3+stk+"&from=2022-02-01&to=2022-05-01&token=bu4f8kn48v6uehqi3cqg")
  }

}
