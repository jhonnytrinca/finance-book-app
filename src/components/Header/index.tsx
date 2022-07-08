import * as S from './styles';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type HeaderProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const Header = ({ setModalOpen }: HeaderProps) => {
  return (
    <S.Container>
      <div className='wrapper'>
        <Image src={'/logo.svg'} alt='Logo' width='186' height='35' />
        <S.Button onClick={() => setModalOpen(true)}>Nova transação</S.Button>
      </div>
    </S.Container>
  );
};
