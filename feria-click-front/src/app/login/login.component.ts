import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(event: any){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector("#loginUsername").value
    const password = target.querySelector("#loginPassword").value

    this.Auth.getUserDetails(username, password)

    console.log(event)
  }
}
