export const ADD_ARTICLE = "ADD_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export type IArticle = {
  id: number;
  title: string;
  content: string;
};

export type ArticleReducer = {
  articles: IArticle[];
};

export type ArticleAction = {
  type: string;
  article: IArticle;
};
