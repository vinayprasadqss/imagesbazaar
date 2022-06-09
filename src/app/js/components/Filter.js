import React from 'react';
import CheckBoxGroup from "./CheckBoxGroup";

const person =[
    {
       label:"1 Person Only",
       value:"one"
    },
    {
        label:"2 Person",
        value:"two"
    },
    {
        label:"3-5 Person",
        value:"3-5"
    },
    {
        label:"Groups / Crowd",
        value:"crowds"
    },
    {
        label:"Without People",
        value:"nobody"
    },
]
const location =[
    {
        label:"Indoor",
        value:"indoor"
    },
    {
        label:"Outdoor",
        value:"outdoor"
    },
    {
        label:"Studio Shot",
        value:"studio shot"
    },

]


const ageValues = [
    {
        label:"Baby",
        value:"babies"
    },
    {
        label:"Child",
        value:"kid"
    },
    {
        label:"Teenager",
        value:"teenager"
    },
    {
        label:"Young Adult",
        value:"20-30"
    },
    {
        label:"Mature Adult",
        value:"40-50"
    },
    {
        label:"Senior Adult",
        value:"senior"
    }
    ]

const orientation =[
    {
        label:"Horizontal",
        value:"horizontal"
    },
    {
        label:"Vertical",
        value:"vertical"
    },
]

const Filter =({filterTerm, setFilterTerm, count, searchTerm, setImagesList})=>{
    const [open, setOpen] = React.useState(false);
    const onClickFilter =()=>{
        setOpen(!open);
    }
    const onChangeCheckBox =(event)=>{
        let classname = event.target.className;
        let name = document.querySelectorAll(`.${classname}`);
        if(event.target.checked === true){
            for(let i =0; i<name.length;i++){
                name[i].checked = false;
            }
            event.target.checked = true;
        }else if(event.target.checked === false){
            event.target.checked = false;
        }
        setImagesList([]);
        setFilterTerm({...filterTerm,[classname]:event.target.checked ? event.target.value:''})
    }
    let filterAllValue = searchTerm || filterTerm.person || filterTerm.location || filterTerm.age || filterTerm.orientation;
    return(
        <section className={"filterWrap"}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="filterBtn" onClick={onClickFilter}>
                            <h4>
                                <i className="fa fa-sliders" aria-hidden="true"></i>
                                FILTERS
                            </h4>
                        </div>
                        <p>
                            <strong>
                                {count} images {(searchTerm ||filterAllValue) && ("for " +'" ' + (searchTerm && searchTerm+" "))}
                                <span>
                                    {filterTerm.person && " "+filterTerm.person }
                                    {filterTerm.location && " "+ filterTerm.location }
                                    {filterTerm.age && " "+ filterTerm.age }
                                    {filterTerm.orientation && " "+ filterTerm.orientation}
                                </span>
                                {(searchTerm ||filterAllValue) && ' "' }

                            </strong>
                        </p>
                        {

                            <div className={`dropBox ${open && "open"}`}>
                                <div className="row">
                                    <div className="col-sm-3 col-6">
                                        <h3>People</h3>
                                        {
                                            person.map((item, index)=>{
                                                return(
                                                    <CheckBoxGroup key={"person"+ index}
                                                                   name={"person"}
                                                                   value={item.value}
                                                                   label={item.label}
                                                                   id={item.label}
                                                                   className={"person"}
                                                                   onChange={onChangeCheckBox}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <h3>Location</h3>
                                        {
                                            location.map((item, index)=>{
                                                return(
                                                    <CheckBoxGroup
                                                        key={"location"+ index}
                                                        name={"location"}
                                                        value={item.value}
                                                        label={item.label}
                                                        id={item.label}
                                                        className={"location"}
                                                        onChange={onChangeCheckBox}/>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <h3>Age</h3>
                                        {
                                            ageValues.map((item, index)=>{
                                                return(
                                                    <CheckBoxGroup
                                                        key={"person"+ index}
                                                        name={"age"}
                                                        value={item.value}
                                                        label={item.label}
                                                        id={item.label}
                                                        className={"age"}
                                                        onChange={onChangeCheckBox}/>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <h3>Orientation</h3>
                                        {
                                            orientation.map((item, index)=>{
                                                return(
                                                    <CheckBoxGroup
                                                        key={"person"+ index}
                                                        name={"orientation"}
                                                        value={item.value}
                                                        label={item.label}
                                                        id={item.label}
                                                        className={"orientation"}
                                                        onChange={onChangeCheckBox}/>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filter;