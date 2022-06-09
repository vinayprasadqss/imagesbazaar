import React from 'react';

const CheckBoxGroup =({label, name, value, onChange, id , className})=>{
    return(
        <div className={"checkboxGroup"}>
            <label className="container"> {label}
                <input type="checkbox" name={name} value={value} onChange={onChange} id={id} className={className}/>
                    <span className="checkmark"></span>
            </label>
        </div>
    )
}
export default CheckBoxGroup;