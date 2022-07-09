import * as yup from 'yup';

export const ValidationSchema = yup.object().shape({
  name: yup.string().required('Necessário informar um nome'),
  value: yup.string().required('Necessário informar um valor'),
  type: yup.string().required('Necessário informar um tipo'),
  category: yup.string().required('Necessário informar uma categoria'),
})