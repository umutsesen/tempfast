import React, { useState, useEffect } from 'react';
import IconCheck from '../svg/icon_check';
import IconExclamation from '../svg/icon_exclamation';
import IconClose from '../svg/icon_close';
import { CSSTransition } from 'react-transition-group';

const AlertDialog = ({ success, message = '', dismiss }) => {
  useEffect(() => {
    setTimeout(() => {
      dismiss();
    }, 4000);
  });

  return (
    <CSSTransition
      in
      appear
      unmountOnExit
      timeout={400}
      classNames="sizeMeAlertAnimation"
    >
      <div
        className={`sizemeAlertDialog ${
          success ? 'sizemeAlertDialog-success' : 'sizemeAlertDialog-fail'
        }`}
      >
        {success ? (
          <IconCheck className="sizemeAlertDialogIcon" />
        ) : (
          <IconExclamation className="sizemeAlertDialogIcon" />
        )}

        <p>{message}</p>
        <IconClose className={'sizemeAlertCloseIcon'} onClick={dismiss} />
      </div>
    </CSSTransition>
  );
};

export default AlertDialog;
