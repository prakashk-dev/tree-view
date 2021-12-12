import { NodeModel } from "../models/node.model";

export class NodeEntity {
  private _nodes: { [key: string]: NodeModel } = {};

  constructor() { }

  addNode(nodeModel: NodeModel) {
    this._nodes[nodeModel.id] = nodeModel;
  }
  removeNode(id: string) {
    delete this._nodes[id];
  }

  getNodes() {
    return Object.values(this._nodes);
  }

  getNode(id: string) {
    return this._nodes[id];
  }
}
