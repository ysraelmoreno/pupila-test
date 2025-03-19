export interface VisualReference {
  name: string;
  description: string;
  tags: string[];
  url: string;
  groupId?: string;
  id: number;
}

export interface Group {
  id: string;
  name: string;
}

export interface BaseVisualReferencePayload {
  references: VisualReference[];
  groups: Group[];
}
