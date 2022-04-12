import styled from 'styled-components';
import Image from "next/image";
import { StoryEllipseIcon } from '../../../assets'
import { StoryContainer, PictureContainer } from './styles';

const Story = item => {
    const name = item.user.name;
    const username = item.user.username;
    const src = item.user.picture;
    
    return (
        <StoryContainer>
            <PictureContainer>
                <StoryEllipseIcon />
                {/* <Image
                    src={src}
                    alt={name}
                    width="60px"
                    height="60px"

                /> */}
                oi
            </PictureContainer>
            
            <p>{username}</p>
        </StoryContainer>
    );
}

export default Story;