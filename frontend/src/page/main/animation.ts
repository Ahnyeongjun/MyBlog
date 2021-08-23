import styled, { keyframes } from "styled-components";

export const ShakePostIt = keyframes`
    0%{
        transform: rotate(0deg);
    }
    30%{
        transform: rotate(5deg);
    }
    60%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }`;
