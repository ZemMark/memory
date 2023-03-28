import styled from "styled-components";
export const GenerateNums = styled.button`

/* CSS */
  appearance: none;
  background-color: #000000;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 150px;
  will-change: transform;

:disabled {
  pointer-events: none;
}

:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

:active {
  box-shadow: none;
  transform: translateY(0);
}
`

export const CountDown = styled.p`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
` 

export const Numbers = styled.p`
  
`