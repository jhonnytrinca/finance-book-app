import * as S from './styles';
import Image from 'next/image';
import Trash from '../../../public/feather-trash.svg';

type ListProps = {
  data: {
    id?: string;
    name: string;
    type: string;
    value: number;
    category: string;
    date?: string;
  }[];
  handleDelete: (id: string) => void;
  formatValue: (value: number) => string;
};

const header = ['Descrição', 'Valor', 'Categoria', 'Data', ''];

export const List = ({ data, handleDelete, formatValue }: ListProps) => {
  return (
    <S.Table>
      <S.THead>
        {header.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </S.THead>
      <S.Tbody>
        {data.map((item) => (
          <S.TR key={item.id}>
            <span>{item.name}</span>
            <span
              className={`${
                item.type === 'entry'
                  ? 'entry'
                  : item.type === 'exit'
                  ? 'exit'
                  : null
              }`}
            >
              {formatValue(item.value)}
            </span>
            <span>{item.category}</span>
            <span>{item.date}</span>
            <S.Button onClick={() => handleDelete(item.id!)}>
              <Image src={Trash} alt='Remover item' />
            </S.Button>
          </S.TR>
        ))}
      </S.Tbody>
    </S.Table>
  );
};
