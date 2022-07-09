import * as S from './styles';
import Image from 'next/image';
import { Radio } from '..';

export const Modal = ({ setModalOpen }: any) => {
  return (
    <S.Container>
      <S.Modal>
        <S.CloseButton onClick={() => setModalOpen(false)}>
          <Image
            src='/close.svg'
            alt='Botão fechar modal'
            width='26'
            height='26'
          />
        </S.CloseButton>
        <S.Form>
          <S.Title>Cadastrar Transação</S.Title>
          <S.Input type='text' placeholder='Nome' />
          <S.Input type='text' placeholder='Preço' />
          <S.RadioWrapper>
            <Radio
              icon='/feather-arrow-up-circle.svg'
              placeholder='Entrada'
              checked={undefined}
              name='entry'
            />
            <Radio
              icon='/feather-arrow-down-circle.svg'
              placeholder='Saída'
              checked={undefined}
              name='exit'
            />
          </S.RadioWrapper>
          <S.Input type='text' placeholder='Categoria' />
          <S.ApplyButton>Cadastrar</S.ApplyButton>
        </S.Form>
      </S.Modal>
    </S.Container>
  );
};
