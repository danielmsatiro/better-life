import { ContainerMenu } from "./styles";
import {AiOutlineMenu, AiFillHome} from "react-icons/ai"
import {MdGroups, MdLogout} from "react-icons/md"

function DashboardMenu(){
    return (
        <ContainerMenu>
            <div className="top_strap"></div>

            <section className="menu_box">

            <div>

            <h1>BetterLife</h1>

            <details>
                <summary>
                    <AiOutlineMenu className="menu_icon"/>
                </summary>

                <nav className="sub_menu">
                    <span className="sub_menu__link">
                        <AiFillHome className="menu_icon_subMenu"/>
                        Home
                    </span>
                    <span className="sub_menu__link">
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
                
                    <span className="sub_menu__link_desktop">
                        <AiFillHome className="menu_icon_subMenu_desktop"/>
                        Home
                    </span>
                    <span className="sub_menu__link_desktop">
                        <MdGroups className="menu_icon_subMenu_desktop group_icon"/>
                        Grupos
                    </span>
                </div>
            </div>

                <span className="sub_menu__link_desktop logout_menu_desktop">
                    <MdLogout className="menu_icon_subMenu_desktop logout_icon"/>
                    Logout
                </span>
            

            </section>

            

        </ContainerMenu>
    )
}

export default DashboardMenu