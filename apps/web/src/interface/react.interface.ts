export type ChildWithDisplayName = React.ReactElement & {
  type: {
    displayName?: string;
  };
};
