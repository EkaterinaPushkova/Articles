//file for TS types which can be used w-o importing
interface IArticle {
    id: number
    title: string
    content: string
}

type ArticleState = {
    articles: IArticle[]
}

type ArticleAction = {
    type: string
    article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction