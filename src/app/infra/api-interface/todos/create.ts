export type Create = {
  request: {
    queryString: null;
    params: { id: number };
    body: Item;
  };
  response: {
    body: {
      id: number;
    };
  };
};

export type Item = {
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
