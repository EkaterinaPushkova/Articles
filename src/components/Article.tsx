import { IArticle } from "../redux/mainPage/types";

type Props = {
  article: IArticle;
  deleteArticle: (article: IArticle) => void;
};

const Article = ({ article, deleteArticle }: Props) => {
  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </div>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  );
};

export default Article;
