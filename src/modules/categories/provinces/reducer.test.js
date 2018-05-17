import React from 'react';

import reducer from './reducer';
import * as actions from './actions';

it('initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    data: {},
    ordered: [],
    isFetching: false
  });
});

it('fetching error', () => {
  let state = reducer(undefined, actions.fetchStarted());
  expect(state).toEqual({
    data: {},
    ordered: [],
    isFetching: true
  });

  state = reducer(state, actions.fetchFailed('error'));
  expect(state).toEqual({
    data: {},
    ordered: [],
    isFetching: false
  });
});

it('fetching finished/reset', () => {
  let state = reducer(undefined, actions.fetchStarted());
  expect(state).toEqual({
    data: {},
    ordered: [],
    isFetching: true
  });

  let provinces = [{
    id: '123',
    name: 'A',
    countryId: 'B'
  }, {
    id: '234',
    name: 'C',
    countryId: 'D'
  }];

  state = reducer(state, actions.fetchFinished(provinces));
  expect(state).toEqual({
    data: {
      '123': {
        id: '123',
        name: 'A',
        countryId: 'B'
      },
      '234': {
        id: '234',
        name: 'C',
        countryId: 'D'
      }
    },
    ordered: [ '123', '234' ],
    isFetching: false
  });

  state = reducer(state, actions.reset());
  expect(state).toEqual({
    data: {},
    ordered: [],
    isFetching: false
  });
});