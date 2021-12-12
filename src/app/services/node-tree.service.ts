import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NodeEntity } from '../core/entities/node.entity';
import { NodeModel } from '../core/models/node.model';


@Injectable({
  providedIn: 'root'
})
export class NodeTreeService {
  nodes$: BehaviorSubject<NodeEntity>;
  private _rootNodeEntity: NodeEntity;

  constructor() {
    this._rootNodeEntity = new NodeEntity();
    this.nodes$ = new BehaviorSubject<NodeEntity>(this._rootNodeEntity);
  }

  addParentNode(nodeModel: NodeModel) {
    this._rootNodeEntity.addNode(nodeModel);
    this.nodes$.next(this._rootNodeEntity);
  }
  addChildNode(nodeModel: NodeModel, nodeEntity: NodeEntity) {
    nodeEntity.addNode(nodeModel);
    this.nodes$.next(this._rootNodeEntity);
  }

  removeParentNode(id: string) {
    this._rootNodeEntity.removeNode(id);
    this.nodes$.next(this._rootNodeEntity);
  }
  removeChildNode(id: string, nodeEntity: NodeEntity) {
    nodeEntity.removeNode(id);
    this.nodes$.next(this._rootNodeEntity);
  }

}
