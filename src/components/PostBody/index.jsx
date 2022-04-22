import react from "react";
import { ImageContainer } from "./styles";
import Image from "next/image";


export const PostBody = data => {
    return (
        <ImageContainer>
            <Image
                src={data.photo}
                alt={data.userid}
                width={'100%'}
                height={'100%'}
            />
        </ImageContainer>
    );
}