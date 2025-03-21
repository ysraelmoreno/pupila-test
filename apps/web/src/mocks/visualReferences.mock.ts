export const BASE_MOCK_CONTEXT_VALUE = {
  addReference: jest.fn(),
  deleteReference: jest.fn(),
  updateReference: jest.fn(),
  groups: [],
  createGroup: jest.fn(),
  deleteGroup: jest.fn(),
  availableFilters: [],
  currentFilters: {
    tags: [],
    search: "",
  },
  references: [],
  setCurrentFilters: jest.fn(),
};
