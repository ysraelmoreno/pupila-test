import { ColorPalette } from "../../interface/colorPalette.interface";
import localStorageService from "../localStorage.service";

class ColorPalettesService {
  getPalettes(): ColorPalette[] {
    const palettes = localStorageService.get("colorPalettes");

    return palettes ?? [];
  }

  getPaletteGroups() {
    const groups = localStorageService.get("colorPalettesGroup");

    return groups;
  }

  editPalette(palette: ColorPalette) {
    const palettes = this.getPalettes();

    const index = palettes.findIndex(
      (findPalette) => findPalette.id === palette.id
    );

    palettes[index] = palette;

    localStorageService.add("colorPalettes", palettes);

    return palettes;
  }

  createPalette(palette: ColorPalette) {
    const palettes = this.getPalettes();

    palettes.push(palette);

    localStorageService.add("colorPalettes", palettes);

    return palettes;
  }
}

export default new ColorPalettesService();
