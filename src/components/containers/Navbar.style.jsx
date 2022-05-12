import styled from 'styled-components';

export const Navbar = styled.nav`
    margin: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        text-shadow: 3px 3px 5px #000000;
        font-family: 'Dancing Script', cursive;
        font-size: 48px;
        color: #ffffff;
        &:hover {
            cursor: default;
        }
    }

    ul {
        text-shadow: 3px 3px 5px #000000;
        display: flex;
        list-style-type: none;

        li {
            margin: 0 1rem;
            color: #ffffff;
            transition: .3s;

            &:hover{
                cursor: pointer;
                transform: scale(1.1);
                transition: .3s;
            }
        }
    }

    @media (max-width:360px) {
        p {
            font-size: 24px;
        }

        ul {
            li {
                margin: 0 0.25rem;
            }
        }
    }
`;