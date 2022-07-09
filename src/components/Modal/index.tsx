import * as S from './styles';
import Image from 'next/image';
import { Radio } from '..';
import { Formik } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import { ValidationSchema } from './validation';
import { DataProps } from '../../hooks/useData';
import Close from '../../../public/close.svg';
import ArrowUp from '../../../public/feather-arrow-up-circle.svg';
import ArrowDown from '../../../public/feather-arrow-down-circle.svg';

const initialValues = {
  name: '',
  value: '',
  type: '',
  category: ''
};

type ModalProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  handleSubmit: (values: DataProps) => void;
};

export const Modal = ({ setModalOpen, handleSubmit }: ModalProps) => {
  const [type, setType] = useState('');

  return (
    <S.Container>
      <S.Modal>
        <S.CloseButton onClick={() => setModalOpen(false)}>
          <Image src={Close} alt='Botão fechar modal' />
        </S.CloseButton>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
            setModalOpen(false);
          }}
        >
          {({ values, handleChange, setFieldValue, errors, touched }) => (
            <S.Form>
              <S.Title>Cadastrar Transação</S.Title>
              <S.Input
                type='text'
                placeholder={
                  !!(touched.name && errors.name) ? errors.name : 'Nome'
                }
                value={values.name}
                name='name'
                onChange={handleChange}
                error={!!(touched.name && errors.name)}
              />
              <S.Input
                type='text'
                placeholder={
                  !!(touched.value && errors.value) ? errors.value : 'Preço'
                }
                value={values.value}
                name='value'
                onChange={handleChange}
                error={!!(touched.value && errors.value)}
              />
              <S.RadioWrapper>
                <Radio
                  icon={ArrowUp}
                  placeholder='Entrada'
                  checked={type === 'entry'}
                  name={type}
                  onChange={() => {
                    setType('entry');
                    setFieldValue('type', 'entry');
                  }}
                  error={!!(touched.type && errors.type)}
                />
                <Radio
                  icon={ArrowDown}
                  placeholder='Saída'
                  checked={type === 'exit'}
                  name={type}
                  onChange={() => {
                    setType('exit');
                    setFieldValue('type', 'exit');
                  }}
                  error={!!(touched.type && errors.type)}
                />
              </S.RadioWrapper>
              <S.Input
                type='text'
                placeholder={
                  !!(touched.category && errors.category)
                    ? errors.category
                    : 'Categoria'
                }
                value={values.category}
                name='category'
                onChange={handleChange}
                error={!!(touched.category && errors.category)}
              />
              <S.ApplyButton>Cadastrar</S.ApplyButton>
            </S.Form>
          )}
        </Formik>
      </S.Modal>
    </S.Container>
  );
};
