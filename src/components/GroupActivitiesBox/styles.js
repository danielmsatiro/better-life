import styled from "styled-components";

export const ActivitiesContainer = styled.section`
    background: var(--green);
    width: 270px;
    padding: 10px;
    border-radius: 10px;

    .Goal_Activities_container_title{
        color: white;
        margin: 0 5px;
        font-weight: 400 ;
    }

    .create_Activities{
        position: relative;
        float: right;
        right: 15px;
        top: 18px;
        cursor: pointer;
    }

    .create_Activities_icon{
        color: white;
        width: 30px;
        height: 30px;
    }
`