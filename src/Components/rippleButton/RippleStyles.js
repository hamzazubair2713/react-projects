import styled, { keyframes } from "styled-components";

export const RippleButton = styled.button`
  min-width: 150px;
  height: 50px;
  background: #2f2f52;
  /* text-align: center; */
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 2;
`;
export const Animation = keyframes`
0%{
    width: 0px;
    height: 0px;
    opacity: 1;
}
100%{
    width: 500px;
    height: 500px;
    opacity: 0;
}
`;
export const RippleEffect = styled.span`
  position: absolute;
  top: ${({ top }) => top && `${top}px`};
  left: ${({ left }) => left && `${left}px`};
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 50%;
  animation: ${Animation} 1s forwards;
`;