import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AngularConsumeAPIService {

  url="http://localhost:3003";
  constructor(private http:HttpClient) { }

  getall(){
    var result = this.http.get(this.url+'/'+'getall');
    console.log("get result:-",result);
    return result;
  }

  getbyid(id:any){
    return this.http.get(this.url+'/'+'getbyid'+'/'+id);
  }

  insert(from:any){
    var insertresult = this.http.post(this.url+'/'+'insert',from);
    console.log("insert result:-",insertresult);
    return insertresult;
  }

  update(id:any,form:any){
    return this.http.put(this.url + '/' +'update' + '/' + id,form);
  }

  delete(id:any){
    return this.http.delete(this.url+'/'+'delete'+'/'+id);
  }
}
