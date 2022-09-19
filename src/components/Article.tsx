import * as React from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

type Props = {
    article: IArticle
    deleteArticle: (article: IArticle) => void
}

export const Article: React.FC<Props> = ({article, deleteArticle}) => {
    const dispatch: Dispatch<any> = useDispatch()

    const delArticle = React.useCallback(
        (article: IArticle) => 
        dispatch(deleteArticle(article)), 
        [dispatch, deleteArticle]
        )

    return(
        <div className='Article'>
            <div>
                <h1>{article.title}</h1>
                <p>{article.content}</p>
            </div>
            <button onClick={() => delArticle(article)}>Delete</button>
        </div>
    )
}
