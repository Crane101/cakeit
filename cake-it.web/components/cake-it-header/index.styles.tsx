import palette from '../../theme/palette';
import styled from 'styled-components';

export const HeaderBar = styled.header`
    background-color: ${palette.primary};
    padding: 0.7rem 1.5rem;
    border-radius: 0 0 2rem 2rem;
    margin-bottom: 1rem;
    border-bottom: 0.5rem solid ${palette.heading};

    a {
        display: inline-flex;
        align-items: baseline;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 100;
        margin: 0 0 0 1rem;
        color: ${palette.heading};
    }
`;
