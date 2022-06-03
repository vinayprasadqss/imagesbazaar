import React from 'react';
const images =[
    {image:"1.jpg", title:"Colour",person:"1 Person Only",location:"Indoor", age:"Child", orientation:"Horizontal"},
    {image:"2.jpg", title:"Beauty",person:"2 Person",location:"Outdoor", age:"Baby", orientation:"Vertical"},
    {image:"3.jpg", title:"Beauty",person:"3-5 Person",location:"Indoor", age:"Teenager", orientation:"Horizontal"},
    {image:"4.jpg", title:"Beauty",person:"Groups / Crowd",location:"Outdoor", age:"Young Adult", orientation:"Horizontal"},
    {image:"5.jpg", title:"Colour",person:"Without People",location:"Indoor", age:"Mature Adult", orientation:"Horizontal"},
    {image:"6.jpg", title:"Colour",person:"1 Person Only",location:"Outdoor", age:"Senior Adult", orientation:"Horizontal"},
    {image:"7.jpg", title:"Colour",person:"2 Person",location:"Indoor", age:"Child", orientation:"Horizontal"},
    {image:"8.jpg", title:"abc",person:"3-5 Person",location:"Outdoor", age:"Baby", orientation:"Horizontal"},
    {image:"9.jpg", title:"Colour",person:"Groups / Crowd",location:"Indoor", age:"Teenager", orientation:"Horizontal"},
    {image:"10.jpg", title:"SM979595",person:"Without People",location:"Outdoor", age:"Young Adult", orientation:"Horizontal"},
    {image:"11.jpg", title:"SM979595",person:"1 Person Only",location:"Indoor", age:"Mature Adult", orientation:"Horizontal"},
    {image:"12.jpg", title:"SM979595",person:"2 Person",location:"Outdoor", age:"Senior Adult", orientation:"Horizontal"},
    {image:"13.jpg", title:"SM979595",person:"3-5 Person",location:"Indoor", age:"Child", orientation:"Horizontal"},
    {image:"14.jpg", title:"SM979595",person:"Groups / Crowd",location:"Outdoor", age:"Baby", orientation:"Horizontal"},
    {image:"15.jpg", title:"SM979595",person:"Without People",location:"Indoor", age:"Teenager", orientation:"Horizontal"},
    {image:"16.jpg", title:"SM979595",person:"1 Person Only",location:"Outdoor", age:"Baby", orientation:"Horizontal"},
    {image:"17.jpg", title:"SM979595",person:"1 Person Only",location:"Indoor", age:"Child", orientation:"Horizontal"},
    {image:"18.jpg", title:"SM979595",person:"1 Person Only",location:"Outdoor", age:"Child", orientation:"Horizontal"},
    {image:"19.jpg", title:"SM979595",person:"2 Person",location:"Indoor", age:"Baby", orientation:"Horizontal"},
    {image:"20.jpg", title:"SM979595",person:"Without People",location:"Outdoor", age:"Teenager", orientation:"Horizontal"},
    {image:"21.jpg", title:"SM979595",person:"Without People",location:"Indoor", age:"Baby", orientation:"Horizontal"},
    {image:"22.jpg", title:"SM979595",person:"1 Person Only",location:"Outdoor", age:"Child", orientation:"Horizontal"},
    {image:"23.jpg", title:"SM979595",person:"2 Person",location:"Indoor", age:"Teenager", orientation:"Horizontal"},
    {image:"24.jpg", title:"SM979595",person:"3-5 Person",location:"Outdoor", age:"Baby", orientation:"Horizontal"},
    {image:"25.jpg", title:"SM979595",person:"Groups / Crowd",location:"Indoor", age:"Child", orientation:"Horizontal"},
    {image:"26.jpg", title:"SM979595",person:"3-5 Person",location:"Outdoor", age:"Baby", orientation:"Horizontal"},
    {image:"27.jpg", title:"SM979595",person:"2 Person",location:"Indoor", age:"Child", orientation:"Vertical"},
    {image:"28.jpg", title:"SM979595",person:"Groups / Crowd",location:"Outdoor", age:"Teenager", orientation:"Horizontal"},
    {image:"29.jpg", title:"SM979595",person:"Groups / Crowd",location:"Indoor", age:"Baby", orientation:"Horizontal"},
    {image:"30.jpg", title:"SM979595",person:"1 Person Only",location:"Outdoor", age:"Child", orientation:"Horizontal"},
]

const ImageScrollOld = ({searchTerm, filterTerm})=>{
    React.useEffect(()=>{
/*        let images = document.querySelectorAll(".imgLoad");
        let imageArray = [...images];
        imageArray.forEach(item => {
            if(item.naturalWidth<item.naturalHeight){
                item.parentNode.classList.add("V");
            }
        });*/
    })
    console.log("filterTerm", filterTerm);
     return(
        <section className={"imagesScrollWrapper"}>
            <div className="container-fluid">
                <div className="grid">
                    {
                       images.filter((val)=>{
                           if(searchTerm == ""){
                               for (let key in filterTerm) {
                                   if (val[key] === undefined || val[key] != filterTerm[key])
                                       return false;
                               }
                               return true;
                         }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                               for (let key in filterTerm) {
                                   if (val[key] === undefined || val[key] != filterTerm[key])
                                       return false;
                               }
                               return true;
                         }
                        }).map((item, index)=>{
                            let templateStringForImage = `/dummy/${item.image}`;
                            return(
                                <div key={images+index} className={`item ${(item.orientation=="Vertical")?"V":"H"}`}>
                                    <img src={templateStringForImage} className={"imgLoad"} alt={item.title}/>
                                    <div className="titleWrap">
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default ImageScrollOld;