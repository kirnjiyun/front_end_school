import React from 'react';
import * as S from './YesFollow.styled';
import {ReactComponent as KebabIcon} from '../../images/home/icon-more-vertical.svg';
import {ReactComponent as HeartIcon} from '../../images/home/icon-heart.svg';
import {ReactComponent as MessageIcon} from '../../images/home/icon-message-circle.svg';
import ProfileImage from '../../images/home/basic-profile.svg';
import PostImage from '../../images/home/mandarin.png';

// UserProfile 컴포넌트를 만듭니다.
const UserProfile = ({profileImage, username, accountName, description, photo, altText, likes, comments, date}) => (
  <S.Container>
    <S.AboutUser>
      <S.StyledProfileImg src={profileImage} alt='profile' />

      <S.UserInfo>
        <S.H2>{username}</S.H2>
        <S.H3>{accountName}</S.H3>
      </S.UserInfo>

      <S.Button>
        <KebabIcon />
      </S.Button>
    </S.AboutUser>

    <S.P>{description}</S.P>
    <S.Img src={photo} alt={altText} />

    <S.Icons>
      <S.StyledHeart>
        <HeartIcon />
      </S.StyledHeart>
      <S.Span className='heartnum'>{likes}</S.Span>
      <S.StyledMessage>
        <MessageIcon />
      </S.StyledMessage>
      <S.Span className='messnum'>{comments}</S.Span>
    </S.Icons>
    <S.Date>{date}</S.Date>
  </S.Container>
);

export default function Default() {
  const userData = [
    {
      profileImage: ProfileImage,
      username: '애월읍 위니브 감귤농장',
      accountName: '@weniv_Mandarin',
      description:
        '옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.',
      photo: PostImage,
      altText: '감귤사진',
      likes: 58,
      comments: 12,
      date: '2020년 10월 21일'
    },
    {
      profileImage: ProfileImage,
      username: '애월읍 위니브 감귤농장',
      accountName: '@weniv_Mandarin',
      description:
        '옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.',
      photo: PostImage,
      altText: '감귤사진',
      likes: 58,
      comments: 12,
      date: '2020년 10월 21일'
    }
  ];

  return (
    <S.DefaultLayout>
      {userData.map((user, index) => (
        <UserProfile key={index} {...user} />
      ))}
    </S.DefaultLayout>
  );
}
