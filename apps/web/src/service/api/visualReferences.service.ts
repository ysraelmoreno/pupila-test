import { VisualReference } from "../../interface/visualReference.interface";
import localStorageService from "../localStorage.service";

class VisualReferenceServices {
  private createVisualRefencesBasePayload(references: VisualReference[] = []) {
    const groups = localStorageService.get("visualReferenceGroups");

    return {
      references,
      groups: groups,
    };
  }

  getReferences() {
    const references = localStorageService.get("visualReferences");

    return this.createVisualRefencesBasePayload(references);
  }

  addReference(reference: VisualReference) {
    const { references } = this.getReferences();

    references.push(reference);

    localStorageService.add("visualReferences", references);

    return references;
  }

  async deleteReference(id: number) {
    const references = localStorageService.get("visualReferences");

    const newReference = references.filter(
      (reference: VisualReference) => Number(reference.id) !== Number(id)
    );

    localStorageService.add("visualReferences", newReference);

    return newReference;
  }
}

export default new VisualReferenceServices();
