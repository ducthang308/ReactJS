import searchIcon from "../../assets/img/search.png";
import "./search.css";

const Search = () =>{

    return(
        <div class="header-search">
            <a href="" class="header-search-link">
                <img src={searchIcon} alt="" class="header-search__img"/>
            </a>
            <input type="text" placeholder="Search in SharePoint" class="header-search__text"/>
        </div>
    )
}

export default Search
