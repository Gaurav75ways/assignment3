import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  authUser(user: any) {
    let UserArray: Array<any> = []
    if (localStorage.getItem('Users')) {
      // console.log(localStorage.getItem('Users.firstName'));
      UserArray = JSON.parse(localStorage.getItem('Users')!)
    }
    return UserArray.find(
      (p) => p.userName === user.userName && p.password === user.password,
    )
  }
}
