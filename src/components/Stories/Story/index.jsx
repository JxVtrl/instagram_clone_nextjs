import styled from 'styled-components';
import Image from "next/image";
import { StoryEllipseIcon } from '../../../assets'

const StoryContainer = styled.div`
    width: 68px;
    height: 94px;
    p {
        margin: 0;
        font-family: 'SF UI Display';
        font-weight: 400;
        font-size: 11.5px;
        line-height: 22px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

const PictureContainer = styled.div`
    width: 68px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    svg {
        position: absolute;
        width: 68px;
        height: 68px;
    }
`


const Story = item => {
    const name = item.user.name;
    const username = item.user.username;
    const src = item.user.picture;

    console.log(src)
    
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