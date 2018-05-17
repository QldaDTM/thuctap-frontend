// @flow

import 'isomorphic-fetch';
import * as localStorage from './../localStorage';

export const API_VERSION = 'v1';
export const API_BASE = `http://localhost:4000/api/${ API_VERSION }`;

export const renderLink = (url: string): string => {
  let auth  = localStorage.loadState('sessionStudent');
  let token = auth.sessionStudent ? String(auth.sessionStudent.token) : '';
  let renUrl = url + (url.indexOf('filter') === -1 && url.indexOf('where') === -1 ? '?' : '&') + 'access_token=' + token;
  return renUrl;
};
export const get = (url: string, status: number, hdr: any): Promise<*> => {
  let headers: any = hdr || {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  let opts = {
    method: 'GET',
    headers
  };
  
  return fetch(renderLink(url), opts)
    .then(resp => {
      if (resp.status !== status) {
        return Promise.reject(`Expect code ${ status } but got ${ resp.status }`);
      }

      return resp.json();
    });
};

export const post = (url: string, body: any, status: number, hdr: any): Promise<*> => {
  let headers: any = hdr || {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  console.log(url);
  let opts = {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  };

  return fetch(renderLink(url), opts)
    .then(resp => {
      if (resp.status !== status) {
        return Promise.reject(`Expect code ${ status } but got ${ resp.status }`);
      }

      return resp.json();
    });
}

export const put = (url: string, body: any, status: number, hdr: any): Promise<*> => {
  let headers: any = hdr || {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  let opts = {
    method: 'PUT',
    headers,
    body: JSON.stringify(body)
  };

  return fetch(renderLink(url), opts)
    .then(resp => {
      if (resp.status !== status) {
        return Promise.reject(`Expect code ${ status } but got ${ resp.status }`);
      }

      return resp.json();
    });
}

export const patch = (url: string, body: any, status: number, hdr: any): Promise<*> => {
  let headers: any = hdr || {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  let opts = {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body)
  };

  return fetch(renderLink(url), opts)
    .then(resp => {
      if (resp.status !== status) {
        return Promise.reject(`Expect code ${ status } but got ${ resp.status }`);
      }

      return resp.json();
    });
}

export const del = (url: string, status: number, hdr: any): Promise<*> => {
  let headers: any = hdr || {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  let opts = {
    method: 'DELETE',
    headers,
  };

  return fetch(renderLink(url), opts)
    .then(resp => {
      if (resp.status !== status) {
        return Promise.reject(`Expect code ${ status } but got ${ resp.status }`);
      }

      return resp.json();
    });
}
