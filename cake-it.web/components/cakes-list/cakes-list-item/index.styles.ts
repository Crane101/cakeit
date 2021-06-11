import palette from '../../../theme/palette';
import styled from 'styled-components';

export const ListItemWrapper = styled.div`
    display: flex;
    margin: 1rem 0;
    box-shadow: ${palette.shadow};
    border-radius: 0 1rem 0 1rem;
    background-color: ${palette.darken};
    overflow: hidden;
    border: ${palette.border};
    cursor: pointer;
    transition: all 0.3s;
    padding-right: 0.5rem;
    height: 5rem;
    align-items: center;

    :hover {
        transform: scale(1.03) translateY(-2px);
        background-color: ${palette.lighten};
        border-radius: 3px;
        box-shadow: ${palette.shadowLifted};
    }
`;

export const CakeName = styled.span`
    margin-left: 1rem;
    font-size: 1.5rem;
    text-decoration: underline;
    text-decoration-color: ${palette.alternate};
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    max-height: 100%;
	flex: 1;
	padding-top: 1rem;
    margin-bottom: 1rem;
    
    @media (max-width: 400px) {
		font-size: 1rem;
	}
`;

export const CakeImage = styled.div<{ imageUrl: string }>`
    height: 100%;
    width: 10rem;
    background-image: url(${({ imageUrl }) => imageUrl}); 
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%);
`;
