// Very simple styling for our card-component
import styled from 'styled-components';
import { IoTrashOutline } from "react-icons/io5";

export const CardItem = styled.div`
    overflow: hidden;
    height: 16rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin: 2rem;
    border-radius: 1rem;
    padding-bottom: .5rem;
    box-shadow: 0 .2rem .8rem rgba(0,0,0,.1);
    transition: .25s ease;
    &:hover{
        box-shadow: 0 .1rem .4rem rgba(0,0,0,.3);
    }
`;

// Something to put the image in
export const ImgWrapper = styled.div`
    height: 8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
`;


export const Img = styled.img`
    height: 100%;
    object-fit: contain;
`;

export const Title = styled.h3`
    text-transform: capitalize;
    font-size: 1.2rem;
`;

export const P = styled.p`
    padding: .5rem;
`;

// I added this so that the user will understand what to do
export const ButtonContainer = styled.div`
    height: min-content;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const RemoveIcon = styled(IoTrashOutline)`
    font-size: 2.2rem;
    transition: .25s ease; 
    padding: 0 .3rem;   
    &:hover{
        cursor: pointer;
        transform: scale(1.4);
        color: #f00;
    }
`;