import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   user:Observable<firebase.User>;
   public isLoggedIn:boolean=false;
   public email:string;
  
  constructor(public afAuth:AngularFireAuth , public router:Router) {
let status = localStorage.getItem('isLoggedIn')


if (status === "true") {
	this.isLoggedIn = true;
}else{
		this.isLoggedIn = false;

}
       //firebase.auth().onAuthStateChanged(function(user){
       	//if (user) {
       	//	this.isLoggedIn = true;
       	//}else{
       	//	this.isLoggedIn = false;
       //		this.router.navigate(['/login'])
     //  	}
   //    });
   }
 

  ngOnInit(): void {
  }

  logout(){
  	this.afAuth.auth.signOut();
  	this.isLoggedIn = false
  	localStorage.setItem('isLoggedIn','false')
  	this.router.navigate(['/login'])
  }

}
