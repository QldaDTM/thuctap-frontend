// @flow

export type PoliticalOrganization = {
  id: string,
  name: string
}

export type PoliticalOrganizationState = {
    data: any,
    ordered: Array<string>,
    isFetching: boolean
};