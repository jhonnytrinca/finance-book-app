import * as S from './style';
import Image from 'next/image';

export const Radio = ({ checked, name, icon, placeholder, value }: any) => {
  return (
    <S.Label checked={checked} name={name}>
      <S.Input type='radio' name={name} value={value} />
      <Image src={icon} alt='Icone' width='28' height='28' />
      <span>{placeholder}</span>
    </S.Label>
  );
};
