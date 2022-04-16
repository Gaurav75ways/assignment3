import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private http:HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/todos'
  tableData(){
    return this.http.get(this.url)
  }
}
