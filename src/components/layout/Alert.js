import React, { useContext } from 'react';
import { AlertContext } from '../../context/alert/AlertState';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert.message !== '' && (
      <div className={`alert alert-${alert.type} w-50 mx-auto mt-3`}>
        <i className="fa fa-info-circle"></i> { alert.message }
      </div>
    )
  )
}

export default Alert;