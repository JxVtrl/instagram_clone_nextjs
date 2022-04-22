import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 49px;
    
    > div {
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 14px 0 8px;
    }
`

export const HeaderUserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 9px;

    > div {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
`

export const ProfileImgContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;

    img {
        object-fit: cover;
    }
`

export const PostInfo = styled.div`
    p {
        padding: 0;
        margin: 0;
        font-size: 11px;
        font-weight: 400;
        line-height: 13.13px;

        span {
            font-weight: 700;
            font-size: 12px;
            line-height: 14.32px;
        }
    }
`

