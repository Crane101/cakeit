import { Button } from '@material-ui/core';
import palette from '../../theme/palette';
import styled from 'styled-components';

export const CakeViewHeader = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1rem;
    h2 {
        margin-bottom: 0;
        margin-right: 0.5rem;
    }

    @media (max-width: 400px) {
        flex-direction: column;

        h2 {
            margin-bottom: 1rem;
            margin-right: 0;
        }
    }
`;

export const CakeImage = styled.img`
    width: 100%;
    box-shadow: ${palette.shadowDark};
    border-radius: 1rem;
    border: ${palette.border};
    margin: 0 auto;
    display: block;
`;

export const CakeComment = styled.p`
    box-shadow: ${palette.shadow};
    border: ${palette.border};
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: ${palette.lighten};

    @media (max-width: 400px) {
        margin-bottom: 2rem;
    }
`;

export const BackButton = styled(Button)`
    @media (max-width: 400px) {
        width: 100%;
    }
`;
