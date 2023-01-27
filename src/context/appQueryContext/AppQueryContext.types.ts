import {ChangeEvent} from "react";

type ArticleType = {
    source: {
        id: string,
        name: string
    }
    author: string,
    title: string,
    description: string
    url: string,
    urlToImage: string
    publishedAt: Date
    content: string
};

type NewsStateType = ArticleType | undefined

type InitialContextType = {
    news: NewsStateType
    handleClick: (e: ChangeEvent<HTMLInputElement>) => void
}

export {
    NewsStateType,
    InitialContextType,
}