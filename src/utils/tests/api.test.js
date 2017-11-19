import sinon from 'sinon';
import {
  baseOptions,
  baseUrl,
  baseUrlProtocol,
  get,
  options,
  post,
} from '../api';

describe('api', () => {
  describe('baseUrl', () => {
    it('should return localhost if protocol is http', () => {
      expect(baseUrlProtocol('http')).toEqual('http://localhost:8080/api');
    });
    it('should return pawnfield if protocol is https', () => {
      expect(baseUrlProtocol('https'))
          .toEqual('https://api.pawnfield.co.uk/api');
    });
  });
  describe('options', () => {
    beforeEach(() => {
      global.window.localStorage = {
        getItem: () => String.raw`{"account":{"token":"token"}}`,
      };
    });
    it('should get GET options', () => {
      expect(options('GET')).toEqual({
        ...baseOptions,
        method: 'GET',
      });
    });
    it('should be GET as default', () => {
      expect(options()).toEqual({
        ...baseOptions,
        method: 'GET',
      });
    });
    it('should get POST options', () => {
      expect(options('POST')).toEqual({
        ...baseOptions,
        method: 'POST',
      });
    });
    it('should get body is defined and if method is POST', () => {
      const body = {foo: 'bar'};
      expect(options('POST', undefined, body)).toEqual({
        ...baseOptions,
        method: 'POST',
        body: JSON.stringify(body),
      });
    });
    it('should add body if present and method is post', () => {
      expect(options('POST').hasOwnProperty('body')).toBe(false);
      expect(options('GET', undefined, {foo: 'bar'}).hasOwnProperty('body'))
          .toBe(false);
    });
    it('should add token if present', () => {
      expect(options('POST', 'token')).toEqual({
        ...baseOptions,
        method: 'POST',
        headers: {
          ...baseOptions.headers,
          authorization: 'Bearer token',
        },
      });
      // eslint-disable-next-line no-prototype-builtins
      expect(options('POST').headers.hasOwnProperty('authorization'))
          .toBe(false);
    });
    describe('async', () => {
      let stub;
      beforeEach(() => {
        stub = sinon.stub(window, 'fetch');
        window.fetch.returns(Promise.resolve(jsonOk({foo: 'bar'})));
      });

      afterEach(() => {
        window.fetch.restore();
      });

      describe('post', () => {
        it('should call with url', () => {
          const url = '/foo_url';
          post(url, {});
          sinon.assert.calledWith(stub, `${baseUrl + url}`);
        });
      });
      describe('get', () => {
        it('should call with url', () => {
          const url = '/bar_url';
          get(url);
          sinon.assert.calledWith(stub, `${baseUrl + url}`);
        });
      });
    });
  });
});

function jsonOk(body) {
  const mockResponse = new window.Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-type': 'application/json',
    },
  });

  return Promise.resolve(mockResponse);
}

function jsonError(status, body) {
  const mockResponse = new window.Response(JSON.stringify(body), {
    status: status,
    headers: {
      'Content-type': 'application/json',
    },
  });

  return Promise.reject(mockResponse);
}
