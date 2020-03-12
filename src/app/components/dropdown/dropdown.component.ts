import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() listItems = [];
  @Input() selectedItem = '';
  @Output() selectChangeEmit = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  selectChange(event) {
    this.selectChangeEmit.emit(event.target.value);
  }

}
