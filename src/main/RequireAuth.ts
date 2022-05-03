import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppMainSelector } from 'reduxEntities';

export const RequireAuth = ({ children }: any) => {
  const authorized = useAppMainSelector(state => state.userInfo.authorized);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) {
      return navigate('/login');
    }
  }, [navigate, authorized]);

  return children;
};
