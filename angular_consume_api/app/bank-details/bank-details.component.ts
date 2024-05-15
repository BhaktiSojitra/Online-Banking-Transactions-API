import { Component } from '@angular/core';
import { AngularConsumeAPIService } from '../angular-consume-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from '../angular-api/bank';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrl: './bank-details.component.css'
})
export class BankDetailsComponent {
  id=0;
  data:Bank = new Bank();
  constructor(private __api:AngularConsumeAPIService,private __actroute:ActivatedRoute,private __router:Router){}
  ngOnInit(){
    console.log("this.__actroute.snapshot.params",this.__actroute);
    this.id=this.__actroute.snapshot.params['id'];
    this.__api.getbyid(this.id).subscribe((res:any)=>{
      this.data = res;
    });
  }

  delete(id:any){
    this.__api.delete(this.id).subscribe((res:any)=>{
      this.__router.navigate(['/getall']);
    });
  }
}
