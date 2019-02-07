import * as Sentry from '@sentry/browser';
const ERRORS = {
  U2F_TIMEOUT: 'Failed to sign with Ledger device: U2F TIMEOUT'
};
const ErrorHandler = err => {
  const errorValues = Object.values(ERRORS);
  if (errorValues.includes(err.message)) {
    console.error(err.message, err); // eslint-disable-line
  } else {
    Sentry.captureException(err);
  }
};
export default ErrorHandler;
