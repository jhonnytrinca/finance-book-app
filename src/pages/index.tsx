import type { NextPage } from 'next';
import { useState } from 'react';
import { Header, Card, List, Modal } from '../components';
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

const data = [
  {
    id: 1,
    description: 'Curso de NextJS',
    value: '899',
    category: 'Educação',
    date: '12/02/2022 às 13h24',
    type: 'in'
  },
  {
    id: 2,
    description: 'Curso de NextJS',
    value: '12312312',
    category: 'Educação',
    date: '12/02/2022 às 13h24',
    type: 'out'
  }
];

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <Header setModalOpen={setModalOpen} />
      <S.Container>
        <S.Wrapper>
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

          <List data={data} />
        </S.Wrapper>
      </S.Container>

      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </>
  );
};

export default Home;
