import { Component } from '@angular/core';
import { AngularConsumeAPIService } from '../angular-consume-api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  constructor(private __api:AngularConsumeAPIService,private __router:Router){}

  myForm = new FormGroup({
    Name : new FormControl(),
    Image : new FormControl(),
    TransactionID : new FormControl(),
    AccountID : new FormControl(),
    TransactionType : new FormControl(),
    Amount : new FormControl(),
    Date : new FormControl(),
  });

  add(){
    console.log("this.myForm.value:- ",this.myForm.value);
    this.__api.insert(this.myForm.value).subscribe((res)=>{
      this.__router.navigate(['getall']);
    });
  }
}
