import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Notice {
  id: number;
  title: string;
  description: string;
  owner: string;
  category: string;
  views: number;
  thumbnail_url: string;
}

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

export const HeaderTitle = styled.Text`
  color: #fff;
  font-family: 'Roboto-Medium';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
`;

export const NewsContainer = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const NewsList = styled(FlatList as new () => FlatList<Notice>)`
  flex: 1;
  padding: 0 20px;

  margin-top: 16px;
`;

export const Notice = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #00c4cd;
  border-radius: 8px;

  margin-bottom: 16px;
`;

export const NewsImageContainer = styled.View`
  background: #4f1593;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 16px;

  height: 100%;
`;

export const NoticeInfos = styled.View`
  flex: 1;

  padding: 16px;
`;
export const NoticeTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;

  color: #3d3d4d;
`;
export const NoticeDescription = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;

  margin-top: 6px;

  color: #3d3d4d;
`;

export const NoticePricing = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  margin-top: 8px;

  font-weight: 600;

  color: #39b100;
`;
