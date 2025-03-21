import { Base } from "./base.interface";

export interface Color {
  color: string;
  id: number;
}

export interface ColorPalette extends Base {
  colors: Color[];
}
