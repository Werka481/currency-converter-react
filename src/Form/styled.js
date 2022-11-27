import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    padding: 15px;
    background-color: #ccc;
`;

export const Fieldset = styled.fieldset`
    border: 2px solid #196723;
    border-radius: 5px;
    padding: 25px;
    margin: 20px 0;
`;

export const Legend = styled.legend`
    padding: 11px;
    border: 2px solid #196723;
    border-radius: 20px;
`;

export const LabelText = styled.span`
    display: inline-block;
    margin-right: 5px;
    max-width: 200px;
    width: 100%;
    margin-bottom: 3px;
`;

export const Input = styled.input`
    max-width: 150px;
    width: 100%;
    padding: 10px;
    margin-right: 5px;
    border: 1px solid #196723;
    border-radius: 5px;
    margin-bottom: 10px;

    &:invalid {
        background-color: #a6f3917a;
    };

    ${({ reset }) => reset && css`
        &:hover {
            background-color: #ccc;
            cursor: pointer;
        };

        &:active {
            background-color: #b0b0a9;
            cursor: pointer;
        };
    `}
`;

export const Select = styled.select`
    max-width: 200px;
    width: 100%;
    padding: 10px;
    margin-right: 5px;
    border: 1px solid #196723;
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const Information = styled.p`
    text-align: right;
    font-size: 13px;
    font-style: italic;

    ${({news}) => news && css`
        font-size: 18px;
        text-align: justify;
        font-style: normal;   
    `};
`;

export const SourceData = styled.p`
    text-align: center;
    font-size: 15px;
`;

export const Button = styled.button`
    padding: 10px;
    margin-right: 5px;
    border: 1px solid #196723;
    border-radius: 5px;
    max-width: 121px;

    &:hover {
        background-color: #ccc;
    };

    &:active {
        background-color: #b0b0a9;
    };
`;