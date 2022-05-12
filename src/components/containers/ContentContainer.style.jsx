import styled from 'styled-components';

export const ContentContainer = styled.div`
    margin: 5rem 0;
    width: 80vw;
    background: linear-gradient(0deg, rgba(190,219,255,1) 0%, rgba(0,92,166,1) 100%);
    box-shadow: 0px 5px 20px #000000;
    border-radius: 5px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
    
    .main-container{
        margin-top: 5rem;
        display: flex;
        justify-content: space-evenly;
        .main-text{
            margin: 1rem;
            font-size: 24px;
            color: #ffffff;
            text-shadow: 3px 3px 5px #000000;
        }    
        
        .centered {
            text-align: center;
        }
    }

    
    @media (max-width:768px) {
        .main-container{
            margin-top: 0;
            flex-direction: column;
        }
    }

    @media (max-width:360px) {

    }

`;