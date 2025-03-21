export interface VisualReference {
  name: string;
  description: string;
  tags: string[];
  url: string;
  group?: string;
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
