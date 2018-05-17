// @flow

export type Religion = {
  id: string,
  name: string
}

export type ReligionState = {
    data: any,
    ordered: Array<string>,
    isFetching: boolean
};