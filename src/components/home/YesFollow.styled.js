import styled from 'styled-components';

const FONT_FAMILY = "'Spoqa Han Sans Neo', sans-serif";
const FONT_COLOR = '#767676';

export const DefaultLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 712px;
  width: 390px;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 20px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 434px;
  width: 358px;
`;
export const AboutUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 358px;
  position: relative;
`;

export const StyledProfileImg = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  border: 0.5px solid #dbdbdb;
  background: lightgray 50% / cover no-repeat;
  margin-right: 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.p`
  height: 18px;
  color: #000;
  font-family: ${FONT_FAMILY};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 18px;
`;
export const H3 = styled.h3`
  color: ${FONT_COLOR};
  font-family: ${FONT_FAMILY};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
export const Button = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const P = styled.p`
  color: #000;
  font-family: ${FONT_FAMILY};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 54px;
  margin-top: 12px;
`;

export const Img = styled.img`
  margin-top: 16px;
  margin-left: 54px;

  height: 228px;
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  width: 304px;
  margin-top: 12px;
  margin-left: 54px;
`;

export const StyledHeart = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;
export const StyledMessage = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;
export const Span = styled.span`
  color: #767676;
  margin-right: 16px;
`;
export const Date = styled.p`
  color: #767676;
  font-family: ${FONT_FAMILY};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  margin-left: 54px;
  margin-top: 16px;
`;
