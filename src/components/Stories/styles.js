import styled from 'styled-components';

export const Scroll = styled.div`
    display: flex;
    width: 100%;
    gap: 16px;
    overflow-x: scroll;
    padding: 0 0 0 8px;

    border-bottom: 0.5px solid #DADADA;
    
    ::-webkit-scrollbar {
        display: none;
    }
  
`;
