import styled from "styled-components";

export const ContainerMenu = styled.section`

    .menu_box{
        width: 100%;
        height: 60px;
        background-color: #1F161E;
    }


    display: flex;
    align-items: center;
    justify-content: space-between;

    .top_strap{
        display: none;
    }

    h1{
        color: white;
        margin-left: 20px;
    }

    details{
        position: absolute;
        right: 20px;
        top: 10px;
    }

    summary{
        position: absolute;
        right: 0px;
    }

    summary::marker{
        content: "";
    }
    

    .menu_icon{
        color: white;

        width: 30px;
        height: 40px;
        margin-right: 20px;

    }

    .sub_menu{
        width: 100vw;
        background-color: #1F161E;
        color: white;

        margin-top: 50px;
        margin-right: -20px;

        display: flex;
        justify-content: space-around;
        align-items: center;

        font-size: 14px;

    }

    .sub_menu__link{
        display: flex;
        align-items: center;      
        cursor: pointer;  
    }

    .menu_icon_subMenu{
        width: 15px;
        height: 30px;
        color: white;
        margin-right: 5px;
    }

    .menu_icon_subMenu_group_icon{
        width: 25px;
        height: 30px;
        color: white;
        margin-right: 5px;
    }

    .menu_dashboard_desktop{
        display: none;
    }

    .logout_menu_desktop{
        display: none;
    }

    @media (min-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .menu_box{
            height: 95vh;
            width: 180px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .top_strap{
            display: block;
            width: 100%;
            height: 5vh;
            background-color: #55B79D;
        }

        h1{
            margin-left: 20px;
        }

        .menu_icon{
            display: none;
        }

        .menu_dashboard_desktop{
            width: 100%;

            display: flex;
            flex-direction: column;
        }

        .sub_menu__link_desktop{
            color: white;
            height: 30px;
            cursor: pointer;

            display: flex;
            align-items: center;

            margin: 10px 0;
        }

        .menu_icon_subMenu_desktop{
            margin: 0px 20px;
        }

        .group_icon{
            width: 20px;
            height: 30px;
        }

        .logout_menu_desktop{
            width: 90%;
            border-top: solid white 1px;
            margin: 20px auto;
            padding-top: 10px;
        }
    }

`