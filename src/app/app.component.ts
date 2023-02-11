import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'this is data_binding';
  name = "rushi";
  country = "india";

  months = ["jan","feb","march","april","may","jun","jully","aug","sep","oct","nov","dec"]

  monthchanged(event:Event){
    let ctrl = <HTMLSelectElement>(event.target);
    alert("you selected" + ctrl.value);
  }

  clicked(){
    alert("hello" + this.name);
  }

  textInput(event:Event){
    let ctrl = <HTMLInputElement>event.target;
    this.name = ctrl.value;
  }
}
