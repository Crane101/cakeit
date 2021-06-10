import pallete from '../../theme/pallette';
import styled from 'styled-components';

export const HeaderBar = styled.div`
    background-color: ${pallete.primary};
    padding: .7rem 1.5rem;
	display: flex;
	align-items: baseline;
	border-radius: 0 0 2rem 2rem;
	margin-bottom: 1rem;
	border-bottom: .5rem solid ${pallete.heading};


    h1 {
        font-size: 2.5rem;
        font-weight: 100;
        margin: 0 0 0 1rem;
        color: ${pallete.heading};
    }
`;
