import pallette from '../../theme/pallette';
import styled from 'styled-components';

export const CakeViewHeader = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1rem;
    h2 {
        margin-bottom: 0;
    }
`;

export const CakeImage = styled.img`
    width: 100%;
    /* max-height: 20rem; */
    box-shadow: ${pallette.shadowDark};
    border-radius: 1rem;
    border: ${pallette.border};
	margin: 0 auto;
	display: block;
`;

export const CakeComment = styled.p`
    box-shadow: ${pallette.shadow};
    border: ${pallette.border};
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: ${pallette.lighten};
`;
