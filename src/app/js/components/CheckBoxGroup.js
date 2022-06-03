import React from 'react';

const CheckBoxGroup =({label, name, value, onChange})=>{
    return(
        <div className={"checkboxGroup"}>
            <label className="container"> {label}
                <input type="radio" name={name} value={value} onChange={onChange}/>
                    <span className="checkmark"></span>
            </label>
           {/* <label>
                <input type="checkbox"/>
                {label}
            </label>*/}
        </div>
    )
}
export default CheckBoxGroup;