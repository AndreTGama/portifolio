import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { SocialMedia } from '../../../assets/data/profile/SocialMedia'; 
import * as Style from './SocialMedia.style';

export function Instagram() {
    return (
        <Style.Anchor
            href={SocialMedia.instagram}
            target='_blank'
            rel='noreferrer'
        >
            <FontAwesomeIcon 
                icon={faInstagram} 
                size='2xl' 
            />
        </Style.Anchor>
        
    );
}
