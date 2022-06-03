import React from 'react';
import CheckBoxGroup from "./CheckBoxGroup";

const person_Label = [
    "1 Person Only",
    "2 Person",
    "3-5 Person",
    "Groups / Crowd",
    "Without People"
]
const location_Label = [
    "Indoor",
    "Outdoor",
    "Studio Shot"
]
const age_Label = [
    "Baby",
    "Child",
    "Teenager",
    "Young Adult",
    "Mature Adult",
    "Senior Adult"
]
const ageValues = [
    {
        label:"Baby",
        value:"0-7 Years"
    },
    {
        label:"Child",
        value:"7-20 Years"
    },
    {
        label:"Teenager",
        value:"20-25 Years"
    },
    {
        label:"Young Adult",
        value:"25-30 Years"
    },
    {
        label:"Mature Adult",
        value:"30-40 Years"
    },
    {
        label:"Senior Adult",
        value:"40-50 Years"
    }
    ]
const age_Value =[
    "0-7 Years",
    "7-20 Years",
    "20-25 Years",
    "25-30 Years",
    "30-40 Years",
    "40-50 Years",

]
const orientation_Label = [
    "Horizontal",
    "Vertical",
]

const Filter =({filterTerm, setFilterTerm, count, searchTerm, setSearchTerm, setImagesList})=>{
    const [open, setOpen] = React.useState(false);
    const onClickFilter =()=>{
        setOpen(!open);
    }
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
                                {count} images {searchTerm && "for " +'"' +searchTerm+'"' }
                            </strong>
                        </p>
                        {

                            <div className={`dropBox ${open && "open"}`}>
                                <div className="row">
                                    <div className="col-sm-3 col-6">
                                        <h3>People</h3>
                                        {
                                            person_Label.map((item, index)=>{
                                                return(
                                                    <CheckBoxGroup key={"person"+ index} name={"person"} value={item} label={item}
                                                                   onChange={(event)=>{setImagesList([]);setFilterTerm({...filterTerm,person:event.target.value})}}/>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <h3>Location</h3>
                                        {
                                            location_Label.map((item, index)=>{
                                                return(
                                                    <CheckBoxGroup key={"location"+ index} name={"location"} value={item} label={item}
                                                                   onChange={(event)=>{setImagesList([]);setFilterTerm({...filterTerm,location:event.target.value})}}/>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <h3>Age</h3>
                                        {
                                            ageValues.map((item, index)=>{
                                                return(
                                                    <CheckBoxGroup key={"person"+ index} name={"age"} value={item.value} label={item.label}
                                                                   onChange={(event)=>{setImagesList([]);setFilterTerm({...filterTerm,age:event.target.value})}}/>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <h3>Orientation</h3>
                                        {
                                            orientation_Label.map((item, index)=>{
                                                return(
                                                    <CheckBoxGroup key={"person"+ index} name={"orientation"} value={item} label={item}
                                                                   onChange={(event)=>{setImagesList([]);setFilterTerm({...filterTerm,orientation:event.target.value})}}/>
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