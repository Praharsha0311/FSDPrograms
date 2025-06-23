import { Component } from '@angular/core';

@Component({
  selector: 'app-event-css',
  templateUrl: './event-css.component.html',
  styleUrls: ['./event-css.component.css']
})
export class EventCssComponent {
  name:string='';
  inputClass: string='';
  addHighlight(){
    this.inputClass='highlight';
  }
  removeHighlight(){
    this.inputClass='';
  }

}
