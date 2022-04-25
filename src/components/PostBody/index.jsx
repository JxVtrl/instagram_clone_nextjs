import react from "react";
import { ImageContainer } from "./styles";
import Image from "next/image";

export const PostBody = data => {
    const width = data.photo.split("w=")[1].split("&")[0]

    return (
        <ImageContainer>
            <Image
                src={data.photo}
                alt={data.userid}
                layout="raw"
                height={300}
                width={width}
            />
        </ImageContainer>
    );
}