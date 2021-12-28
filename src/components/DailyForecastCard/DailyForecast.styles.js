import styled from "styled-components";

export const DailyForecastWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  /*font-size: 1vw;*/
  font-size:calc(10px + 0.5vw);
  padding: 2vw 7vw 0 7vw;
  border-top: 3px solid white;  
  font-family: 'Poiret One', cursive;
  color: white;  
`
export const Card = styled.div`
  width: 11vw;
  text-align: center;
`
export const ForecastIcon = styled.div`
  svg {
    max-width: calc(40px + 1.5vw);
    
    width: 100%;
    height: 100%;
    fill: white;
  }
 `

export const DateDiv = styled.div`
  font-family: Tinos,serif ;
  
`
export const Max = styled.p`
 font-size:calc(15px + 0.6vw);
`
