import { NodeEntity } from "../entities/node.entity";

export type NodeType = 'folder' | 'file' | 'unset' | null;

export interface NodeModel {
  id: string;
  name: string;
  type: NodeType;
  child: NodeEntity
}
