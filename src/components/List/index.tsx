import * as S from './styles';
import Image from 'next/image';

type ListProps = {
  data: {
    id: number;
    description: string;
    type: string;
    value: string;
    category: string;
    date: string;
  }[];
};

const header = ['Descrição', 'Valor', 'Categoria', 'Data', ''];

export const List = ({ data }: ListProps) => {
  const handleRemove = () => {};

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
            <span>{item.description}</span>
            <span
              className={`${
                item.type === 'in' ? 'in' : item.type === 'out' ? 'out' : null
              }`}
            >
              R$ {item.value}
            </span>
            <span>{item.category}</span>
            <span>{item.date}</span>
            <S.Button onClick={handleRemove}>
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
