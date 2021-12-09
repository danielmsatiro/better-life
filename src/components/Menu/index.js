import { useHistory } from "react-router-dom";

import { ContainerMenu } from "./styles";

import {AiOutlineMenu, AiFillHome} from "react-icons/ai"
import {MdGroups, MdLogout} from "react-icons/md"

import { useContext } from "react";
import { UserContext } from "../../providers/user";

function DashboardMenu(){
    const {logout} = useContext(UserContext)
   
    const history = useHistory()

    return (
        <ContainerMenu>
            <div className="top_strap"></div>

            <section className="menu_box">

            <div>

            <h1>Better Life</h1>

            <details>
                <summary>
                    <AiOutlineMenu className="menu_icon"/>
                </summary>

                <nav className="sub_menu">
                    <span onClick={() => history.push("/dashboard")} className="sub_menu__link">
                        <AiFillHome className="menu_icon_subMenu"/>
                        Home
                    </span>
                    <span onClick={() => history.push("/groups")} className="sub_menu__link">
                        <MdGroups className="menu_icon_subMenu_group_icon"/>
                        Grupos
                    </span>
                    <span className="sub_menu__link logout_menu">
                        <MdLogout className="menu_icon_subMenu logout_icon"/>
                    Logout
                    </span>
                </nav>
            </details>

            <div className="menu_dashboard_desktop">
                
                    <span onClick={() => history.push("/dashboard")} className="sub_menu__link_desktop">
                        <AiFillHome className="menu_icon_subMenu_desktop"/>
                        Home
                    </span>
                    <span onClick={() => history.push("/groups")} className="sub_menu__link_desktop">
                        <MdGroups className="menu_icon_subMenu_desktop group_icon"/>
                        Grupos
                    </span>
                </div>
            </div>

                <span onClick={() => logout } className="sub_menu__link_desktop logout_menu_desktop">
                    <MdLogout className="menu_icon_subMenu_desktop logout_icon"/>
                    Logout
                </span>
            

            </section>

            

        </ContainerMenu>
    )
}

export default DashboardMenu