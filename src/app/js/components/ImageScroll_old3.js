import React from 'react';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageScroll_old3 = ({searchTerm, filterTerm, imagesList,setImagesList, setCount, count})=>{
    const PAGE_LIMIT = 10;
    const apiPath = "https://imagebazaarapi.qsstechnosoft.com/api/search";
    const getImagesList = ()=>{
        let pageNo=Math.ceil(imagesList.length/PAGE_LIMIT)+1;
        const queryParams = "?page=" + pageNo +"&sortBy=asc";
        const searchValue = searchTerm && "&searchQuery="+ searchTerm;
        const finalPath = apiPath +  queryParams + searchValue;
        axios.get(finalPath)
            .then((res)=>{
                const apiRes = res?.data.posts;
                const mergeData = [...imagesList, ...apiRes]
                setImagesList(mergeData);
                setCount(res?.data?.pageCount);
            }).catch((err)=>{
                console.log("error while loading images data", err);
        })
    };

    const getImagesListSearch = ()=>{
        let pageNo=Math.ceil(imagesList.length/PAGE_LIMIT)+1;
        const queryParams = "?page=" + pageNo +"&sortBy=asc";
        const searchValue = searchTerm && "&searchQuery="+ searchTerm;
        const finalPath = apiPath +  queryParams + searchValue;

        axios.get(finalPath)
            .then((res)=>{
                const apiRes = res?.data.posts;
                const mergeData = [...imagesList, ...apiRes]
                setImagesList(mergeData);
                setCount(res?.data?.pageCount);
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

    React.useEffect(()=>{
        getImagesListSearch();
    },[searchTerm])

     return(
        <section className={"imagesScrollWrapper"}>
            <div className="container-fluid">
                <div className="grid">
                    <InfiniteScroll
                        dataLength={imagesList.length}
                        next={searchTerm?getImagesListSearch:fetchMoreData}
                        hasMore={count>imagesList.length}
                        loader={<h4>Loading...</h4>}
                    >
                        {
                            imagesList && imagesList.length>0 && imagesList/*.filter((val)=>{
                                if(searchTerm == ""){
                                    for (let key in filterTerm) {
                                        if (val[key] === undefined || val[key] != filterTerm[key])
                                            return false;
                                    }
                                    return true;
                                }else if(val?.image?.keyword.toLowerCase().includes(searchTerm.toLowerCase())){
                                    for (let key in filterTerm) {
                                        if (val[key] === undefined || val[key] != filterTerm[key])
                                            return false;
                                    }
                                    return true;
                                }
                            })*/.map((item, index)=>{
                                let templateStringForImage = `/dummy/${item?.image?.srNo}.jpg`;
                                let dummyImg = item?.image?.srNo<30 ?templateStringForImage :"/dummy/1.jpg"
                                return(
                                    <div key={item?.image?.imageId} className={`item ${(item?.image?.keyword.toLowerCase().includes("vertical")?"V":"H")}`}>
                                        <LazyLoadImage
                                            alt={item?.image?.keyword}
                                            src={dummyImg}/>
                                        <div className="titleWrap">
                                            <p>{item?.image?.imageId}</p>
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

export default ImageScroll_old3;