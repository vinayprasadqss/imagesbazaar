import React from 'react';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageScroll_old2 = ({searchTerm, filterTerm, imagesList,setImagesList})=>{
    const PAGE_LIMIT = 10;
    /*const apiPath1 = "https://api.unsplash.com/photos/?page=1&&per_page=30&&client_id=DemGzNOM7jSIXLjHojonsAt6xOx364PWfatt6zCbAW0";*/
    const apiPath = "https://api.unsplash.com/photos/";

    const getImagesList = ()=>{
        let pageNo=Math.ceil(imagesList.length/PAGE_LIMIT)+1;
        let client_id = "client_id=DemGzNOM7jSIXLjHojonsAt6xOx364PWfatt6zCbAW0";
        const searchQueryParams = "?page="+pageNo +"&query="+ searchTerm + "&&per_page="+PAGE_LIMIT+"&&"+client_id;
        const searchQueryParams2 = "?page="+5 + "&&per_page="+PAGE_LIMIT+"&&"+client_id;
        const queryParams = "?page="+pageNo + "&&per_page="+PAGE_LIMIT+"&&"+client_id;
        const finalQuery =searchTerm ? searchQueryParams: queryParams;
        const finalPath = apiPath +  finalQuery;

        axios.get(finalPath)
            .then((res)=>{
                const apiRes = res?.data;
                const mergeData = [...imagesList, ...apiRes]
                setImagesList(mergeData);
            }).catch((err)=>{
                console.log("error while loading images data", err);
        })
    };


    const fetchMoreData=()=>{
        getImagesList()
    };
    React.useEffect(()=>{
        getImagesList();
    },[])

     return(
        <section className={"imagesScrollWrapper"}>
            <div className="container-fluid">
                <div className="grid">
                    <InfiniteScroll
                        dataLength={imagesList.length}
                        next={fetchMoreData}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                    >
                        {
                            imagesList && imagesList.length>0 && imagesList.filter((val)=>{
                                if(searchTerm == ""){
                                    for (let key in filterTerm) {
                                        if (val[key] === undefined || val[key] != filterTerm[key])
                                            return false;
                                    }
                                    return true;
                                }else if(val?.sponsorship?.tagline?.toLowerCase().includes(searchTerm.toLowerCase())){
                                    for (let key in filterTerm) {
                                        if (val[key] === undefined || val[key] != filterTerm[key])
                                            return false;
                                    }
                                    return true;
                                }
                            }).map((item, index)=>{
                                let templateStringForImage = `/dummy/${item.image}`;
                                return(
                                    <div key={item?.id+index} className={`item ${(item.orientation=="Vertical")?"V":"H"}`}>
                                        <LazyLoadImage
                                            alt={item?.sponsorship?.tagline}
                                            src={item.urls.regular}/>
                                       {/* <img src={item?.urls?.small} className={"imgLoad"} alt={item?.sponsorship?.tagline}/>*/}
                                        <div className="titleWrap">
                                            <p>{item?.id}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </InfiniteScroll>


                </div>
            </div>
        </section>
    )
}

export default ImageScroll_old2;