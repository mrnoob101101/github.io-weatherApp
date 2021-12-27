import styled from "styled-components";

export const StyledCurrentWeatherWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'Poiret One', cursive;
  font-size: 1em;
`

export const WeatherIcon = styled.div`
  svg {
    max-width: 12vw;
    max-height: 12vw;
   /* width: 100%;
    height: 100%;*/
    fill: white;       
    
  }
  
`

export const MainWeatherBlock = styled.div`
  margin-left: 10vw;
`
export const AdditionalInfoBlock = styled.div`
  font-size: 2vw ;
  
  color: white;
  margin-right: 10vw;
  padding-top: 4vw;
`
export const WeatherDiv = styled.div`
  display: flex;
  
`
export const StyledP = styled.p`
  font-size: 7vw;
  color: white;
  margin: 5% 0 0 10%; 
  
`
export const Text = styled.p`
  font-size:calc(11px + 1.2vw);
  color: white;
  line-height: 0.7;
  margin-top: 2px;
`

export const TextBig = styled.p`
  font-size:calc(20px + 1.5vw);
  color: white;
  line-height: 0.7;
  margin-top: 2vw;
  
`
