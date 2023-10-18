import React from 'react';
import * as S from './NoFollow.styled';
import {ReactComponent as GamgulLogo} from '../../images/home/symbol-logo-gray.svg';

export default function Default() {
  return (
    <S.DefaultLayout>
      <S.StyledGamgulLogo>
        <GamgulLogo />
      </S.StyledGamgulLogo>
      <S.P>유저를 검색해 팔로우 해보세요!</S.P>
      <S.Button>검색하기</S.Button>
    </S.DefaultLayout>
  );
}
