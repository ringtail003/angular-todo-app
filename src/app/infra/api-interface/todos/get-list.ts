export type GetList = {
  request: {
    queryString: null;
    params: null;
    body: null;
  };
  response: {
    body: ResponseBodyItem[];
  };
};

export type ResponseBodyItem = {
  id: number;
  title: string;
  assignee: {
    id: number;
    name: string;
    avatarUrl: string;
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
