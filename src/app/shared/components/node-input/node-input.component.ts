import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface NodeInputComponentProps {
  nodeName: string;
  nodeIconSrc: string;
  handleAdd: EventEmitter<string>;
}
@Component({
  selector: 'app-node-input',
  templateUrl: './node-input.component.html',
  styleUrls: ['./node-input.component.scss']
})
export class NodeInputComponent implements OnInit, NodeInputComponentProps {

  nodeName = '';
  @Input() nodeIconSrc: string = '';
  @Output() handleAdd = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.handleAdd.emit(this.nodeName);
  }
  onRemove() {
    this.handleAdd.emit('');
  }
}
