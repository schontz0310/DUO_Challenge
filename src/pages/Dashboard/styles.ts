import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 60px 24px 60px;
  background: #8900ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-right-radius: 100px;
`;

export const User = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleHeader = styled.Text`
  font-family: 'Roboto-Medium';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #fff;
  padding: 0 10px;
`;

export const TitleContent = styled.Text`
  font-family: 'PermanentMarker-Regular';
  font-size: 48px;
  line-height: 60px;
  color: #3d3d4d;
  padding: 0 20px;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;
`;
