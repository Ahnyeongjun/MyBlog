import styled from 'styled-components';
export const Main = styled.div`
    display: grid;
    /* height: 100vh; */
    margin: 0;
    grid-template-areas:
        'header header header '
        'intro intro intro'
        '. . .'
        '. featured . '
        '. article .'
        '. . . '
        'footer footer footer';
    grid-template-rows: 60px 700px 20px 500px auto 60px 50px;
    width: 100vw;
    grid-template-columns: 1fr 3fr 1fr;
    min-height: 100vh;

    &.check {
        color: white;
        background: black;
    }
    @media only screen and (max-width: 1920px) {
        grid-template-columns: 1fr 4fr 1fr;
    }
    @media only screen and (max-width: 1300px) {
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
        grid-template-columns: 0fr 1fr 0fr;
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
    padding: 40px 2vw;
    &.check {
        background: black;
    }
    width: 1600px;
    @media only screen and (max-width: 1920px) {
        width: 1200px;
    }
    @media only screen and (max-width: 1440px) {
        width: 1000px;
    }
    @media only screen and (max-width: 1200px) {
        width: 90vw;
    }
    @media only screen and (max-width: 800px) {
        width: 96vw;
    }
`;
