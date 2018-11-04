import { Component, OnInit } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';
import {EmployServiceService} from '../employ-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public myName = "Ghil";
  public currentUrl = window.location.href;
  public blueClass = "classBlue";

  public abilitaInput = false;
  public tipoinput = "number";

  public hasError = true;

  public styleToAdd={
    fontStyle: "italic",
    color: "blue"
  }

  public messageClass = {
    "classBlue": this.hasError,
    "classBool": !this.hasError
  }

  public sonoBooleano = true;
  public greeting = 'blah';

  public displayNgIf = true;

  public colorSwitch = "red";

  public someArray = ["item1", "item2", "item3"];

  public date = new Date();

  public employees = [];

  constructor(private _employService: EmployServiceService) { }

  ngOnInit() {
    this.employees = this._employService.getEmployees();
  }

  inputChanged(inputValue){
    alert("Input cambiato con " + inputValue.value);
  }

  thisIsAMethod(){
    return "Nome da metodo";
  }

  ilMioMetodo(event){
    //alert("Bottone cliccato");
    //debugger;
    this.greeting = "qualcosa";
  }

}
