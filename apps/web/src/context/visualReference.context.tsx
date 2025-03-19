import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Group, VisualReference } from "../interface/visualReference.interface";
import visualReferencesService from "../service/api/visualReferences.service";

export interface CurrentFilters {
  tags: string[];
  search: string;
}

export interface IVisualReferenceContext {
  references: VisualReference[];
  groups: Group[];
  addReference: (reference: VisualReference) => void;
  deleteReference: (id: number) => void;
  availableFilters: string[];
  currentFilters: CurrentFilters;
  setCurrentFilters: (id: CurrentFilters) => void;
}

const VisualReferenceContext = createContext<IVisualReferenceContext>(
  {} as IVisualReferenceContext
);

export const VisualReferenceProvider = ({ children }: PropsWithChildren) => {
  const [references, setReferences] = useState<VisualReference[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [currentFilters, setCurrentFilters] = useState<CurrentFilters>(
    {} as CurrentFilters
  );

  useEffect(() => {
    (async () => {
      const data = visualReferencesService.getReferences();

      setReferences(data.references);
      setGroups(data.groups);
    })();
  }, []);

  const availableFilters = useMemo(() => {
    const tagsSet = [
      ...new Set(references.flatMap((reference) => reference.tags)),
    ];

    return tagsSet;
  }, [references]);

  const addReference = async (reference: VisualReference) => {
    const newReference = visualReferencesService.addReference(reference);

    setReferences(newReference);
  };

  const deleteReference = async (id: number) => {
    const updatedReferences = await visualReferencesService.deleteReference(id);

    setReferences([...updatedReferences]);
  };

  const referencesFormatted = useMemo(() => {
    const filteredByTags: VisualReference[] = references
      .map((reference) => {
        const containAnyTag = reference.tags.some((tag) =>
          currentFilters?.tags?.length > 0
            ? currentFilters.tags.includes(tag)
            : true
        );

        if (!containAnyTag) {
          return false;
        }

        return reference;
      })
      .filter(Boolean) as VisualReference[];

    const filteredByText = filteredByTags.filter((reference) => {
      if (currentFilters?.search === "" || !currentFilters?.search) {
        return true;
      }

      return (
        reference?.name.includes(currentFilters?.search) ||
        reference?.description.includes(currentFilters?.search)
      );
    });

    return filteredByText;
  }, [references, currentFilters]);

  return (
    <VisualReferenceContext.Provider
      value={{
        deleteReference,
        references: (referencesFormatted as VisualReference[]) ?? [],
        groups,
        addReference,
        availableFilters,
        setCurrentFilters,
        currentFilters,
      }}
    >
      {children}
    </VisualReferenceContext.Provider>
  );
};

export const useVisualReferences = () => {
  const context = useContext(VisualReferenceContext);

  return context;
};
