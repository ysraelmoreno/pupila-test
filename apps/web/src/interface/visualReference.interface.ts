import { Base } from "./base.interface";

export interface VisualReference extends Base {
  url: string;
}

export interface Group {
  id: string;
  name: string;
}

export interface BaseVisualReferencePayload {
  references: VisualReference[];
  groups: Group[];
}
