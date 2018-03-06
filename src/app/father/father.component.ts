import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  content : string = "This is dynamic content on the father";
  sonMessage : string = "Default message";

  constructor() { }

  ngOnInit() {
  }

  getMessageForSon():string {
    return "A message from father to son";
  }

  onSonButtonClicked(message:string):void {
    this.sonMessage = "Message received from son: " + message;
  }
}
