import styled from "styled-components";

export const GoalBoxContainer = styled.section`
    background: var(--green);
    width: 270px;
    padding: 10px;
    border-radius: 10px;
    min-height: 100px;

    .Goal_box_container_title{
        color: white;
        margin: 0 5px;
        font-weight: 400 ;
    }

    .create_goal{
        position: relative;
        float: right;
        right: 15px;
        top: 18px;
        cursor: pointer;
    }

    .create_goal_icon{
        color: white;
        width: 30px;
        height: 30px;
    }
`