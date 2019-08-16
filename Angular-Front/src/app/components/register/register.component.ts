import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  name:String;
  username:String;
  email:String;
  password:String;

  constructor(
    private authService:AuthService,
  
  ) { }

  ngOnInit() {
  }

  registerData(formdata:NgForm){
    const user = {
      name:this.name,
      username:this.username,
      email:this.email,
      password:this.password
    }
    //console.log(user);
    this.authService.registerUser(user).subscribe(res=>{
      console.log(res);
        
     
    });



  }
}
