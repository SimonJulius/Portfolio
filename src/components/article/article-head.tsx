import React from 'react'

import ArticleHeadStyle from './article-head.style';

interface IAH {
    header: string
}
const ArticleHeader = ({header}: IAH)=>{

    return (
    <ArticleHeadStyle>
        {header}
    </ArticleHeadStyle>
    )
}

export default ArticleHeader