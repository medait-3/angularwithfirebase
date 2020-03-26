import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';

  constructor( private fire:AngularFireAuth,private router: Router) { }


   myLogin(){

   	this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
   	.then(user=>{
   		console.log(this.email,this.password)
   		localStorage.setItem('isLoggedIn' ,'true')
       this.router.navigate(['home'])
   	}).catch(error=>{
   		console.error(error)
   	})
   }
  ngOnInit(): void {
  }

}
