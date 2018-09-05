import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  age: number;
  gender: string;
  address: string;
  constructor(private service: CrudService) { }

  public onAdd() {
    console.log("ADD BUTTON");
    const data = { name: this.name, age: this.age, gender: this.gender, address: this.address };
    this.service.addData(data).subscribe((response: any) => {
      console.log("Response", response);
      if(response){
        alert("data added sucessfully");
      }else{
        alert("data not added");
      }

    });
  }
  public onGet() {
    console.log("ADD BUTTON");
    this.service.getData(this.name).subscribe((response: any) => {
      console.log("Response", response);
      this.age=response.age;
      this.gender=response.gender;
      this.address=response.address;
      if(response){
        alert("data read sucessfuly");
      }else{
        alert("data not read");
      }
    });
  }
  public onDelete() {
    console.log("delete customer");
    this.service.deleteData(this.name).subscribe((response: any) => {
      console.log(response);
      if(response){
        alert("data deleted sucessfuly");
      }else{
        alert("data not deleted read");
      }
    })
  }
  public onUpdate(){
    console.log("update button");
    const data={gender:this.gender,age:this.age,address:this.address};
    this.service.updateData(this.name, data).subscribe((response:any)=>{
      console.log(response);
      if(response.sucess){
        alert("data updated");
      }else{
          alert("data not updated");
      }
    })
  }
}
