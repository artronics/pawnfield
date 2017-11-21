import { fromJS } from 'immutable';

// constants
export const CREATE_RESOURCE = 'pawnfield/DataSource/CREATE_RESOURCE';
export const GET_RESOURCE = 'pawnfield/DataSource/GET_RESOURCE';
export const GET_RESOURCE_SUCCESS = 'pawnfield/DataSource/GET_RESOURCE_SUCCESS';

const initialState = fromJS({});

// actions
export function createResource(name) {
  return {
    type: CREATE_RESOURCE,
    name,
  };
}

export function getResource(name, options) {
  return {
    type: GET_RESOURCE,
    name,
    options,
  };
}

export function getResourceSuccess(resource) {
  return {
    type: GET_RESOURCE_SUCCESS,
    resource,
  };
}

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}