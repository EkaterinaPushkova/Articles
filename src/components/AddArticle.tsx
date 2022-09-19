import { useCallback, useState } from "react";

import { IArticle } from "../redux/mainPage/types";

type Props = {
  saveArticle: (article: IArticle | any) => void;
};

const AddArticle = ({ saveArticle }: Props) => {
  const [article, setArticle] = useState<IArticle | {}>();

  const handleArticleData = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setArticle({
        ...article,
        [e.currentTarget.id]: e.currentTarget.value,
      });
    },
    [article]
  );

  const addNewArticle = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      saveArticle(article);
    },
    [article, saveArticle]
  );

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="content"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <button disabled={!article}>Add article</button>
    </form>
  );
};

export default AddArticle;
