import react from "react";
import Image from "next/image";

import {
    PostFooterContainer,
    ActionsContainer,
    LikesContainer,
    DescriptionContainer,
    CommentsContainer,
    AddComment,
    ProfileImgContainer,
    EmojisSuggestion,
    TimestampContainer
} from './styles'

import { HeartIcon, CommentsIcon, ShareIcon, BookmarkIcon } from '../../assets'

export const PostFooter = data => {
    const nowTimestamp = new Date()

    const hoursTimestamp = data.timestamp.split("-")[0]
    const dateTimestamp = data.timestamp.split("-")[1]

    const hour = hoursTimestamp.split(":")[0]
    const minutes = hoursTimestamp.split(":")[1]

    const day = dateTimestamp.split("/")[0]
    const month = dateTimestamp.split("/")[1]
    const year = dateTimestamp.split("/")[2]

    const diff = nowTimestamp - new Date(`${year}-${month}-${day} ${hour}:${minutes}`)

    const diffMinutes = Math.floor(diff / 1000 / 60)
    const diffHours = Math.floor(diff / 1000 / 60 / 60)
    const diffDays = Math.floor(diff / 1000 / 60 / 60 / 24)

    console.log(diffDays)



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
                <div>
                    <ProfileImgContainer>
                        <Image
                            src={data.profileImg || 'https://www.freeiconspng.com/uploads/error-icon-4.png'}
                            alt={data.userid}
                            width={'100%'}
                            height={'100%'}
                        />
                    </ProfileImgContainer>
                    <AddComment>
                        <span>Add comment...</span>
                    </AddComment>
                </div>
                <EmojisSuggestion>

                </EmojisSuggestion>
            </CommentsContainer>


            <TimestampContainer>

            </TimestampContainer>
        </PostFooterContainer>
    );
}