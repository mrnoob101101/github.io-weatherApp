import React from 'react';

import {CommonWeatherBox} from "./components/CommonWeatherBox/CommonWeatherBox";
import {PlacesAutocomplete} from "./components/Test";


function App() {
    return (
        (
            <div className="App">
                <PlacesAutocomplete/>
                <CommonWeatherBox/>
            </div>
        )
    )
}

export default App;
