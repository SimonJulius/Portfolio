import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

import HomeStyle from "./home.style";
import Circle from "../../components/circle/circle";
import Article from "../../components/article/article";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    color: #efefef;
}
body {
    background-color: #0a192f;
  }
`;

const textContent = {
  content: `I am passionate about building excellent software
   that improves the lives of those around me.
   I enjoy working with React, Node, Typescript.
   I quite easily adapt to new technologies and takes
   clean code and separation of concern very seriously.
   If you are looking for that person that will give his
   all to grow with your company, then my contact is just
   a click away.
  `,
};

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <HomeStyle>
        <Circle
          size={250}
          backgroundImage="/images/simon-julius.jpg"
          borderSize={18}
          borderStyle="solid"
          borderColor="#172a45"
          translateProps={[0, 0]}
        />
        <Article topic="Software Engineer" body={textContent.content} />
      </HomeStyle>
      <Footer />
      <GlobalStyle />
    </Fragment>
  );
}
