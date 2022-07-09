import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { v4 as uuidv4 } from 'uuid';

export type DataProps = {
  id?: string;
  name: string;
  value: number;
  category: string;
  date?: string;
  type: string;
};

type ResumeData = {
  entries: number;
  exits: number;
  total: number;
};

function getStorageValue() {
  const saved =
    typeof window !== 'undefined' ? localStorage.getItem('list') : null;
  const initial = JSON.parse(saved as string);
  return initial || [];
}

export const useData = () => {
  const [data, setData] = useState<DataProps[]>(() => {
    return getStorageValue();
  });
  const [resumeData, setResumeData] = useState<ResumeData>({
    entries: 0,
    exits: 0,
    total: 0
  });

  const handleSubmit = (values: any) => {
    const date = format(new Date(), "dd/M/yyyy' às 'k'h'mm", {
      locale: ptBR
    });
    const id = uuidv4();
    setData([...data, { id, date, ...values }]);
  };

  const handleDelete = (id: string) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  useEffect(() => {
    const entries = data.filter((item) => item.type === 'entry');
    const exits = data.filter((item) => item.type === 'exit');

    const entryValues = entries.reduce((acc, cur) => acc + +cur.value!, 0);
    const exitValues = exits.reduce((acc, cur) => acc + +cur.value!, 0);

    localStorage.setItem('list', JSON.stringify(data));
    setResumeData({
      entries: entryValues,
      exits: exitValues,
      total: +(entryValues - exitValues).toFixed(2)
    });
  }, [data]);

  const formatValue = (value: number) => {
    const amount = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);

    return `${amount}`;
  };

  return {
    data,
    handleSubmit,
    handleDelete,
    resumeData,
    formatValue
  };
};
