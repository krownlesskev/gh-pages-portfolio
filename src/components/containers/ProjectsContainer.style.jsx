import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .card-container {
        display: flex;
        justify-content: space-evenly;
    }

    @media (max-width:1600px){
        .card-container {
            flex-direction: column;
            align-items: center;
        }
    }
`;