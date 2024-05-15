import { Component } from '@angular/core';
import { AngularConsumeAPIService } from '../angular-consume-api.service';
import { Bank } from './bank';

@Component({
  selector: 'app-angular-api',
  templateUrl: './angular-api.component.html',
  styleUrl: './angular-api.component.css'
})
export class AngularAPIComponent {
  data:Bank[]=[];
  constructor(private __api:AngularConsumeAPIService){}

  ngOnInit(){
    /*var result1 = this.api.getallfacultys();
    console.log("before write subscribe getallfacultys result:- ",result1); //return Observable  */
    var result2 = this.__api.getall().subscribe((res:any)=>{
      console.log("res:-",res);
      this.data = res;
      console.log(this.data);
    });
    console.log("after write subscribe getallfacultys result:- ",result2);
  }

  delete(id:any){
    this.__api.delete(id).subscribe((res)=>{
      this.ngOnInit();
    });
  }
}
