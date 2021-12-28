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
  /*background-color: #056b62;*/
  border-radius: 30px;
  padding: 1vw 4vw 0 3vw;


`
export const AdditionalInfoBlock = styled.div`
  font-size: 2vw;
  color: white;
  margin-right: 10vw;
  padding-top: 0;

`
export const WeatherDiv = styled.div`
  display: flex;

`
export const DayForecast = styled.div`
  display: flex;
  justify-content: space-around;
  /*background-color: #056b62;*/
  border-radius: 30px;
  padding: 3vw 1vw 1vw 1vw;

`
export const TextInfo = styled.div`
  /*background-color: #056b62;*/
  border-radius: 30px;
  padding: 1vw 1vw 1vw 2vw;
  margin-bottom: 4vw;
`

export const StyledP = styled.p`
  font-size: 7vw;
  color: white;
  margin: 5% 0 0 10%;

`
export const Text = styled.p`
  font-size: calc(11px + 1vw);
  color: white;
  line-height: 0.9;
  /*margin-top: 2px;*/
`

export const TextBig = styled.p`
  font-size: calc(20px + 1.5vw);
  color: white;
  line-height: 0.9;
  margin-top: 2vw;

`

export const IdleStatusIcon = styled.div`
  display: flex;
  justify-content: center;

  svg {
    shape-rendering: geometricPrecision;
    fill: #fac55d;
    /*#FFCC33*/

  }

  g, path, circle, rect {

    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    transform-box: fill-box;

    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    animation-timing-function: linear;
    -o-animation-timing-function: linear;

    -o-animation-direction: normal;
    animation-direction: normal;
    -webkit-animation-direction: normal;
    -moz-animation-direction: normal;

    -moz-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;

    -moz-animation-duration: 12s;
    -webkit-animation-duration: 12s;
    -o-animation-duration: 12s;
    animation-duration: 12s;

  }

  .climacon_componentWrap-sun {

    -webkit-animation-name: rotate;
    -moz-animation-name: rotate;
    -o-animation-name: rotate;
    animation-name: rotate;
  }

  .climacon_component-stroke_sunSpoke {

    -webkit-animation-name: scale;
    -moz-animation-name: scale;
    -o-animation-name: scale;
    animation-name: scale;

    -webkit-animation-direction: alternate;
    -moz-animation-direction: alternate;
    -o-animation-direction: alternate;
    animation-direction: alternate;

    -webkit-animation-duration: 3s;
    -moz-animation-duration: 3s;
    -o-animation-duration: 3s;
    animation-duration: 3s;

  }

  .climacon_component-stroke_sunSpoke:nth-child(even) {

    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
    -o-animation-delay: 3s;
    animation-delay: 3s;

  }

  @-webkit-keyframes rotate {
    0% {
      -webkit-transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }


  @-moz-keyframes rotate {
    0% {
      -moz-transform: rotate(0);
    }
    100% {
      -moz-transform: rotate(360deg);
    }
  }


  @-o-keyframes rotate {
    0% {
      -o-transform: rotate(0);
    }
    100% {
      -o-transform: rotate(360deg);
    }
  }


  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes scale {
    0% {
      -webkit-transform: scale(1, 1);
    }
    100% {
      -webkit-transform: scale(.5, .5);
    }
  }

  @-moz-keyframes scale {
    0% {
      -moz-transform: scale(1, 1);
    }
    100% {
      -moz-transform: scale(.5, .5);
    }
  }

  @-o-keyframes scale {
    0% {
      -o-transform: scale(1, 1);
    }
    100% {
      -o-transform: scale(.5, .5);
    }
  }

  @keyframes scale {
    0% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(.5, .5);
    }
  }
`
