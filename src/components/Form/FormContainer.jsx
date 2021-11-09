import styled from "styled-components";

export const FormContainer = styled.div`
    background: #ffc500;
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const FormContent = styled.div`
    height: 100vh;
    max-height: 100vh;
    width: 50vw;
    
    @media screen and (max-width: 400px){
        height: 100vh;
        width: 100vw;
    }
`;

export const FormH2 = styled.h2`
    font-size: clamp(2.5rem, 7vw, 5rem);
    margin-bottom: 2rem;
    box-shadow: 0px 5px  #e31837;
    letter-spacing: 3px;
`;