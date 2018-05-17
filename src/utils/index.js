import * as ls from './localStorage';


import * as user from './api/user';
import * as student from './api/student';
import * as country from './api/country';
import * as province from './api/province';
import * as district from './api/district';
import * as ward from './api/ward';
import * as ethnicGroup from './api/ethnicGroup';
import * as religion from './api/religion';
import * as languageSkills from './api/languageSkills';
import * as politicalOrganization from './api/politicalOrganization';
import * as informaticsskills from './api/informaticsskills';

export const api = {
  user,
  student,
  country,
  province,
  district,
  ward,
  ethnicGroup,
  religion,
  politicalOrganization,
  languageSkills,
  informaticsskills
}

export const localStorage = ls;