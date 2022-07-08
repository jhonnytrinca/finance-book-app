import type { NextPage } from 'next';
import { useState } from 'react';
import { Header, Card } from '../components';
import * as S from '../styles/home';

const ResumeItems = [
  {
    title: 'Entrada',
    icon: '/feather-arrow-down.svg',
    variant: false,
    value: '1529289,52'
  },
  {
    title: 'Saídas',
    icon: '/feather-arrow-up.svg',
    variant: false,
    value: '1529289,52'
  },
  {
    title: 'Saldo Total',
    variant: true,
    value: '50,00'
  }
];

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <Header setModalOpen={setModalOpen} />
      <S.Container>
        <S.ResumeWrapper>
          {ResumeItems.map((item, index) => (
            <Card
              title={item.title}
              icon={item.icon}
              value={item.value}
              variant={item.variant}
              key={index}
            />
          ))}
        </S.ResumeWrapper>
      </S.Container>
    </>
  );
};

export default Home;
