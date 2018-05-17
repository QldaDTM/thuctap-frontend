// @flow

export type District = {
  id: string,
  name: string,
  provinceId: string
}

export type DistrictState = {
    data: any,
    ordered: Array<string>,
    isFetching: boolean
};