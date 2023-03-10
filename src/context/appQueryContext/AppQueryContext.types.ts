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

type responseStateType = undefined | string

type InitialContextType = {
    isRefetching: boolean
    isLoading: boolean
    response?: responseStateType
    showNews: (isShow: boolean) => void
    isError: boolean
}

export {
    responseStateType,
    InitialContextType,
    ArticleType,
}