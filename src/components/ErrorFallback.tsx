import { FC } from "react";
import styled from "styled-components";

const StyledErrorFallback = styled.main`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-50);
    padding: 4.8rem;
`;

const StyledBox = styled.div`
    flex: 0 1 96rem;
    text-align: center;
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    padding: 4.8rem;

    & h1 {
        margin-bottom: 1.6rem;
    }

    & p {
        font-family: "Sono";
        color: var(--color-grey-500);
        margin-bottom: 3.2rem;
    }
`;

type ErrorFallbackProps = {
    message: string;
};

const ErrorFallback: FC<ErrorFallbackProps> = ({ message }) => {
    return (
        <StyledErrorFallback>
            <StyledBox>
                <h1>Ошибка</h1>
                <p>{message}</p>
            </StyledBox>
        </StyledErrorFallback>
    );
};

export default ErrorFallback;
