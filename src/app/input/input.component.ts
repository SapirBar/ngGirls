import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
      <input [value]="title"              
       (keyup.enter)="changeTitle(inputElement)"
       #inputElement>

<button class="btn btnRed" (click)="changeTitle(inputElement)">
  Save
</button>
    <p>
      The title is: {{ title }}
    </p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  private title: string = 'JJJ';
  constructor() {
  }
  
  
  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

}



