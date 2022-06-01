import styled from 'styled-components';

export const FooterItem = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #222;    
`;

export const P = styled.p`
    color: #fff;
    font-size: .8rem;
    text-transform: capitalize;
    font-family: 'Syncopate', sans-serif;
    font-weight: 400;
    letter-spacing: clamp(.1rem, 2vw, .7rem);
    margin: 0 2rem;
`;

export const Logo = styled.img`
    position: absolute;
    left: 10%;
    height: 2.6rem; 
    display: none;
    @media (min-width: 480px)   {
        display: block;
    }
`;