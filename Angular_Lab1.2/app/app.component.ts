import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Form } from './form';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(){}
  model=new Form(1001,"Akshat",30000,"SDC");
  //submitted=false;
  onSubmit(){
   //this.submitted=true;
    alert(this.model.ID+" "+this.model.Name+" "+this.model.Salary+" "+this.model.Department);
  }
 get FormData(){return JSON.stringify(this.model)}
}
