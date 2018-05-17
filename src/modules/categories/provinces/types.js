// @flow

export type Province = {
  id: string,
  name: string,
  countryId: string
}

export type ProvinceState = {
    data: any,
    ordered: Array<string>,
    isFetching: boolean
};