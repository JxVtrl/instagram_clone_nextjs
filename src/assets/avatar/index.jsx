import Image from 'next/image'

import profilePic from './avatar.png'

export const Avatar = () => {
    return (
        <Image
            src={profilePic}
            alt="opi"
            width="21px"
            height="21px"
            borderradius="50%"
        />
    );
}