import React from 'react';
import { ErrorMessageTypes } from './ErrorMessage.types';
import styles from './ErrorMessage.module.scss';
const ErrorMessage = ({ errorMessage }: ErrorMessageTypes) => {
    return (
        <div className={styles.errorContainer}>
            <span>{errorMessage}</span>
        </div>
    );
};

export default ErrorMessage;
