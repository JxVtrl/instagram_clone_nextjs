import react from "react";

import { PostContainer } from "./styles";
import { Mock } from "../../mocks/Mock";

import { PostBody } from "../PostBody";
import { PostHeader } from "../PostHeader";
import { PostFooter } from "../PostFooter";

export const Post = data => {
    const postId            = data.post.id
    const postLikes         = data.post.likes
    const postDescription   = data.post.description
    const postSrc           = data.post.src
    const sponsored         = data.post.sponsored
    const profileImg        = Mock.users[postId].picture
    const userName          = Mock.users[postId].username
    const postTimestamp     = data.post.timestamp
    
    return (
        <PostContainer>
            <PostHeader
                userid={postId}
                profileImg={profileImg}
                sponsored={sponsored}
                userName={userName}
            />
            <PostBody
                userid={postId}
                photo={postSrc}
            />
            <PostFooter
                userid={postId}
                likes={postLikes}
                description={postDescription}
                userName={userName}
                profileImg={profileImg} // this will be changed to logged user profile image
                timestamp={postTimestamp}
            />
        </PostContainer>
    );
}
