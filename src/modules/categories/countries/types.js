// @flow

export type Country = {
  id: string,
  name: string
}

export type CountryState = {
    data: any,
    ordered: Array<string>,
    isFetching: boolean
};