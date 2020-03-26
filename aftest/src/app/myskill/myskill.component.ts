import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import  'firebase/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css']
})
export class MyskillComponent implements OnInit {
  
   itemList:AngularFireList<any>
   itemArray = []
   data={
	a:'',
	b:'',
	c:'',
	d:'',
	e:'',
	f:''
}

  constructor(public db : AngularFireDatabase, public router:Router) {
              this.itemList = db.list('skills')

              this.itemList.snapshotChanges()
              .subscribe(action=>{
              	action.forEach(action=>{
              	let y = action.payload.toJSON()
              	y["$key"] = action.key
              	this.itemArray.push(y as ListItemClass)
              })

})

              	console.log(this.itemArray)


   }

   editForm($key){
   	for(let value of this.itemArray){
       if (value['$key'] == $key) {
       	console.log(value['$key'])
       	this.data.a = value['a'];
       	this.data.b = value['b'];
       	this.data.c = value['c'];
       	this.data.d = value['d'];
       	this.data.e = value['e'];
       	this.data.f = value['f'];
       }
   	}
   }


  oneEdit($key){
  	this.data.a 
       	this.data.b 
       	this.data.c 
       	this.data.d 
       	this.data.e 
       	this.data.f 

       	this.itemList.set($key,{
       			a:this.data.a,
	            b:this.data.b,
	            c:this.data.c,
	             d:this.data.d,
	             e:this.data.e,
	             f:this.data.f
       	})
   
       	this.itemArray=[]
   
  }
  oneDelete($key){
    this.itemList.remove($key);
             this.itemArray=[]
  }


  ngOnInit(): void {
  }

}
export class ListItemClass{
	$key:string;
	a:string;
	b:string;
	c:string;
	d:string;
	e:string;
	f:string;
}