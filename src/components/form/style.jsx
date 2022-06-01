import styled from 'styled-components';

export const FormSection = styled.form`
    height: min-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2rem;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin: .3rem 0;
    width: 26rem; // enough to fit even a 280px screen
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
`;