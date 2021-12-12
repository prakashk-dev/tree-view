import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from '../../../core/models/node.model';

export interface NodeNameComponentProps {
  nodeModel?: NodeModel;
  handleAdd: EventEmitter<NodeModel>;
  handleDelete: EventEmitter<NodeModel>;
}
@Component({
  selector: 'app-node-name',
  templateUrl: './node-name.component.html',
  styleUrls: ['./node-name.component.scss']
})
export class NodeNameComponent implements NodeNameComponentProps {
  @Input() nodeModel?: NodeModel;
  @Output() handleAdd = new EventEmitter<NodeModel>();
  @Output() handleDelete = new EventEmitter<NodeModel>();

  constructor() { }

  onAdd() {
    this.handleAdd.emit(this.nodeModel);
  }
  onDelete() {
    this.handleDelete.emit(this.nodeModel);
  }

  get nodeImgSrc() {
    return this.nodeModel?.type === 'folder' ? 'assets/icons/folder-open-regular.svg' : 'assets/icons/file-regular.svg';
  }
}
