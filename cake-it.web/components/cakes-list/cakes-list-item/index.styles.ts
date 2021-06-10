import pallette from '../../../theme/pallette';
import styled from 'styled-components';

export const ListItemWrapper = styled.div`
display: flex;
    margin: 1rem .0;
    /* padding: 0.5rem; */
    box-shadow: ${pallette.shadow};
	border-radius: 0 1rem 0 1rem;
	background-color: ${pallette.darken};
	overflow: hidden;
	align-items: center;
	border: ${pallette.border};
`;

export const CakeName = styled.span`

margin-left: 1rem;
font-size: 1.5rem;
text-decoration: underline;
text-decoration-color: ${pallette.alternate}

`;

export const CakeImage = styled.img`

height: 5rem;


`;