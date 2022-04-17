import react, { useEffect } from 'react';
import Image from 'next/image';
import { Scroll, StoryContainer, PictureContainer } from './styles';
import { StoryEllipseIcon } from '../../assets'
import { Mock } from '../../mocks/Mock';
import { useApp } from '../../context/AppContext';

const Stories = () => {
    const { FindPhoto } = useApp();
    const users = Mock.users;

    useEffect(() => {
        FindPhoto();
    },[])


    
    return (
        <Scroll>
            {users.map((item, index) => (
        
                <StoryContainer key={index} >
                    <PictureContainer>
                        <StoryEllipseIcon />
                        {/* <Image
                            src={item.picture}
                            alt={item.name}
                            width="60px"
                            height="60px"
                        /> */}
                        oi
                    </PictureContainer>
                    
                    <p>{item.username}</p>
                </StoryContainer>
            ))}
        </Scroll>
    );
}

export default Stories;