import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NodeEntity } from '../../core/entities/node.entity';
import { NodeModel, NodeType } from '../../core/models/node.model';
import { NodeTreeService } from '../../services/node-tree.service';
import { DeleteNodeProps } from '../../shared/components/node-name/node-name.component';
import { getUniqId } from '../../utils/id.generator';

@Component({
  selector: 'app-node-tree-view',
  templateUrl: './node-tree-view.component.html',
  styleUrls: ['./node-tree-view.component.scss']
})
export class NodeTreeViewComponent implements OnInit, OnDestroy {

  addMode = false;
  selectedNodeId: string = '';
  nodeType: NodeType = 'folder';
  parentEntity?: NodeEntity;
  nodeEntity?: NodeEntity;
  nodeTreeSubscription = new Subject();

  constructor(private nodeTreeService: NodeTreeService) { }

  ngOnInit(): void {
    this.nodeTreeService.nodes$.pipe(
      takeUntil(this.nodeTreeSubscription)
    ).subscribe((nodeEntity: NodeEntity) => {
      this.nodeEntity = nodeEntity;
    });
  }

  onAddChild(nodeName: any) {
    if (nodeName !== '') {
      const nodeModel = this.getNodeModel(nodeName);
      if (this.parentEntity) {
        this.nodeTreeService.addChildNode(nodeModel, this.parentEntity);
      } else {
        this.nodeTreeService.addRootNode(nodeModel);

      }
    }
    this.toggleAddMode();
    this.selectedNodeId = '';
    this.parentEntity = undefined;
  }

  onDeleteChild(deleteNodeProps: DeleteNodeProps) {
    const { nodeEntity, nodeModel } = deleteNodeProps;
    if (nodeEntity) {
      this.nodeTreeService.removeChildNode(nodeModel!.id, nodeEntity);
    } else {
      this.nodeTreeService.removeRootNode(nodeModel!.id);

    }
  }

  onAddChildClick(node: NodeModel) {
    this.selectedNodeId = node.id;
    this.parentEntity = node.child;
  }

  onNodeTypeClick(nodeType: NodeType) {
    this.nodeType = nodeType;
    this.toggleAddMode();

  }

  onAddRootFolderClick() {
    this.toggleAddMode();
    this.nodeType = 'folder';
  }

  toggleAddMode() {
    this.addMode = !this.addMode;
  }

  getNodeModel(nodeName: string): NodeModel {
    const id = getUniqId();

    return {
      id,
      name: nodeName,
      type: this.nodeType,
      child: new NodeEntity(),
    }
  }

  hasChild(nodeEntity: NodeEntity) {
    return nodeEntity.getNodes().length;
  }
  getNodeIconSrc(nodeType: NodeType = this.nodeType) {
    return nodeType === 'file' ? 'assets/icons/file-regular.svg' : 'assets/icons/folder-open-regular.svg'
  }
  ngOnDestroy() {
    this.nodeTreeSubscription.next();
    this.nodeTreeSubscription.complete();
  }
}
