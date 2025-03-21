export interface Color {
  color: string;
  id: number;
}

export interface ColorPalette {
  colors: Color[];
  name: string;
  description: string;
  id: number;
  group: string;
  tags: string[];
}
