import "./layout.css";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import DrakMoodIcon from "/images/dark.svg";
import LightMoodIcon from "/images/light.svg";
import BlackMenuIcon from "../../../public/images/menu.svg"
import WhiteMenuIcon from "../../../public/images/whiteMenu.svg"



function Layout() {
    const theme = useContext(ThemeContext);
    function onHandleChange(event) {
        let newValue;
        if (event.target.checked == false) {
            newValue = "light";
        } else {
            newValue = "dark";
        }
        theme.setTheme(newValue);
    }
    const passevedValues = useContext(ThemeContext);
    return (
        <>
            <nav className={passevedValues.theme + "Navbar"}>
                <div className={passevedValues.theme + "Logo"}>
                    <a href="/">Salma Ibrahim</a>
                </div>
                <div className={passevedValues.theme + "Icons"}>
                    <ul>
                        <li className={passevedValues.theme + "List"}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={passevedValues.theme + "List"}>
                            <Link to="/about">About</Link>
                        </li>
                        <li className={passevedValues.theme + "List"}>
                            <Link to="/about">Experiament</Link>
                        </li>
                        <li className={passevedValues.theme + "List"}>
                            <Link to="/about">Projects</Link>
                        </li>
                        <li className={passevedValues.theme + "List"}>
                            <Link to="/about">Contact</Link>
                        </li>
                    </ul>

                    <div className={passevedValues.theme + "Menu"}>
                        <img
                            src={BlackMenuIcon}
                            alt="#"
                            className={passevedValues.theme + "White"}
                        />
                        <img
                            src={WhiteMenuIcon}
                            alt="#"
                            className={passevedValues.theme + "Black"}
                        />
                    </div>
                    
                    <div className={passevedValues.theme + "Theme"} onChange={onHandleChange}>
                        <input
                            className="check"
                            type="checkbox"
                            onChange={onHandleChange}
                        />

                        <img
                            src={DrakMoodIcon}
                            alt="#"
                            className={passevedValues.theme + "Moon"}
                        />
                        <img
                            src={LightMoodIcon}
                            alt="#"
                            className={passevedValues.theme + "Sun"}
                        />
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Layout;
