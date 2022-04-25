import react from "react";

import {
    PostFooterContainer,
    ActionsContainer,
    LikesContainer,
    DescriptionContainer,
    CommentsContainer,
    TimestampContainer
} from './styles'

import { HeartIcon, CommentsIcon, ShareIcon, BookmarkIcon } from '../../assets'

export const PostFooter = data => {
    return (
        <PostFooterContainer>

            <ActionsContainer>
                <div>
                    <div>
                        <HeartIcon />
                        <CommentsIcon />
                        <ShareIcon />
                    </div>
                    <div></div> {/* If post has more images */}
                    <div>
                        <BookmarkIcon />
                    </div>
                </div>
            </ActionsContainer>


            <LikesContainer>
                <span>{data.likes} Likes</span>
            </LikesContainer>


            <DescriptionContainer>
                <span>
                    {data.userName}
                    {' '}
                </span>
                {data.description}
            </DescriptionContainer>


            <CommentsContainer>

            </CommentsContainer>


            <TimestampContainer>

            </TimestampContainer>
        </PostFooterContainer>
    );
}