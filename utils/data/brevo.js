/* eslint-disable no-useless-catch */
import { clientCredentials } from '../client';

const { brevoKey } = clientCredentials;

const sendContactEmail = async (content) => {
  const fetchHeaders = new Headers();
  fetchHeaders.append('Content-Type', 'application/json');
  fetchHeaders.append('Accept', 'application/json');
  fetchHeaders.append('api-key', brevoKey);

  const request = {
    method: 'POST',
    headers: fetchHeaders,
    body: JSON.stringify(content),
    redirect: 'follow',
  };
  try {
    return await fetch('https://api.brevo.com/v3/smtp/email', request);
  } catch (error) {
    throw error;
  }
};

export default sendContactEmail;
