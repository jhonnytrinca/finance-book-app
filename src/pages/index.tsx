import type { NextPage } from 'next';
import { useState } from 'react';
import { Header, Card, List, Modal } from '../components';
import { useData } from '../components/hooks/useData';
import * as S from '../styles/home';

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { data, handleDelete, handleSubmit, resumeData } = useData();

  const ResumeItems = [
    {
      title: 'Entrada',
      icon: '/feather-arrow-down.svg',
      variant: false,
      value: resumeData.entries
    },
    {
      title: 'Saídas',
      icon: '/feather-arrow-up.svg',
      variant: false,
      value: resumeData.exits
    },
    {
      title: 'Saldo Total',
      variant: true,
      value: resumeData.total
    }
  ];

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

          <List data={data} handleDelete={handleDelete} />
        </S.Wrapper>
      </S.Container>

      {modalOpen && (
        <Modal setModalOpen={setModalOpen} handleSubmit={handleSubmit} />
      )}
    </>
  );
};

export default Home;
