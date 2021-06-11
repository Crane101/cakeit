import { TextField } from '@material-ui/core';
import palette from '../../theme/palette';
import styled from 'styled-components';

export const FieldsWrapper = styled.div`
    box-shadow: ${palette.shadow};
    background-color: ${palette.lighten};
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
`;

export const ButtonWrapper = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: flex-end;
`;

export const YumFactorField = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 0;

    label {
        font-size: 1.2rem;
    }
`;

export const YumFactorHiddenInput = styled.input`
    opacity: 0;
	position: absolute;
	top:50%;
	left:50%;
`;

export const YumFactorInputWrapper = styled.div`
margin-left: 1rem;
    position: relative;
`;

export const CommentBox = styled(TextField)`
    margin-top: 1rem !important;
`;
