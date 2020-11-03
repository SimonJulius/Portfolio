import React from "react";

import ArticleBodyStyle from "./article-body.style";

interface IAB {
  content: string;
}

const ArticleBody = ({ content }: IAB) => {
  return <ArticleBodyStyle>{content}</ArticleBodyStyle>;
};
export default ArticleBody;
