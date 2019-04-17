import React from 'react';
import './grocery-button.css';

const TYPES = {
  PRIMARY: 'primary',
  FORM: 'form'
};

const BaseButton = ({ buttonText, clickHandler, buttonType }) => {
  return (
    <button type="submit" onClick={clickHandler} className={buttonType}>
      {buttonText}
    </button>
  );
};

export const PrimaryButton = props => (
  <BaseButton {...props} buttonType={TYPES.PRIMARY} />
);
export const FormButton = props => (
  <BaseButton {...props} buttonType={TYPES.FORM} />
);

export default PrimaryButton;
