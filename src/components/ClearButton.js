import React from "react";

const ClearButton = ({handleClear, children}) => (
    <div className="clear-btn" onClick={handleClear}>
        {children}
    </div>
);
 
export default ClearButton;