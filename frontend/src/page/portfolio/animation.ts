import { keyframes } from 'styled-components';

export const HoverSway = keyframes`

    0% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
    20% {
   
      -webkit-transform: translate(-2px, 2px);
              transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
              transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
              transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
              transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
  `;
export const FallenBlock = (y: number) => keyframes`
     0%{
         top:30px ;
         left: ${Math.random() * 30}px;
         right:  ${Math.random() * 30}px;

     }
     10%{
         top: 5vh;
     }
    20%{
         top:10vh;
                 } 30%{
         top: 20vh;
     }
      40%{
         top: 30vh;
         left: ${Math.random() * 60}px;
         right:  ${Math.random() * 60}px;
         
     } 50%{
         top: 40vh;
     } 60%{
         top:50vh;
         left: ${Math.random() * 90}px;
         right:  ${Math.random() * 90}px;
     }
    70%{
         top:55vh;
     } 80%{
         top: 60vh;
     } 90%{
         top:80vh;
         left: ${Math.random() * 200}px;
         right:  ${Math.random() * 200}px;

     }
100%{
    visibility: hidden;
    top: 100vh;
}

`;
export const shakeAA = () => keyframes`
0%{
    transform: translateZ(-100px) rotate3d(0,0,0)  
}
100%{
    transform: ${`translateZ(-100px)  rotateY(${Math.random() < 0.5 ? Math.random() * 200 : Math.random() * 200 * -1}deg) rotateX(${
        Math.random() < 0.5 ? Math.random() * 200 : Math.random() * 200 * -1
    }deg)`};
}
`;
