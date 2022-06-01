/**
 * Not superimportant, but a simple way to add some basic
 * styling to the project.
 * It's also nice to keep the styling in files close to
 * where they belong instead of using inline styling.
 */
import styled from 'styled-components';

/** MAIN CONTAINERS/WRAPPERS **/
export const MainWrapper = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 10rem;
`;

export const Section = styled.div`
    height: min-content;
    height: min-content;
    width: 100%;
    max-width: 156rem;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 2rem 0;
`;

export const MovieSection = styled.div`
    height: min-content;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

/** BUTTONS AND EXTRAS **/
export const Button = styled.button`
    outline: none;
    border: .1rem solid rgba(0,0,0,.2);
    padding: .5rem 1.2rem .4rem;
    border-radius: .7rem;
    font-size: 1rem;
    letter-spacing: .1rem;
    text-transform: uppercase;
    box-shadow: 0 .1rem .4rem rgba(0, 0, 17, .2);
    transition: .25s ease;
    &.form{
        font-size: 1.4rem;
        border-radius: .7rem;
        margin-top: 1rem;
        letter-spacing: .3rem;
        padding: .8rem 2.4rem;
        color: #fff;
        background-color: #333;
        box-shadow: 0 .2rem .4rem rgba(0, 0, 17, .3);
        border: none;
        outline: none;
    }
    &:hover{
        cursor: pointer;
        box-shadow: 0 .0rem .0rem rgba(0, 0, 17, .3);
        background-color: #fafafa; 
        transform: translateY(.1rem);
        background-color: #f1f1f1;
        color: #333;
    }
    &:active{
        background-color: #7575ff;
        color: #f1f1f1;
    }
`;