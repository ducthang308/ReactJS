import Menu from "../HeaderComponent/MenuComponent/menu"
import Search from "../HeaderComponent/SearchComponent/Search"
import Tool from "../HeaderComponent/ToolComponent/Tool"
import "./header.css";

const Header = () => {

    return (
        <div class="header">
            <Menu></Menu>
            <Search></Search>
            <Tool></Tool>
        </div>
    )
  }
  
export default Header