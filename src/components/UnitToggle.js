import React, { useContext } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { UnitToggleContext } from '../context/UnitToggleContext.js';

function UnitToggle() {
  // Set state of imperial or metric units
  const { unit, setUnit } = useContext(UnitToggleContext);

  return(
      <BootstrapSwitchButton checked={unit} onlabel="Imperial" offlabel="Metric" onstyle="warning" offstyle="success" 
      width={150} onChange={(checked) => setUnit(checked)}/>
    )
};
  
export default UnitToggle;