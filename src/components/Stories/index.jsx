import react, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Scroll, StoryContainer, PictureContainer } from './styles';
import { StoryEllipseIcon } from '../../assets'
import { Mock } from '../../mocks/Mock';
import { useApp } from '../../context/AppContext';

export const Stories = () => {
    const { storiesActive } = useApp();
    const users = Mock.users;

    return (
        <Scroll>
            {storiesActive && users.map((item, index) => (
                <StoryContainer key={index} >
                    <PictureContainer>
                        <StoryEllipseIcon />
                        <Image
                            src={item.picture || 'https://www.freeiconspng.com/uploads/error-icon-4.png'}
                            alt={item.name}
                            width="60px"
                            height="60px" 
                        />
                    </PictureContainer>
                    <p>{item.username}</p>
                </StoryContainer>
            ))}
        </Scroll>
    );
}
