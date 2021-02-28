export type Update = {
  request: {
    queryString: null;
    params: { id: number };
    body: Item;
  };
  response: {
    body: null;
  };
};

export type Item = {
  id: number;
  title: string;
  assignee: {
    id: number;
  }[];
  milestone: {
    type: string;
    from?: string;
    to?: string;
    dueDate?: string;
  } | null;
  step: {
    type: string;
  };
};
