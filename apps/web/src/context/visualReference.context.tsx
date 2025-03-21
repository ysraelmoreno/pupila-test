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
import groupsService from "../service/api/groups.service";

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
  updateReference: (id: number, reference: VisualReference) => void;
  setCurrentFilters: (id: CurrentFilters) => void;
  createGroup: (newGroup: Omit<Group, "id">) => void;
  deleteGroup: (id: string) => void;
}

export const VisualReferenceContext = createContext<IVisualReferenceContext>(
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
      ...new Set(references?.flatMap((reference) => reference.tags)),
    ];

    return tagsSet;
  }, [references]);

  const updateReference = async (
    id: number,
    updatedReference: VisualReference
  ) => {
    const referencesUpdated = visualReferencesService.updateReference(
      id,
      updatedReference
    );

    setReferences(referencesUpdated);

    return referencesUpdated;
  };

  const addReference = async (reference: VisualReference) => {
    const newReference = visualReferencesService.addReference(reference);

    setReferences([...newReference]);
  };

  const deleteReference = async (id: number) => {
    const updatedReferences = await visualReferencesService.deleteReference(id);

    setReferences([...updatedReferences]);
  };

  const createGroup = (group: Omit<Group, "id">) => {
    const groups = groupsService.createGroup(group, "visualReferenceGroups");

    setGroups(groups);
  };

  const deleteGroup = (id: string) => {
    groupsService.deleteGroup("visualReferenceGroups", id);

    setGroups(groups.filter((group) => group.id !== id));
  };

  const referencesFormatted = useMemo(() => {
    const filteredByTags: VisualReference[] = references
      .map((reference) => {
        const containAnyTag = reference?.tags?.some((tag) =>
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
        reference?.name
          ?.toLowerCase()
          .includes(currentFilters?.search.toLowerCase()) ||
        reference?.description
          ?.toLowerCase()
          .includes(currentFilters?.search?.toLowerCase())
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
        updateReference,
        currentFilters,
        createGroup,
        deleteGroup,
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
