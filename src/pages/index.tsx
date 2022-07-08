import type { NextPage } from 'next';
import { useState } from 'react';
import { Header } from '../components';

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header setModalOpen={setModalOpen} />
    </>
  );
};

export default Home;
