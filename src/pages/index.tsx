import type { NextPage } from 'next';
import { useState } from 'react';
import { Header, Card, List, Modal } from '../components';
import { useData } from '../hooks/useData';
import * as S from '../styles/home';
import ArrowDown from '../../public/feather-arrow-down.svg';
import ArrowUp from '../../public/feather-arrow-up.svg';

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { data, handleDelete, handleSubmit, resumeData, formatValue } =
    useData();

  const ResumeItems = [
    {
      title: 'Entrada',
      icon: ArrowUp,
      variant: false,
      value: resumeData.entries
    },
    {
      title: 'Saídas',
      icon: ArrowDown,
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
                value={formatValue(item.value)}
                variant={item.variant}
                key={index}
              />
            ))}
          </S.ResumeWrapper>

          <List
            data={data}
            handleDelete={handleDelete}
            formatValue={formatValue}
          />
        </S.Wrapper>
      </S.Container>

      {modalOpen && (
        <Modal setModalOpen={setModalOpen} handleSubmit={handleSubmit} />
      )}
    </>
  );
};

export default Home;
