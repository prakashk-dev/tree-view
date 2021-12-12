import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeEntity } from '../../../core/entities/node.entity';
import { NodeModel } from '../../../core/models/node.model';

export interface DeleteNodeProps {
  nodeModel?: NodeModel,
  nodeEntity?: NodeEntity
}
export interface NodeNameComponentProps {
  nodeModel?: NodeModel;
  nodeEntity?: NodeEntity;
  handleAdd: EventEmitter<NodeModel>;
  handleDelete: EventEmitter<DeleteNodeProps>;
}
@Component({
  selector: 'app-node-name',
  templateUrl: './node-name.component.html',
  styleUrls: ['./node-name.component.scss']
})
export class NodeNameComponent implements NodeNameComponentProps {
  @Input() nodeEntity?: NodeEntity;
  @Input() nodeModel?: NodeModel;
  @Output() handleAdd = new EventEmitter<NodeModel>();
  @Output() handleDelete = new EventEmitter<DeleteNodeProps>();

  constructor() { }

  onAdd() {
    this.handleAdd.emit(this.nodeModel);
  }
  onDelete() {
    this.handleDelete.emit({ nodeEntity: this.nodeEntity, nodeModel: this.nodeModel });
  }

  get nodeImgSrc() {
    return this.nodeModel?.type === 'folder' ? 'assets/icons/folder-open-regular.svg' : 'assets/icons/file-regular.svg';
  }
}
