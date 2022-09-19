import {
  ADD_ARTICLE,
  ArticleAction,
  ArticleReducer,
  DELETE_ARTICLE,
  IArticle,
} from "./types";

const initialState: ArticleReducer = {
  articles: [
    {
      id: 1,
      title: "post1",
      content:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "post 2",
      content:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
};

const reducer = (
  state: ArticleReducer = initialState,
  action: ArticleAction
): ArticleReducer => {
  switch (action.type) {
    case ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Math.random(),
        title: action.article.title,
        content: action.article.content,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case DELETE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles,
      };
  }
  return state;
};
export default reducer;
