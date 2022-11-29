import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userempty=false;
  passwordempty=false;
  incorrect=false;
  loginData = {
    username: "",
    password: "",
  };

  users=[
    {
      username:"Neetha",
      password:"12345"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
  formSubmit() {
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.userempty=true;
      return;
    }
    
    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.passwordempty=true;
      return;
    }

    if(this.myIndexOf(this.loginData)===-1){
      this.incorrect=true;
    }else alert("Succesfully logged In");

  }

  myIndexOf(s:any) {    
    for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].username == s.username && this.users[i].password == s.password) {
            return i;
        }
    }
    return -1;
}
}
