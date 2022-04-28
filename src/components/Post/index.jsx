import react, { useEffect, useRef } from "react";
import { useApp } from "../../context/AppContext";
import { PostContainer } from "./styles";

import { PostBody } from "../PostBody";
import { PostHeader } from "../PostHeader";
import { PostFooter } from "../PostFooter";

export const Post = data => {
    const { users } = useApp(); 

    const postId            = data.post.id
    const postLikes         = data.post.likes
    const postDescription   = data.post.description
    const postSrc           = data.post.src
    const sponsored         = data.post.sponsored
    const postTimestamp     = data.post.timestamp
    const profileImg        = useRef(null)
    const userName          = useRef(null)
    
    
    
    useEffect(() => { 
        console.log(users)
        // userName.current = users[postId].username
        // profileImg.current = users[postId].profilePhoto
    }, [users])

    
    return (
        <PostContainer>
            <PostHeader
                userid={postId}
                profileImg={profileImg.current}
                sponsored={sponsored}
                userName={userName.current}
            />
            <PostBody
                userid={postId}
                photo={postSrc}
            />
            <PostFooter
                userid={postId}
                likes={postLikes}
                description={postDescription}
                userName={userName.current}
                profileImg={profileImg.current} // this will be changed to logged user profile image
                timestamp={postTimestamp}
            />
        </PostContainer>
    );
}
