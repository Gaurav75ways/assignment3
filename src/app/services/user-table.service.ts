import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UserTableService {
  getData() {
    const dataArray = JSON.parse(localStorage.getItem('Users')!)
    console.log(dataArray)
    return dataArray
  }
}
