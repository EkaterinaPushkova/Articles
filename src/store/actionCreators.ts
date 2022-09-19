import { ArticleAction, IArticle } from "../redux/mainPage/types";
import { TDispatch } from "../redux/redux.types";
import { ADD_ARTICLE, DELETE_ARTICLE } from "./actionTypes";

export const fakeHTTPrequest = (action: ArticleAction) => {
  return (dispatch: TDispatch) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
};

export const addArticle = (article: IArticle) => {
  const action: ArticleAction = {
    type: ADD_ARTICLE,
    article,
  };
  return fakeHTTPrequest(action);
};

export const deleteArticle = (article: IArticle) => {
  const action: ArticleAction = {
    type: DELETE_ARTICLE,
    article,
  };
  return fakeHTTPrequest(action);
};
