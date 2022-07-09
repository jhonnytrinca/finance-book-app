import * as S from './styles';
import Image from 'next/image';

type ListProps = {
  data: {
    id?: string;
    name: string;
    type: string;
    value: string;
    category: string;
    date?: string;
  }[];
  handleDelete: (id: string) => void;
};

const header = ['Descrição', 'Valor', 'Categoria', 'Data', ''];

export const List = ({ data, handleDelete }: ListProps) => {
  return (
    <S.Table>
      <S.THead>
        {header.map((item, index) => (
          <td key={index}>{item}</td>
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
              R$ {item.value}
            </span>
            <span>{item.category}</span>
            <span>{item.date}</span>
            <S.Button onClick={() => handleDelete(item.id!)}>
              <Image
                src='/feather-trash.svg'
                alt='Remover item'
                width='13'
                height='15'
              />
            </S.Button>
          </S.TR>
        ))}
      </S.Tbody>
    </S.Table>
  );
};
