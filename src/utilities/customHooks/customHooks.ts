import { useParams } from 'react-router-dom';

export const useCustomParams = () => {
  const { itemId } = useParams<{ itemId: string }>();
  return itemId ? itemId : '';
};
export const useCustomDebounce = (func: Function, milliseconds: number) => {
  const time = milliseconds || 3000;
  let timer: number;

  return (event: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(func, time, event);
  };
};
