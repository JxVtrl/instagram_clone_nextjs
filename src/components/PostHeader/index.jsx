import react from "react";

import Image from "next/image";
import {
    HeaderContainer,
    HeaderUserInfo,
    ProfileImgContainer,
    PostInfo
} from './styles'
import { MoreIcon } from '../../assets'

export const PostHeader = data => {
    return (
        <HeaderContainer>
            <div>
                <HeaderUserInfo>
                    <ProfileImgContainer>
                        <Image
                            src={data.profileImg || 'https://www.freeiconspng.com/uploads/error-icon-4.png'}
                            alt={data.userid}
                            width={'100%'}
                            height={'100%'}
                        />
                    </ProfileImgContainer>
                    <PostInfo>
                        <p>
                            <span>
                                {data.userName}
                            </span>
                        </p>
                        <p>
                            {data.sponsored && 'Sponsored'}
                        </p>
                    </PostInfo>
                </HeaderUserInfo>
                <MoreIcon />
            </div>
        </HeaderContainer>
    );
}