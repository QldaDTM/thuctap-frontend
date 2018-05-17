// @flow

export type Ward = {
  id: string,
  name: string,
  districtId: string
}

export type WardState = {
    data: any,
    ordered: Array<string>,
    isFetching: boolean
};