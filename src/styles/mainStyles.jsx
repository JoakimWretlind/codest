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
