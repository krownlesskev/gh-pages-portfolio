import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 1px 10px #000000;
    max-width: 300px;
    transition: .3s;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    &:hover {
        transform: scale(1.05);
        transition: .3s;
    }

    .title {
        padding: 1rem 0;
        width: 100%;
        background-color: #0066ff;
        color: #ffffff;
        text-align: center;
    }

    img {
        width: 100%;
    }

    .tech {
        background-color: #0066ff;
        padding: 1rem;
        color: #ffffff;
        width: 100%;
        text-align: center;
    }

    .desc {
        margin: 1rem;
        text-align: center;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.5rem;
        color: #ffffff;
        width: 100px;
        height: 30px;
        text-decoration: none;
        background-color: #0066ff;
        border-radius: 10px;
    }

    @media (max-width:1600px){
        margin: 1rem 0;
    }


`;