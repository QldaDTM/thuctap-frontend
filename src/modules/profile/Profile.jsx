import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNotification, Loading } from './../../components';

import Form from './Form';
import * as countryActions  from './../categories/countries/actions';
import * as districtActions  from './../categories/districts/actions';
import * as ethnicGroupActions  from './../categories/ethnicGroups/actions';
import * as languageSkillActions  from './../categories/languageSkills/actions';
import * as politicalOrganizationActions  from './../categories/politicalOrganizations/actions';
import * as provinceActions  from './../categories/provinces/actions';
import * as religionActions  from './../categories/religions/actions';
import * as wardActions  from './../categories/wards/actions';
import * as loginAction from './../../screens/login/actions';
import * as informaticsskillActions from './../categories/informaticsskills/actions';
import * as profileActions from './actions';
import * as breadcrumbActions from './../../screens/components/breadcrumb/actions';

class Profile extends Component {
  
  componentWillMount(){
    let { countries, districts, ethnicGroups,
      languageSkills, politicalOrganizations, provinces, religions, wards, profile, informaticsskills } = this.props;
    let {countryActions, districtActions, ethnicGroupActions, languageSkillActions,
        politicalOrganizationActions, provinceActions, religionActions, wardActions,
        profileActions, notification, loginAction, informaticsskillActions} = this.props;
    
    this.checkState(countries, countryActions.fetchAll);
    this.checkState(districts, districtActions.fetchAll);
    this.checkState(ethnicGroups, ethnicGroupActions.fetchAll);
    this.checkState(languageSkills, languageSkillActions.fetchAll);
    this.checkState(politicalOrganizations, politicalOrganizationActions.fetchAll);
    this.checkState(provinces, provinceActions.fetchAll);
    this.checkState(religions, religionActions.fetchAll);
    this.checkState(wards, wardActions.fetchAll);
    this.checkState(informaticsskills, informaticsskillActions.fetchAll);
    
    if(profile.data == null){
      profileActions.getMyAccount()
        .then(res => {
          if(!res.id){
            loginAction.resetSession();
          }
        })
        .catch( () => notification.e('Thông Báo', 'Không Thê Lấy Dử liệu') );
    }

    let breadcrumb = {
      name: 'Profile',
      action: 'Update',
      breadcrumb: [
        {url : '/profile', name:'Profile'},
        {url : null, name:'Update'}
      ]
    };
    this.props.breadcrumbActions.setBreadcrumb(breadcrumb);
    
  }

  checkState (state: any, action: Function) {
    if(state.ordered.length === 0)
      action();
  }

  handelSubmit = (data) =>{
    let { notification, profileActions } = this.props;
    if(data !== -1){
      profileActions.updateMyAccount(data)
        .then(ls => {
          notification.s('Thông Báo', 'Cập Nhật Thành Công');
        })
        .catch(e => notification.e('Thông Báo', 'Cập Nhật Không Thành Công'));
    }else notification.e('Thông Báo', 'Vui Lòng Nhập Đúng Thông Tin');
    
    
  }

  render() {
    let { countries, districts, ethnicGroups,
      languageSkills, politicalOrganizations, provinces, religions, wards, profile, informaticsskills } = this.props;
    
    if( null === profile.data || undefined === profile.data.id || countries.ordered.length === 0 || ethnicGroups.ordered.length === 0 || languageSkills.ordered.length === 0 || politicalOrganizations.ordered.length === 0
      || provinces.ordered.length === 0 || religions.ordered.length === 0 || wards.ordered.length === 0 || informaticsskills.ordered.length === 0) return (<Loading />);

    return (
      <Form
        countries={ countries }
        districts={ districts }
        ethnicGroups={ ethnicGroups }
        languageSkills={ languageSkills }
        politicalOrganizations={ politicalOrganizations }
        provinces={ provinces }
        wards={ wards }
        profile={ profile.data }
        informaticsskills={ informaticsskills }
        onSubmit={ this.handelSubmit }
        religions={ religions }/>
    );
  }
}

let mapStateToProps = (state) => {
  let { countries, districts, ethnicGroups,
    languageSkills, politicalOrganizations, provinces, religions, wards, informaticsskills } = state.categories;
  let { profile } = state;
  return { countries, districts, ethnicGroups,
    languageSkills, politicalOrganizations, provinces, religions, wards, profile, informaticsskills };
};

let mapDispatchToProps = (dispatch) => {
  return {
    countryActions                : bindActionCreators(countryActions, dispatch),
    districtActions               : bindActionCreators(districtActions, dispatch),
    ethnicGroupActions            : bindActionCreators(ethnicGroupActions, dispatch),
    languageSkillActions          : bindActionCreators(languageSkillActions, dispatch),
    politicalOrganizationActions  : bindActionCreators(politicalOrganizationActions, dispatch),
    provinceActions               : bindActionCreators(provinceActions, dispatch),
    religionActions               : bindActionCreators(religionActions, dispatch),
    wardActions                   : bindActionCreators(wardActions, dispatch),
    profileActions                : bindActionCreators(profileActions, dispatch),
    loginAction                   : bindActionCreators(loginAction, dispatch),
    informaticsskillActions       : bindActionCreators(informaticsskillActions, dispatch),
    breadcrumbActions             : bindActionCreators(breadcrumbActions, dispatch),
    
  };
};

export default withNotification(connect(mapStateToProps, mapDispatchToProps)(Profile));