import { useNavigate } from 'react-router-dom';
import { useAppMainSelector } from 'reduxEntities';
import { useEffect } from 'react';

export const RequireAuth = ({ children }) => {
  const authorized = useAppMainSelector(state => state.userInfo.authorized);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) {
      return navigate('/login');
    }
  }, [authorized]);

  return children;
};
