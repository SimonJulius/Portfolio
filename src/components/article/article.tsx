import React from "react";
import ArticleStyle from "./article.style";
import ArticleBody from "./article-body";
import ArticleHeader from "./article-head";

interface IArticleProps {
    topic: string;
    body: string;
}

const Article = ({topic, body}: IArticleProps) => {
    return (
        <ArticleStyle>
          <ArticleHeader header={topic}/>
          <ArticleBody  content={body}/>
        </ArticleStyle>
    )
};

export default Article;
