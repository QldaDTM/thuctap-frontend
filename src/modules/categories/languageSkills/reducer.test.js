import React from 'react';

import reducer from './reducer';
import * as actions from './actions';

it('initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    data: {},
    ordered: [],
    isFetching: false,
    error:null
  });
});

it('fetching error', () => {
  let state = reducer(undefined, actions.fetchStarted());
  expect(state).toEqual({
    data: {},
    ordered: [],
    isFetching: true,
    error:null
  });

  state = reducer(state, actions.fetchFailed('error'));
  expect(state).toEqual({
    data: {},
    ordered: [],
    isFetching: false,
    error:'error'
  });
});

it('fetching finished/reset', () => {
  let state = reducer(undefined, actions.fetchStarted());
  expect(state).toEqual({
    data: {},
    ordered: [],
    isFetching: true,
    error:null
  });

  let classes = [{
    id: '1223',
    name: 'CC',
    facultyId: 'CC',
    levelId: 'CC',
    formOfEducationId: 'CC',
    fieldOfStudyId: 'B',
    courseId: 'B',
  },
    {
      id: '234',
      name: 'A',
      facultyId: 'B',
      levelId: 'B',
      formOfEducationId: 'B',
      fieldOfStudyId: 'B',
      courseId: 'B',
    }];

  state = reducer(state, actions.fetchFinished(classes));
  expect(state).toEqual({
    data: {
      '1223': {
        id: '1223',
        name: 'CC',
        facultyId: 'CC',
        levelId: 'CC',
        formOfEducationId: 'CC',
        fieldOfStudyId: 'B',
        courseId: 'B',
      },
      '234': {
        id: '234',
        name: 'A',
        facultyId: 'B',
        levelId: 'B',
        formOfEducationId: 'B',
        fieldOfStudyId: 'B',
        courseId: 'B',
      }
    },
    ordered: ['1223','234'],
    isFetching: false,
    error:null
  });

  state = reducer(state, actions.reset());
  expect(state).toEqual({
    data: {},
    ordered: [],
    isFetching: false,
    error:null
  });
});
