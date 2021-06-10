import pallette from '../../theme/pallette';
import styled from 'styled-components';

export const Footer = styled.footer`
    background-color: ${pallette.primary};
    position: fixed;
    bottom: 0;
	padding: .5rem 1rem;
	width: 100%;
	text-align: right;
	color: ${pallette.heading};
	border-radius: 1rem 1rem 0 0;


`;
