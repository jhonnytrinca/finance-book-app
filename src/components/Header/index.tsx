import * as S from './styles';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import Logo from '../../../public/logo.svg';

type HeaderProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const Header = ({ setModalOpen }: HeaderProps) => (
  <S.Container>
    <div className='wrapper'>
      <Image src={Logo} alt='Logo' />
      <S.Button onClick={() => setModalOpen(true)}>Nova transação</S.Button>
    </div>
  </S.Container>
);
