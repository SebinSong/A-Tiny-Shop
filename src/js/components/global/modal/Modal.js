import React from 'react';

import './Modal.scss';

function Modal ({
  children = null,
  classes = ''
}) {
  return (
    <div className={`modal ${classes}`}>
      <div className="modal__overlay"></div>

      <div className="modal__content">
        {children}
      </div>
    </div>
  )
};

export default Modal;