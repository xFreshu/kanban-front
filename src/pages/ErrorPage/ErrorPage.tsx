import { useState, useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.scss";
import qrCode from "../../assets/images/qrcode.svg";
import Button from "../../components/atoms/Button/Button";
import { ErrorType } from "./ErrorPage.types";

const ErrorBoundary = () => {
  const { statusText, status } = useRouteError() as ErrorType;

  const [counter, setCounter] = useState(0);
  //create counter from 0 to 100 with 1% increment
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 100) {
        setCounter(counter + 1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [counter]);

  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <div className={styles.container}>
          <h1>:(</h1>
          <h2>
            Your Application ran into a problem and needs to restart. You can
            try to continue working by clicking on the button below.
          </h2>
          <Button
            btnName="Click me"
            className={styles.buttonNew}
            onClick={() => navigate(-1)}
          />
          <h2>
            <span id="percentage">{counter}</span>% complete
          </h2>
          <div className={styles.details}>
            <div className={styles.qr}>
              <div className={styles.image}>
                <img src={qrCode} alt="QR Code" />
              </div>
            </div>
            <div className={styles.stopCode}>
              <h4>
                For more information about the creator of this application,
                please visit:
                <br />
                <a
                  href="https://lprzybyszwebdeveloper.netlify.app/"
                  className={styles.creatorLink}
                >
                  The Creator
                </a>
              </h4>
              <h5>
                The error code is: {status} {statusText}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
