import React, { useEffect } from 'react';
import { BackButton } from '../../utils/styledComponents';
import { ReactComponent as ArrowSvg } from '../../public/arrow-left.svg';
import { LOGIN_ROUTE } from '../../utils/constants';

const NotFoundPage: React.FC = () => {
  const addBodyClass = (className: string): void =>
    document.body.classList.add(className);
  const removeBodyClass = (className: string): void =>
    document.body.classList.remove(className);

  useEffect(() => {
    addBodyClass('not-found');
    return () => {
      removeBodyClass('not-found');
    };
  }, []);

  return (
    <BackButton to={LOGIN_ROUTE}>
      <ArrowSvg />
      <span>Back to Login</span>
    </BackButton>
  );
};

export default NotFoundPage;
