import * as S from './styles';
import Image from 'next/image';
import { Radio } from '..';
import { Formik, FormikValues } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import { ValidationSchema } from './validation';
import { DataProps } from '../../hooks/useData';
import Close from '../../../public/close.svg';
import ArrowUp from '../../../public/feather-arrow-up-circle.svg';
import ArrowDown from '../../../public/feather-arrow-down-circle.svg';
import { NumberFormatValues } from 'react-number-format';

const initialValues = {
  name: '',
  value: undefined,
  type: '',
  category: ''
};

type ModalProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  handleSubmit: (values: FormikValues) => void;
};

export const Modal = ({ setModalOpen, handleSubmit }: ModalProps) => {
  const [type, setType] = useState('');

  function currencyFormatter(value: any) {
    if (!Number(value)) return '';

    const amount = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value / 100);

    return `${amount}`;
  }

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
              <S.ValueInput
                type='text'
                placeholder={
                  !!(touched.value && errors.value) ? errors.value : 'Preço'
                }
                value={values.value}
                name='value'
                onValueChange={(values) => {
                  const { value }: NumberFormatValues = values;
                  setFieldValue(
                    'value',
                    String((Number(value) / 100).toFixed(2))
                  );
                }}
                error={!!(touched.value && errors.value)}
                format={currencyFormatter}
                prefix={'R$ '}
                thousandSeparator='.'
                decimalSeparator=','
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
