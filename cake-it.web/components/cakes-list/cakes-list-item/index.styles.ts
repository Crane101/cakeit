import pallette from '../../../theme/pallette';
import styled from 'styled-components';

export const ListItemWrapper = styled.div`
    display: flex;
    margin: 1rem 0;
    box-shadow: ${pallette.shadow};
    border-radius: 0 1rem 0 1rem;
    background-color: ${pallette.darken};
    overflow: hidden;
    align-items: center;
    border: ${pallette.border};
    cursor: pointer;
    transition: all 0.3s;

    :hover {
        transform: scale(1.03) translateY(-2px);
        background-color: ${pallette.lighten};
        border-radius: 3px;
        box-shadow: ${pallette.shadowLifted};
    }
`;

export const CakeName = styled.span`
    margin-left: 1rem;
    font-size: 1.5rem;
    text-decoration: underline;
    text-decoration-color: ${pallette.alternate};
`;

export const CakeImage = styled.img`
    height: 5rem;
`;
