import styled, { keyframes } from "styled-components";
import { ShakePostIt } from "./animation";
import { Route, Link } from "react-router-dom";
export const Main = styled.div`
  display: grid;
  /* height: 100vh; */
  margin: 0;
  grid-template-areas:
    "header header header "
    "intro intro intro"
    ". . ."
    ". featured . "
    ". article ."
    ". . . "
    "footer footer footer";
  grid-template-rows: 60px 700px 20px 500px auto 60px 50px;
  grid-template-columns: 1fr 4fr 1fr;
  min-height: 100vh;
  &.check {
    color: white;
    background: black;
  }
  @media only screen and (max-width: 1200px) {
    grid-template-rows: 60px auto 10px auto auto 60px 60px;
    grid-template-columns: 1fr 6fr 1fr;
    /* grid-template-areas:
      "header header "
      "intro intro "
      ". . "
      "featured featured "
      "article article"
      ". . "
      "footer footer "; */
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: 0.5fr 8fr 0.5fr;
  }
  @media only screen and (prefers-color-scheme: light) {
  }
`;

export const Ads = styled.div`
  background: gold;

  grid-area: ads;
`;
export const Article = styled.article`
  grid-area: article;
  display: flex;
  background: white;
  &.check {
    background: black;
  }
`;

export const Footer = styled.footer`
  grid-area: footer;
  text-align: center;
  background: rgb(240,240,240);
  &.check{
    background: grey;
    color:white;
  }
`;

export const FooterFont = styled.a`
padding-top:20px;
  color:black;
  display: block;
  font-size: 15px;
  &.check{
    color:white;
  }
`;

////////
