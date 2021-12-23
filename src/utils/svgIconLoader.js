import {
    ClearNight,
    Clouds,
    HardClouds, Mist,
    PartlyClouds,
    PartlyCloudsNight,
    Rain, RainWithMoon,
    RainWithSun, Snow,
    SunnyDay, Thunder
} from "../assets/SvgIcons";


export const getSvgIcon = (id) => {
    const icons = {
        "01d": <SunnyDay/>,
        "01n": <ClearNight/>,
        "02d": <PartlyClouds/>,
        "02n": <PartlyCloudsNight/>,
        "03d": <Clouds/>,
        "03n": <Clouds/>,
        "04d": <HardClouds/>,
        "04n": <HardClouds/>,
        "09d": <Rain/>,
        "09n": <RainWithMoon/>,
        "10d": <RainWithSun/>,
        "10n": <RainWithMoon/>,
        "11d": <Thunder/>,
        "11n": <Thunder/>,
        "13d": <Snow/>,
        "13n": <Snow/>,
        "50d": <Mist/>,
        "50n": <Mist/>,
    }
    return icons[id];
}

/*export const svgIconLoader = (id) => {
    switch (id) {
        case "01d":
            return <SunnyDay/>;
        case "01n":
            return <ClearNight/>;
        case "02d":
            return <PartlyClouds/>;
        case "02n":
            return <PartlyCloudsNight/>;
        case "03d":
            return <Clouds/>;
        case
    }
}*/






   /* <SunnyDay/>
    <ClearNight/>
    <PartlyClouds/>
    <PartlyCloudsNight/>
    <Clouds/>
    <HardClouds/>
    <Rain/>
    <RainWithSun/>
    <RainWithMoon/>
    <Thunder/>
    <Snow/>
    <Mist/>*/
