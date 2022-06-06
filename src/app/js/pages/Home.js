import React, {useState} from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import ImageScroll from "../components/ImageScroll";
import Footer from "../components/Footer";

const Home =()=>{
    const [searchTerm, setSearchTerm] = useState("");
    const [filterTerm, setFilterTerm] = useState({});
    const [imagesList,setImagesList] = useState([]);
    const[count, setCount] = useState(null);
    return(
            <>
                <Header/>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} imagesList={imagesList} setImagesList={setImagesList}/>
                <Filter count={count} searchTerm={searchTerm} filterTerm={filterTerm} setFilterTerm={setFilterTerm} setSearchTerm={setSearchTerm} setImagesList={setImagesList}/>
                <ImageScroll setCount={setCount} count={count} searchTerm={searchTerm} filterTerm={filterTerm} imagesList={imagesList} setImagesList={setImagesList}/>
                <Footer/>
            </>
    )
}

export default Home;