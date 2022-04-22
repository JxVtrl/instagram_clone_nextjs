import react from "react";
import { Mock } from "../../mocks/Mock";
import { Post } from "../Post";

export const Feed = () => {
    return (
        <>
            {Mock.posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </>
    );
}