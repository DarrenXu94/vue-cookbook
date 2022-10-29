export interface CookbookResponse {
  response: Response;
}

export interface Response {
  object: string;
  results: Result[];
  next_cursor: null;
  has_more: boolean;
  type: string;
  page: Page;
}

export interface Page {}

export interface Result {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: UserData;
  last_edited_by: UserData;
  cover: null;
  icon: null;
  parent: Parent;
  archived: boolean;
  properties: TableHeadings;
  url: string;
}

export interface UserData {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface TableHeadings {
  Steps: Steps;
  "Meal type": Ingredients;
  Ingredients: Ingredients;
  Name: Name;
}

export interface Ingredients {
  id: string;
  type: string;
  multi_select: MultiSelect[];
}

export interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

export interface Name {
  id: string;
  type: string;
  title: Title[];
}

export interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link: null;
}

export interface Steps {
  id: string;
  type: string;
  rich_text: Title[];
}
