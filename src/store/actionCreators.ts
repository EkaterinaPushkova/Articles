import * as actionTypes from './actionTypes'


export function fakeHTTPrequest(action: ArticleAction)  {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}

export function addArticle (article: IArticle) {
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article,
    }
    return fakeHTTPrequest(action)
}

export function deleteArticle (article: IArticle) {
    const action: ArticleAction = {
        type: actionTypes.DELETE_ARTICLE,
        article,
    }
    return fakeHTTPrequest(action)
}

