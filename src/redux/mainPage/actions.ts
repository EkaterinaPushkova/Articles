import { TDispatch } from "../redux.types";
import { ADD_ARTICLE, ArticleAction, DELETE_ARTICLE, IArticle } from "./types";

export function fakeHTTPrequest(action: ArticleAction) {
  return (dispatch: TDispatch) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: ADD_ARTICLE,
    article,
  };
  return fakeHTTPrequest(action);
}

export function deleteArticle(article: IArticle) {
  const action: ArticleAction = {
    type: DELETE_ARTICLE,
    article,
  };
  return fakeHTTPrequest(action);
}
