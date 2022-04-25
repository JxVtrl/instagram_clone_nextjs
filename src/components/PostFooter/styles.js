import styled from 'styled-components';

export const PostFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 163px;
    
`;

export const ActionsContainer = styled.div`
    width: 100%;
    margin-top: 9px;
    margin-bottom: 7px;

    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 9px 0 12px;


        > div:first-child {
            display: flex;
            gap: 10px;
        }
    }
`;

export const LikesContainer = styled.div`
    padding-left: 12px;
    font-weight: 700;
    font-size: 13px;
    line-height: 22px;
    font-family: 'SF UI Display';

`

export const DescriptionContainer = styled.div`
    padding: 0 9px 0 12px;
    font-weight: 400;
    font-size: 11.5px;
    line-height: 22px;
    gap: 4px;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    
    word-break: break-all;
    text-overflow: ellipsis;

    span {
        font-weight: 700;
        font-size: 13px;
        line-height: 22px;
    }
`

export const ProfileImgContainer = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;

    img {
        object-fit: cover;
    }


`

export const CommentsContainer = styled.div`
    margin-top: 5px;
    padding: 0 9px 0 12px;

    > div {
        display: flex;
        align-items: center;
        gap: 9px;

    } 

`

export const AddComment = styled.div`
    span {
        color: rgba(153, 153, 153, 1);
        font-weight: 400;
        font-size: 12.5px;
        line-height: 22px;
    }

`



export const EmojisSuggestion = styled.div`

`

export const TimestampContainer = styled.div`


`