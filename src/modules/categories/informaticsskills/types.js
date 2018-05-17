// @flow

export type LanguageSkill = {
  id: string,
  name: string,
  note:string
}
export type LanguageSkillState = {
  data: any,
  ordered: Array<string>,
  isFetching: boolean,
  error: any
};