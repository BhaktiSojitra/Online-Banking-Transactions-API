import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularConsumeAPIService } from '../angular-consume-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  constructor(private __api:AngularConsumeAPIService,private __actroute:ActivatedRoute,private __route:Router){}

  id=0;
  myForm = new FormGroup({
    Name : new FormControl(),
    Image : new FormControl(),
    TransactionID : new FormControl(),
    AccountID : new FormControl(),
    TransactionType : new FormControl(),
    Amount : new FormControl(),
    Date : new FormControl(),
  });

  ngOnInit(){
    this.id=this.__actroute.snapshot.params['id'];
    this.__api.getbyid(this.id).subscribe((res:any)=>{
      this.myForm.controls.TransactionType.setValue(res.TransactionType);
      this.myForm.controls.Amount.setValue(res.Amount);
      this.myForm.controls.Date.setValue(res.Date);
    });
  }

  update(){
    this.__api.update(this.id,this.myForm.value).subscribe((res)=>{
      this.__route.navigate(["/"+"getbyid"+"/"+this.id]);
    });
  }
}
