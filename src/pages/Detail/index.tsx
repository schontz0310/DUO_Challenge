import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import { useRoute } from '@react-navigation/native';

import {
  Container,
  Header,
  ScrollContainer,
  NoticesContainer,
  Notice,
  NoticeImageContainer,
  NoticeContent,
  NoticeTitle,
  NoticeDescription,
  Title,
  ExtrasContainer,
} from './styles';

interface Notice {
  id: number;
  title: string;
  description: string;
  owner: string;
  category: string;
  views: number;
  thumbnail_url: string;
}

const FoodDetails: React.FC = () => {
  const [notice, setNotice] = useState<Notice>();

  // const navigation = useNavigation();

  const route = useRoute();

  const routeParams = route.params as Notice;

  useEffect(() => {
    setNotice(routeParams);
  }, [routeParams]);

  return (
    <Container>
      <Header />

      <ScrollContainer>
        <NoticesContainer>
          <Notice>
            <NoticeImageContainer>
              <Image
                style={{ width: 380, height: 150 }}
                source={{
                  uri: notice?.thumbnail_url,
                }}
              />
            </NoticeImageContainer>
            <NoticeContent>
              <NoticeTitle>{notice?.title}</NoticeTitle>
              <NoticeDescription>{notice?.description}</NoticeDescription>
            </NoticeContent>
          </Notice>
        </NoticesContainer>

        <ExtrasContainer>
          <Title>{`Escrito por ${notice?.owner}`}</Title>
          <Title>{`Views ${notice?.views}`}</Title>
        </ExtrasContainer>
      </ScrollContainer>
    </Container>
  );
};

export default FoodDetails;
