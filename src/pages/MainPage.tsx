import { useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { Article, AddArticle } from "../components";
import { IArticle } from "../redux/mainPage/types";
import { TDispatch, TRootStoreState } from "../redux/redux.types";
import { addArticle, deleteArticle } from "../store/actionCreators";
import "./../styles/mainPage.css";

const MainPage = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: TRootStoreState) => state.mainPage.articles,
    shallowEqual
  );
  const dispatch: TDispatch = useDispatch();

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  const delArticle = useCallback(
    (article: IArticle) => dispatch(deleteArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <h1>Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          deleteArticle={delArticle}
        />
      ))}
    </main>
  );
};

export default MainPage;
