import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http:HttpClient) { }
  public addData(data){
  const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})
  }
  return this.http.post("http://localhost:3071/customer/add",{"data":data},httpOptions);

}
public getData(name){
  const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})
  }
  return this.http.get("http://localhost:3071/customer/profile/"+name,httpOptions);
}
public deleteData(id){
  return this.http.delete("http://localhost:3071/customer/delete/"+id);
}
public updateData(id,data){
  const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})
  }
  return this.http.post("http://localhost:3071/customer/update/"+id,{"data":data},httpOptions);
}
}
