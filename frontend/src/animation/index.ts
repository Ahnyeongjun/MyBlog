import { keyframes } from 'styled-components';

export const BoxShaodw = keyframes`
    0% {
        transform: translateZ(0);

        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);  }
  100% {
    transform: translateZ(50px);

    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
`;
export const BoxShaodwWhite = keyframes`
    0% {
        transform: translateZ(0);

        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);  }
  100% {
    transform: translateZ(50px);

    box-shadow: 0 0 20px 0px white;
  }
`;
export const HoverPage = keyframes`
0%{
    font-size: 28px;
}
100%{
    font-size: 29px;
}
`;

export const Bounse = keyframes`
  0% {
    transform: translate3d(0px, 0px, 0);
  }
  50% {
    transform: translate3d(0px, -4px, 0);
  }
  100% {
    transform: translate3d(0px, 0px, 0);
  }
`;
export const RedBounse = keyframes`
  0% {
    transform: translate3d(0px, 0px, 0);
    color:red;
  }
  50% {
    transform: translate3d(0px, -4px, 0);
    color:red;

  }
  100% {
    transform: translate3d(0px, 0px, 0);
  }
`;
export const slideTop = keyframes`
  0% {
    -webkit-transform: translateY(800px);
            transform: translateY(800px);
            display: flex;

  }
  /* 50%{
    -webkit-transform: translateY(400px);
            transform: translateY(400px);
  } */
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
            display: none;
            
  }
  
`;
export const slideDown = keyframes`
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    display: flex;
          }
  /* 50%{
    -webkit-transform: translateY(400px);
            transform: translateY(400px);
  } */
  100% {
    -webkit-transform: translateY(100vh);
            transform: translateY(100vh);
    display: none;
    height: 0px;
    overflow: hidden;

}
`;
