import React from 'react'
import { DEFAULT_PHOTO_MALE, API_BASE_URL, DEFAULT_PHOTO_FEMALE, DEFAULT_PHOTO_UNISEX, SEX_MALE, SEX_FEMALE } from '../../constants';
import { Image } from 'semantic-ui-react';

const CustomImage = ({sex, photo, avatar, wrapped, ui}) => {
    const userPhotoUrl = `${API_BASE_URL}/images/${photo}`;
    let sexPhoto = DEFAULT_PHOTO_UNISEX;
    if(sex === SEX_MALE) sexPhoto = DEFAULT_PHOTO_MALE;
    if(sex === SEX_FEMALE) sexPhoto = DEFAULT_PHOTO_FEMALE;
    return (
        <Image 
            src={photo ? userPhotoUrl : sexPhoto} 
            wrapped={wrapped} 
            ui={ui} 
            avatar={avatar}
        />
    )
};

export default CustomImage;