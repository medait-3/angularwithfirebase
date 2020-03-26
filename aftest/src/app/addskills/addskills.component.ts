import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import  'firebase/database';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';


@Component({
  selector: 'app-addskills',
  templateUrl: './addskills.component.html',
  styleUrls: ['./addskills.component.css']
})
export class AddskillsComponent implements OnInit {

data={
	a:'',
	b:'',
	c:'',
	d:'',
	e:'',
	f:''
}

itemList:AngularFireList<any>
	
  constructor(public db : AngularFireDatabase, public router:Router) {
       this.itemList = db.list('skills')

       
   }

  ngOnInit(){}

  insertSkill(){
  	this.itemList.push({
  	a:this.data.a,
	b:this.data.b,
	c:this.data.c,
	d:this.data.d,
	e:this.data.e,
	f:this.data.f
  	})
  	this.router.navigate(['/myskill'])
  }

}
