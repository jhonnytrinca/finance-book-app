import * as S from './style';
import Image from 'next/image';

type RadioProps = {
  checked: boolean;
  name: string;
  icon: string;
  placeholder: string;
  onChange: () => void;
  error: boolean;
};

export const Radio = ({
  checked,
  name,
  icon,
  placeholder,
  onChange,
  error
}: RadioProps) => {
  return (
    <S.Label checked={checked} name={name} onChange={onChange} error={error}>
      <S.Input type='radio' name={name} />
      <Image src={icon} alt='Icone' />
      <span>{placeholder}</span>
    </S.Label>
  );
};
