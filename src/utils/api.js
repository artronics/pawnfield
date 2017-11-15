import request from 'utils/request';

const baseUrlProtocol = (prot: string) => prot === 'https'
  ? 'https://api.pawnfield.co.uk/api'
  : 'http://localhost:8080/api';

export const baseUrl = baseUrlProtocol(window.location.protocol);

function getToken() {
  const acc = JSON.parse(window.localStorage.getItem('account'))
  return acc.token;
}
function makeAuthorization(token) {
  if(token) {
    return `Bearer ${token}`;
  } else if (getToken()) {
    return `Bearer ${getToken()}`;
  }
}

const baseOptions: Object = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const options = (method = 'GET', token, body) => {
  const auth = makeAuthorization(token);

  return {
    ...baseOptions,
    method,
    headers: {
      ...baseOptions.headers,
      ...auth && {authorization: auth},
    },
    ...(body && method === 'POST') && {body: JSON.stringify(body)},
 };
};

export function post(url, body) {
  const opt = options('POST', undefined, body)

  return request(`${baseUrl + url}`, opt);
}
export {
  baseUrlProtocol,
  baseOptions,
  options,
}
