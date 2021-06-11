import palette from '../../theme/palette';
import styled from 'styled-components';

export const Footer = styled.footer`
    background-color: ${palette.primary};
	padding: .5rem 1rem;
	width: 100%;
	text-align: right;
	color: ${palette.heading};
	border-radius: 1rem 1rem 0 0;
	border-top: .5rem solid ${palette.heading};
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;
