import "./item.css";
import avt from "../../../assets/img/avt.png";

const headerItems = [
  { icon: "fa-regular fa-bell", link: "#" },
  { icon: "fa-solid fa-gear", link: "#" },
  { icon: "fa-solid fa-question", link: "#" },
];

const Item = () => {
  return (
    <div className="header-tool">
      <ul className="header-navbar-list">
        {headerItems.map((item, index) => (
          <li key={index} className="header-navbar-item">
            <a href={item.link} className="header-navbar-link">
              <i className={`header-navbar-icon ${item.icon}`}></i>
            </a>
          </li>
        ))}
        <li className="header-navbar-item">
          <a href="#" className="header-navbar-link">
            <img
              src={avt}
              alt="User Avatar"
              className="header-navbar-user-img"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Item;
