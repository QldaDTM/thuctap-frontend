// @flow

import * as base from './base';

const STUDENTS_BASE = `${ base.API_BASE }/students`;

export const get = (skip: number, limit: number, where: ?any) => {
  skip = skip || 0;
  limit = limit || 10;
  where = where || {};

  let filter = {
    skip,
    limit,
    where
  };

  let url = `${ STUDENTS_BASE }?filter=${ JSON.stringify(filter) }`;
  return base.get(url, 200)
    .then(obj => {
      return obj;
    });
}

export const getOneByStudentID = (id:string) => {
  let limit = 1;
  let where = {studentId: id};

  let filter = {
    limit,
    where
  };

  let url = `${ STUDENTS_BASE }?filter=${ JSON.stringify(filter) }`;
  console.log(url);
  return base.get(url, 200)
    .then(obj => {
      if(obj.length === 1 ) return obj[0];
      return null;
    });
}

export const getClasses = (studentId:string) => {
  let url = `${ STUDENTS_BASE }/${studentId}/classes`;
  return base.get(url, 200)
    .then(obj => {
      return obj;
    });
}
export const getAll= (filter:?any) => {
  filter = filter || {};
  return base.get(`${ STUDENTS_BASE }?filter=${ JSON.stringify(filter) }`, 200)
    .then(obj => {
      return obj;
    });
}

export const getOne = (id: string, filter: any) => {
  let filterStr = !!filter ? `?filter=${ JSON.stringify(filter) }` : '';
  let url = `${ STUDENTS_BASE }/${ id }${ filterStr }`;

  return base.get(url, 200)
    .then(obj => {
      return obj;
    });
}

export const create = (createObj:any) =>{
  return base.post(STUDENTS_BASE, createObj, 200)
    .then(obj => {
      return obj;
    });
}

export const updateOne = (id: string, body: any) => {
  let url = `${ STUDENTS_BASE }/${ id }`;

  return base.patch(url, body, 200)
    .then(obj => {
      return obj;
    });
}

export const count = () => {
  return base.get(STUDENTS_BASE +'/count', 200)
    .then(obj => {
      return obj;
    });
}