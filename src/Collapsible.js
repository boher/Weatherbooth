import React, {useState, useRef} from "react";
import "./Collapsible.css";

function Collapsible(props){
    const [isOpen, setIsOpen] = useState(false);
    const parentRef = useRef();

    if (parentRef.current) console.log(parentRef);

    return (
        <div className = "collapsible">
            <div className= 'toggle' onClick={() => setIsOpen(!isOpen)}>
                {props.label}
            </div>
            <div ref = {parentRef}>
                {isOpen && <div className= 'content'>{props.children}</div>}
            </div>
            
        </div>
    );
}

export default Collapsible;