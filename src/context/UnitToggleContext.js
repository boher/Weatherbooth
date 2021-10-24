import React, { createContext, useState } from 'react';

export const UnitToggleContext = createContext();

/*function UnitToggleProvider(props) {

  // Refer to github.com/hsankalp/weather-app/commit/3e22d148e496f315ae3ef6000001a5abc0d8b4d8
  // CONSIDER ONLY if refactoring fetchWeather as a component, Top & Bottom Nav as another component from App.js
  const [unit, setUnit] = useState(false);

  return(
      <UnitToggleContext.Provider value={{unit, setUnit}}>
        {props}
      </UnitToggleContext.Provider>
    )
};
  
export default UnitToggle;*/