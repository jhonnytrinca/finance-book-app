import * as S from './styles';
import Image from 'next/image';

type CardProps = {
  title: string;
  icon?: string;
  value: string;
  variant?: boolean;
};

export const Card = ({ title, icon, value, variant }: CardProps) => {
  return (
    <S.Card variant={variant}>
      <S.Title>
        <span>{title}</span>
        {icon && (
          <Image src={icon} alt='Icone indicador' width='19' height='19' />
        )}
      </S.Title>
      <S.Value>R$ {value}</S.Value>
    </S.Card>
  );
};