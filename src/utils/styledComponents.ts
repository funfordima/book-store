import styled from 'styled-components';
import svgError from '../public/error.svg';
import svgSuccess from '../public/success.svg';

export const AlertError = styled.div`
  margin-top: 20px;
  padding: 8px 16px 8px 48px;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  color: #fe5652;
  text-align: left;
  border-radius: 2px;
  border: 1px solid rgba(0,0,0,0.16);
  background-color: rgba(254,86,82,0.08);
  border-color: rgba(254,86,82,0.4);

  &:after {
    content: '';
    position: absolute;
    left: 12px;
    top: 8px;
    width: 24px;
    height: 24px;
    background-image: url(${svgError});
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export const AlertSuccess = styled.div`
  margin-top: 20px;
  padding: 8px 16px 8px 48px;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  color: #64dd17;
  text-align: left;
  border-radius: 2px;
  border: 1px solid rgba(0,0,0,0.16);
  background-color: rgba(33,194,134,0.08);
  border-color: rgba(33,194,134,0.4);

  &:after {
    content: '';
    position: absolute;
    left: 12px;
    top: 8px;
    width: 24px;
    height: 24px;
    background-image: url(${svgSuccess});
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
