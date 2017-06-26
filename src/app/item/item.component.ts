import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p>
      {{ todoItem.title }}
    </p>
    <button (click)="removeItem()">
    remove
    </button>
  `,
  styleUrls: ['./item.component.css']

})
export class ItemComponent implements OnInit {

  constructor() { }

  @Input() item: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  removeItem() {
    this.remove.emit(this.item);
  }
  ngOnInit() {
  }
  

}
