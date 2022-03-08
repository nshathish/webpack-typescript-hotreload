import { createHmac } from 'crypto';

export const createHmacToken = (
  secret: string,
  token: string,
  path: string,
  method: string
): { authHeader: string; timeStamp: string } => {
  const timeStamp = new Date().toISOString();
  const stringToSign = `${method.toUpperCase()} ${path} ${timeStamp}`;

  const hmac = createHmac('SHA1', secret);
  hmac.update(stringToSign);

  const signature = hmac.digest('hex');
  const authHeader = `${token}:${signature}`;

  return {
    authHeader,
    timeStamp,
  };
};
