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
  
`

export const StoryContainer = styled.div`
    width: 68px;
    height: 94px;
    p {
        margin: 0;
        font-family: 'SF UI Display';
        font-weight: 400;
        font-size: 11.5px;
        line-height: 22px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const PictureContainer = styled.div`
    width: 68px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    svg {
        position: absolute;
        width: 68px;
        height: 68px;
    }
`
