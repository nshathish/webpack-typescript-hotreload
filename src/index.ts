import { join } from 'lodash';
import { createHmacToken } from './helpers/auth-helper';

function component(): HTMLElement {
  const element = document.createElement('div');

  const secret = '123';
  const token = 'abc';
  const path = '/api/create';
  const method = 'POST';

  const { authHeader, timeStamp } = createHmacToken(
    secret,
    token,
    path,
    method
  );

  element.innerHTML = join(
    ['authHeader:', authHeader, 'timeStamp:', timeStamp],
    ' '
  );

  return element;
}

document.body.appendChild(component());
