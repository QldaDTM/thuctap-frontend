// @flow

export type EthnicGroup = {
  id: string,
  name: string
}

export type EthnicGroupState = {
    data: any,
    ordered: Array<string>,
    isFetching: boolean
};