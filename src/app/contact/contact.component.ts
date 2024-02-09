import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  userName:string =""
  userAge:string =""
  userEmail:string =""
  userPassword:string =""

  showName:boolean=false;
  showAge:boolean=false;
  showEmail:boolean=false;
  showPassword:boolean=false;
  toggle(){
    if(this.userName.length>0){
      this.showName=true
    }else{
      this.showName=false
    }

    if(this.userAge.length>0){
      this.showAge=true
    }else{
      this.showAge=false
    }

    if(this.userEmail.length>0){
      this.showEmail=true
    }else{
      this.showEmail=false
    }

    if(this.userPassword.length>0){
      this.showPassword=true
    }else{
      this.showPassword=false
    }
  }
  ngOnInit(): void{
    
  }
}
// let nameinput:any = document.querySelector("#userName");
// let labelname:any =document.querySelector("#non");
// if(nameinput.value.length>0){
//  labelname.setAttribute("style","margin-bottom:20px")
 
// }