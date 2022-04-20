import { useParams } from 'react-router-dom';

export const useCustomParams = () => {
  const { itemId } = useParams<{ itemId: string }>();
  return itemId ? itemId : '';
};
