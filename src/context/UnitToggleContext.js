import React, { createContext, useState } from 'react';

export const UnitToggleContext = createContext();

/*function UnitToggle(props) {

  // Set state of Temp Celcius / Fahrenheit
  const [unit, setUnit] = useState(false);

  return(
      <UnitToggleContext.Provider value={{unit, setUnit}}>
        {props}
      </UnitToggleContext.Provider>
    )
};
  
export default UnitToggle;*/