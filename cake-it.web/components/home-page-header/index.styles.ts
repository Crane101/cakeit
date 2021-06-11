import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 400px) {
        flex-direction: column;
        align-items: stretch;
    }
`;
