import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Brightness, Invert } from 'react-native-color-matrix-image-filters';

import Logo from '../../assets/logo.png';

import {
  Container,
  Header,
  HeaderTitle,
  NewsContainer,
  NewsList,
  Notice,
  NewsImageContainer,
  NoticeInfos,
  NoticeTitle,
  NoticeDescription,
  NoticePricing,
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

const News: React.FC = () => {
  const [news, setNews] = useState<Notice[]>([]);

  const navigation = useNavigation();

  async function handleNavigate(item: Notice): Promise<void> {
    navigation.navigate('Details', item);
  }

  useEffect(() => {
    setNews([
      {
        id: 1,
        title: 'COMO USAR O E-MAIL MARKETING A SEU FAVOR',
        description:
          'O sonho de todo profissional de marketing ou redator publicitário é criar um e-mail perfeito, com uma ótima taxa de abertura, que vá direto para a caixa de entrada dos usuários e que converta em mais vendas para a sua empresa. Seria o mundo ideal, não é mesmo? O que ocorre é que o e-mail marketing é visto com certo descaso por muitas pessoas, que acabam nem abrindo ou o enviam direto para a lixeira. Isso se deve muito, também, pela chegada de outros meios de comunicação, tais como os aplicativos WhatsApp e Telegram.',
        owner: 'Autor',
        category: 'categoria',
        views: 32,
        thumbnail_url:
          'https://duo.studio/uploads/noticias/117/blog-duo-05-10.jpg',
      },
      {
        id: 2,
        title: 'Titulo',
        description: 'descrição',
        owner: 'Autor',
        category: 'categoria',
        views: 32,
        thumbnail_url: 'https://duo.studio/img/blog-banner.png',
      },
      {
        id: 3,
        title: 'Titulo',
        description: 'descrição',
        owner: 'Autor',
        category: 'categoria',
        views: 32,
        thumbnail_url: 'https://duo.studio/img/blog-banner.png',
      },
      {
        id: 4,
        title: 'Titulo',
        description: 'descrição',
        owner: 'Autor',
        category: 'categoria',
        views: 32,
        thumbnail_url: 'https://duo.studio/img/blog-banner.png',
      },
      {
        id: 5,
        title: 'Titulo',
        description: 'descrição',
        owner: 'Autor',
        category: 'categoria',
        views: 32,
        thumbnail_url: 'https://duo.studio/img/blog-banner.png',
      },
      {
        id: 6,
        title: 'Titulo',
        description: 'descrição',
        owner: 'Autor',
        category: 'categoria',
        views: 32,
        thumbnail_url: 'https://duo.studio/img/blog-banner.png',
      },
    ]);
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>duo.blog</HeaderTitle>
        <Invert>
          <Brightness amount={0}>
            <Image source={Logo} style={{ height: 30, width: 60 }} />
          </Brightness>
        </Invert>
      </Header>

      <NewsContainer>
        <NewsList
          data={news}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Notice
              key={item.id}
              activeOpacity={0.9}
              onPress={() => handleNavigate(item)}
            >
              <NewsImageContainer>
                <Image
                  style={{ width: 90, height: 100 }}
                  source={{ uri: item.thumbnail_url }}
                />
              </NewsImageContainer>
              <NoticeInfos>
                <NoticeTitle>{item.title}</NoticeTitle>
                <NoticeDescription>{item.owner}</NoticeDescription>
                <NoticePricing>{item.category}</NoticePricing>
              </NoticeInfos>
            </Notice>
          )}
        />
      </NewsContainer>
    </Container>
  );
};

export default News;
