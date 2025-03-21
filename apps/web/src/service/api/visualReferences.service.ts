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

  updateReference(id: number, reference: VisualReference) {
    const { references } = this.getReferences();

    const referenceToBeUpdated = references.find((ref) => ref.id === id);

    if (!referenceToBeUpdated) throw new Error("Reference doesn't exists");

    const index = references.findIndex((ref) => ref.id === id);

    references[index] = reference;

    localStorageService.add("visualReferences", references);

    return references;
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
