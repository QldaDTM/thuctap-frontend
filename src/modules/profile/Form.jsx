import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { validate, validateForm } from './../../utils/validate';

class Form extends Component {
    _lastNameInput              = null;
    _firstNameInput             = null;
    _sexInput                   = null;
    _phonesInput                = null;
    _addressStreetInput         = null;
    _addressLodgeInput          = null;
    _dateOfBirthInput           = null;
    _monthOfBirthInput          = null;
    _placeOfBirthInput          = null;
    _yearOfBirthInput           = null;
    _idNumberInput              = null;
    _idDateOfIssueInput         = null;
    _idIssuedByInput            = null;
    _informaticsskillIdInput    = null;
    _languageskillInput         = null;
    _religionIdInput            = null;
    _countryIdInput             = null;
    _addressProvinceIdInput     = null;
    _addressDistrictIdInput     = null;

    _nameFatherInput            = null;
    _YOBFatherInput             = null;
    _phoneFatherInput           = null;
    _countryFatherInput         = null;
    _JobAddressFatherInput      = null;
    _jobFatherInput             = null;
    _addressFatherInput         = null;
    _religionFatherInput        = null;
    _ethnicgroupFatherInput     = null;

    _nameMotherInput            = null;
    _YOBMotherInput             = null;
    _phoneMotherInput           = null;
    _countryMotherInput         = null;
    _JobAddressMotherInput      = null;
    _jobMotherInput             = null;
    _addressMotherInput         = null;
    _religionMotherInput        = null;
    _ethnicgroupMotherInput     = null;
    
    _formSubmit                 = null;
    
    onChange = (e) => {
        validate(e);
    }

    onSubmit = (e) =>{
        e.preventDefault();
        
        let lastName            = (this._lastNameInput != null) ? this._lastNameInput.value : null;
        let firstName           = (this._firstNameInput != null) ? this._firstNameInput.value : null;
        let sex                 = (this._sexInput != null) ? this._sexInput.value : null;
        let phones              = (this._phonesInput != null) ? [this._phonesInput.value] : [];
        let addressStreet       = (this._addressStreetInput != null) ? this._addressStreetInput.value : null;
        let addressLodge        = (this._addressLodgeInput != null) ? this._addressLodgeInput.value : null;
        let dateOfBirth         = (this._dateOfBirthInput != null) ? this._dateOfBirthInput.value : null;
        let monthOfBirth        = (this._monthOfBirthInput != null) ? this._monthOfBirthInput.value : null;
        let yearOfBirth         = (this._yearOfBirthInput != null) ? this._yearOfBirthInput.value : null;
        let placeOfBirth        = (this._placeOfBirthInput != null) ? this._placeOfBirthInput.value : null;
        let id_number           = (this._idNumberInput != null) ? this._idNumberInput.value : null;
        let id_dateOfIssue      = (this._idDateOfIssueInput != null) ? this._idDateOfIssueInput.value : null;
        let id_issuedBy         = (this._idIssuedByInput != null) ? this._idIssuedByInput.value : null;
        let languageskill       = (this._languageskillInput != null) ? [{id: this._languageskillInput.value}] : null;
        let informaticsskillId  = (this._informaticsskillIdInput != null) ? this._informaticsskillIdInput.value : null;
        let religionId          = (this._religionIdInput != null) ? this._religionIdInput.value : null;
        let countryId           = (this._countryIdInput != null) ? this._countryIdInput.value : null;
        let addressProvinceId   = (this._addressProvinceIdInput != null) ? this._addressProvinceIdInput.value : null;
        let addressDistrictId   = (this._addressDistrictIdInput != null) ? this._addressDistrictIdInput.value : null;
        
        let nameFather          = (this._nameFatherInput != null) ? this._nameFatherInput.value : null;
        let YOBFather           = (this._YOBFatherInput != null) ? this._YOBFatherInput.value : null;
        let phoneFather         = (this._phoneFatherInput != null) ? this._phoneFatherInput.value : null;
        let countryFather       = (this._countryFatherInput != null) ? this._countryFatherInput.value : null;
        let JobAddressFather    = (this._JobAddressFatherInput != null) ? this._JobAddressFatherInput.value : null;
        let jobFather           = (this._jobFatherInput != null) ? this._jobFatherInput.value : null;
        let addressFather    = (this._addressFatherInput != null) ? this._addressFatherInput.value : null;
        let religionFather      = (this._religionFatherInput != null) ? this._religionFatherInput.value : null;
        let ethnicgroupFather   = (this._ethnicgroupFatherInput != null) ? this._ethnicgroupFatherInput.value : null;

        let nameMother          = (this._nameMotherInput != null) ? this._nameMotherInput.value : null;
        let YOBMother           = (this._YOBMotherInput != null) ? this._YOBMotherInput.value : null;
        let phoneMother         = (this._phoneMotherInput != null) ? this._phoneMotherInput.value : null;
        let countryMother       = (this._countryMotherInput != null) ? this._countryMotherInput.value : null;
        let JobAddressMother    = (this._JobAddressMotherInput != null) ? this._JobAddressMotherInput.value : null;
        let jobMother           = (this._jobMotherInput != null) ? this._jobMotherInput.value : null;
        let addressMother       = (this._addressMotherInput != null) ? this._addressMotherInput.value : null;
        let religionMother      = (this._religionMotherInput != null) ? this._religionMotherInput.value : null;
        let ethnicgroupMother   = (this._ethnicgroupMotherInput != null) ? this._ethnicgroupMotherInput.value : null;

        let data = -1;
        // let valid = validateForm(this._formSubmit,
        //     [
        //         {id: 'lastName', rule: 'str:5:50'}
        //     ]
        // );

        let valid = validateForm(this._formSubmit);
        if(valid){
            data = {
                addressDistrictId,
                addressProvinceId,
                countryId,
                religionId,
                informaticsskillId,
                languageskill,
                id_issuedBy,
                id_dateOfIssue,
                id_number,
                placeOfBirth,
                yearOfBirth,
                monthOfBirth,
                dateOfBirth,
                addressLodge,
                addressStreet,
                phones,
                sex,
                firstName,
                lastName,
                fullName : lastName + ' ' + firstName,

                nameFather,
                YOBFather,
                phoneFather,
                countryFather,
                JobAddressFather,
                jobFather,
                addressFather,
                religionFather,
                ethnicgroupFather,

                nameMother,
                YOBMother,
                phoneMother,
                countryMother,
                JobAddressMother,
                jobMother,
                addressMother,
                religionMother,
                ethnicgroupMother

            }
        }
        if(this.props.onSubmit != null) this.props.onSubmit(data);

    }

    render() {
        let { countries, districts, ethnicGroups,
            languageSkills, politicalOrganizations, provinces, religions, wards, profile, informaticsskills } = this.props;
            
        return (
        <section className="content">
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={ this.onSubmit } ref={  e => this._formSubmit = e} >
                        <div className="box">
                            <div className="box-footer">
                                <Link to="/" className="btn btn-default">Back to home</Link>
                                <button type="submit" className="btn btn-success btn-flat pull-right">Cập Nhật</button>
                            </div>
                        </div>

                        <div className="box box-primary">

                            <div className="box-header with-border">
                                <h3 className="box-title">Thông Tin Cá Nhân</h3>
                            </div>

                            <div className="form-horizontal">
                                <div className="box-body">

                                    <div className="form-group col-md-12">
                                        <label htmlFor="point">Mã Số Sinh Viên</label>
                                        <input  form-valid="str:3:20" disabled defaultValue={profile.studentId} className="form-control"  placeholder="Mã Số Sinh Viên" />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="lastName">Họ Lót</label>
                                        <input id="lastName" onChange={ () => this.onChange(this._lastNameInput ) } form-valid="str:3:50" ref={ e => this._lastNameInput = e} defaultValue={profile.lastName} className="form-control"  placeholder="Nhập Họ Lót" />
                                    </div>
                                    <div className="form-group  col-md-6">
                                        <label htmlFor="point">Tên</label>
                                        <input onChange={ () => this.onChange(this._firstNameInput ) } form-valid="str:3:50" ref={ e => this._firstNameInput = e}  defaultValue={profile.firstName} className="form-control"   placeholder="Nhập Tên" />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="point">Giới Tính</label>
                                        <select onChange={ () => this.onChange(this._sexInput ) } form-valid="int:0:1" ref={ e => this._sexInput = e}  defaultValue={profile.sex} className="form-control">
                                            <option value="1">Nam</option>
                                            <option value="0">Nử</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="point">Số Điện Thoại</label>
                                        <input onChange={ () => this.onChange(this._phonesInput ) } form-valid="base:^([\d]{7,15})?$" ref={ e => this._phonesInput = e}  defaultValue={profile.phones[0]} className="form-control"   placeholder="Nhập Số Điện Thoại" />
                                    </div>

                                    <div className="form-group  col-md-6">
                                        <label htmlFor="point">Địa Chỉ</label>
                                        <input form-valid="str:0:200" onChange={ () => this.onChange(this._addressStreetInput ) } ref={ e => this._addressStreetInput = e}  defaultValue={profile.addressStreet} className="form-control"   placeholder="Nơi Sinh" />
                                    </div>

                                    <div className="form-group  col-md-6">
                                        <label htmlFor="point">Địa chỉ tạm trú</label>
                                        <input form-valid="str:0:200" onChange={ () => this.onChange(this._addressLodgeInput ) } ref={ e => this._addressLodgeInput = e}  defaultValue={profile.addressLodge} className="form-control"   placeholder="Nơi Sinh" />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label htmlFor="point">Ngày Sinh</label>
                                        
                                        <select form-valid="int:0:31" onChange={ () => this.onChange(this._dateOfBirthInput ) } ref={ e => this._dateOfBirthInput = e} defaultValue={profile.dateOfBirth} className="form-control">
                                            <option value="0">-- Ngày Sinh --</option>
                                            {[...Array(31)].map( (e, i) => {
                                                let num = i + 1;
                                                return (<option key={i} value={num}>Ngày {num}</option>)
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group  col-md-4">
                                        <label htmlFor="point">Tháng Sinh</label>
                                        <select form-valid="int:0:12" onChange={ () => this.onChange(this._monthOfBirthInput ) } ref={ e => this._monthOfBirthInput = e}  defaultValue={profile.monthOfBirth} className="form-control">
                                            <option value="0">-- Tháng Sinh --</option>
                                            {[...Array(12)].map( (e, i) => {
                                                let num = i + 1;
                                                return (<option key={i} value={num}>Tháng {num}</option>)
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group  col-md-4">
                                        <label htmlFor="point">Năm Sinh</label>
                                        <input form-valid="base:^([\d]{4})?$" onChange={ () => this.onChange(this._yearOfBirthInput ) } ref={ e => this._yearOfBirthInput = e}  defaultValue={profile.yearOfBirth} className="form-control"   placeholder="Năm Sinh" />
                                    </div>
                                    <div className="form-group  col-md-12">
                                        <label htmlFor="point">Nơi Sinh</label>
                                        <input form-valid="str:0:200" onChange={ () => this.onChange(this._placeOfBirthInput ) } ref={ e => this._placeOfBirthInput = e}  defaultValue={profile.placeOfBirth} className="form-control"   placeholder="Nơi Sinh" />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label htmlFor="point">Số CMND</label>
                                        <input form-valid="base:^([\d]{9,12})?$" onChange={ () => this.onChange(this._idNumberInput ) } ref={ e => this._idNumberInput = e}  defaultValue={profile.id_number} className="form-control"   placeholder="Nhập Số CMND" />
                                    </div>
                                    <div className="form-group  col-md-4">
                                        <label htmlFor="point">Ngày Cấp</label>
                                        <input form-valid="base:^([\d]{2}\/[\d]{2}\/[\d]{4})?$" onChange={ () => this.onChange(this._idDateOfIssueInput ) } ref={ e => this._idDateOfIssueInput = e}  defaultValue={profile.id_dateOfIssue}  data-inputmask="'alias': 'dd/mm/yyyy'" data-mask="data" className="form-control"  placeholder="Nhập Ngày Cấp" />
                                    </div>
                                    <div className="form-group  col-md-4">
                                        <label htmlFor="point">Nơi Cấp</label>
                                        <input form-valid="str:0:200" onChange={ () => this.onChange(this._idIssuedByInput ) } ref={ e => this._idIssuedByInput = e}  defaultValue={profile.id_issuedBy} className="form-control"   placeholder="Nơi Cấp" />
                                    </div>

                                    <hr style={{clear: 'both'}} />

                                    <div className="form-group  col-md-4">
                                        <label htmlFor="point">Trình độ ngoại ngữ</label>
                                        <select form-valid="str:0:10" defaultValue={profile.languageskill[0].id} onChange={ () => this.onChange(this._languageskillInput ) } ref={ e => this._languageskillInput = e}  defaultValue={profile.languageskill[0].id} className="form-control">
                                            <option value="0">-- Trình độ ngoại ngữ --</option>
                                            { languageSkills.ordered.map( (e, i) => {
                                                return (<option  key={i} value={e}>{languageSkills.data[e].name}</option>);
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group  col-md-4">
                                        <label htmlFor="point">Trình độ tin học</label>
                                        <select form-valid="str:0:10" onChange={ () => this.onChange(this._informaticsskillIdInput ) } ref={ e => this._informaticsskillIdInput = e}  defaultValue={profile.informaticsskillId} className="form-control">
                                            <option value="0">-- Trình độ tin học --</option>
                                            { informaticsskills.ordered.map( (e, i) => {
                                                return (<option key={i} value={e}>{informaticsskills.data[e].name}</option>);
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group  col-md-4">
                                        <label htmlFor="point">Tôn giáo</label>
                                        <select form-valid="str:0:10" onChange={ () => this.onChange(this._religionIdInput ) } ref={ e => this._religionIdInput = e} id={profile.religionId} defaultValue={2} className="form-control">
                                            
                                            { religions.ordered.map( (e, i) => {
                                                // console.log();
                                                return (<option key={i+1} value={i}>{religions.data[e].name}</option>);
                                            })}
                                            <option value="0" key={0}>-- Tôn Giáo --</option>
                                            <option value="-1" key={-1}>-- Tôn lành --</option>
                                        </select>
                                    </div>


                                    <div className="form-group  col-md-4">
                                        <label htmlFor="point">Quốc Gia</label>
                                        <select form-valid="str:0:10" onChange={ () => this.onChange(this._countryIdInput ) } ref={ e => this._countryIdInput = e}  defaultValue={profile.countryId} className="form-control">
                                            <option value="0">-- Quốc Gia --</option>
                                            { countries.ordered.map( (e, i) => {
                                                return (<option key={i} value={e}>{countries.data[e].name}</option>);
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group  col-md-4">
                                        <label htmlFor="point">Tỉnh/Thành Phố</label>
                                        <select form-valid="str:0:10" onChange={ () => this.onChange(this._addressProvinceIdInput ) } ref={ e => this._addressProvinceIdInput = e}  defaultValue={profile.addressProvinceId} className="form-control">
                                            <option value="0">-- Tỉnh/Thành Phố --</option>
                                            { provinces.ordered.map( (e, i) => {
                                                return (<option key={i} value={e}>{provinces.data[e].name}</option>);
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group  col-md-4">
                                        <label htmlFor="point">Quận/Huyện</label>
                                        <select form-valid="str:0:10" onChange={ () => this.onChange(this._addressDistrictIdInput ) } ref={ e => this._addressDistrictIdInput = e}  defaultValue={profile.addressDistrictId} className="form-control">
                                            <option value="0">-- Quận/Huyện --</option>
                                            { districts.ordered.map( (e, i) => {
                                                return (<option key={i} value={e}>{districts.data[e].name}</option>);
                                            })}
                                        </select>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>

                        <div className="box box-primary">

                        <div className="box-header with-border">
                            <h3 className="box-title">Thông Tin Cha (Ba)</h3>
                        </div>

                        <div className="form-horizontal">
                            <div className="box-body">

                                <div className="form-group  col-md-4">
                                    <label htmlFor="point">Họ và Tên cha</label>
                                    <input form-valid="str:0:100" onChange={ () => this.onChange(this._nameFatherInput ) } ref={ e => this._nameFatherInput = e} defaultValue={profile.nameFather} className="form-control"   placeholder="Nhập Họ và Tên cha" />
                                </div>
                                <div className="form-group  col-md-4">
                                    <label htmlFor="point">Năm sinh của cha</label>
                                    <input form-valid="base:^([\d]{4})?$" onChange={ () => this.onChange(this._YOBFatherInput ) } ref={ e => this._YOBFatherInput = e} defaultValue={(profile.YOBFather > 0) ? profile.YOBFather : ""} className="form-control"   placeholder="Nhập Năm sinh của cha" />
                                </div>
                                <div className="form-group  col-md-4">
                                    <label htmlFor="point">Số điện thoại của cha	</label>
                                    <input form-valid="base:^([\d]{7,15})?$" onChange={ () => this.onChange(this._phoneFatherInput ) } ref={ e => this._phoneFatherInput = e} defaultValue={profile.phoneFather} className="form-control"   placeholder="Nhập Số điện thoại của cha" />
                                </div>
                                
                                <div className="form-group  col-md-6">
                                    <label htmlFor="point">Quê quán của cha</label>
                                    <select form-valid="str:0:10" onChange={ () => this.onChange(this._countryFatherInput ) } ref={ e => this._countryFatherInput = e} defaultValue={profile.countryFather} className="form-control">
                                        <option value="0">-- Quê Quán --</option>
                                        { countries.ordered.map( (e, i) => {
                                            return (<option key={i} value={e}>{countries.data[e].name}</option>);
                                        })}
                                    </select>
                                </div>

                                <div className="form-group  col-md-6">
                                    <label htmlFor="point">Địa chỉ nơi ở của cha	</label>
                                    <input form-valid="str:0:200" onChange={ () => this.onChange(this._addressFatherInput ) } ref={ e => this._addressFatherInput = e} defaultValue={profile.addressFather} className="form-control"   placeholder="Nhập Địa chỉ nơi ở của cha	" />
                                </div>

                                
                                <div className="form-group  col-md-6">
                                    <label htmlFor="point">Công việc của cha</label>
                                    <input form-valid="str:0:200" onChange={ () => this.onChange(this._jobFatherInput ) } ref={ e => this._jobFatherInput = e} defaultValue={profile.jobFather} className="form-control"   placeholder="Nhập Công việc của cha" />
                                </div>
                                <div className="form-group  col-md-6">
                                    <label htmlFor="point">Địa chỉ nơi làm việc của cha</label>
                                    <input form-valid="str:0:200" onChange={ () => this.onChange(this._JobAddressFatherInput ) } ref={ e => this._JobAddressFatherInput = e} defaultValue={profile.JobAddressFather} className="form-control"   placeholder="Nhập Địa chỉ nơi làm việc của cha" />
                                </div>

                                <div className="form-group  col-md-6">
                                    <label htmlFor="point">Tôn giáo của cha</label>
                                    <select form-valid="str:0:10" onChange={ () => this.onChange(this._religionFatherInput ) } ref={ e => this._religionFatherInput = e} defaultValue={profile.religionFather} className="form-control">
                                        <option value="0">-- Tôn Giáo --</option>
                                        { religions.ordered.map( (e, i) => {
                                            return (<option key={i} value={e}>{religions.data[e].name}</option>);
                                        })}
                                    </select>
                                </div>
                                <div className="form-group  col-md-6">
                                    <label htmlFor="point">Dân tộc của cha</label>
                                    <select form-valid="str:0:10" onChange={ () => this.onChange(this._ethnicgroupFatherInput ) }  ref={ e => this._ethnicgroupFatherInput = e} defaultValue={profile.ethnicgroupFather} className="form-control">
                                        <option value="0">-- Dân Tộc --</option>
                                        { ethnicGroups.ordered.map( (e, i) => {
                                            return (<option key={i} value={e}>{ethnicGroups.data[e].name}</option>);
                                        })}
                                    </select>
                                </div>

                            </div>
                        </div>
                        </div>

                        <div className="box box-primary">

                        <div className="box-header with-border">
                            <h3 className="box-title">Thông Tin Mẹ</h3>
                            </div>  

                            <div className="form-horizontal">
                            <div className="box-body">

                            <div className="form-group  col-md-4">
                                <label htmlFor="point">Họ và Tên mẹ</label>
                                <input form-valid="str:0:100" onChange={ () => this.onChange(this._nameMotherInput ) }  ref={ e => this._nameMotherInput = e} defaultValue={profile.nameMother} className="form-control"   placeholder="Nhập Họ và Tên mẹ" />
                            </div>
                            <div className="form-group  col-md-4">
                                <label htmlFor="point">Năm sinh của mẹ</label>
                                <input form-valid="base:^([\d]{4})?$" onChange={ () => this.onChange(this._YOBMotherInput ) }  ref={ e => this._YOBMotherInput = e} defaultValue={(profile.YOBMother > 0) ? profile.YOBMother : ""} className="form-control"   placeholder="Nhập Năm sinh của mẹ" />
                            </div>
                            <div className="form-group  col-md-4">
                                <label htmlFor="point">Số điện thoại của mẹ	</label>
                                <input form-valid="base:^([\d]{7,15})?$" onChange={ () => this.onChange(this._phoneMotherInput ) } ref={ e => this._phoneMotherInput = e} defaultValue={profile.phoneMother} className="form-control"   placeholder="Nhập Số điện thoại của mẹ" />
                            </div>

                            <div className="form-group  col-md-6">
                                <label htmlFor="point">Quê quán của mẹ</label>
                                <select form-valid="str:0:10" onChange={ () => this.onChange(this._countryMotherInput ) } ref={ e => this._countryMotherInput = e} defaultValue={profile.countryMother} className="form-control">
                                    <option value="0">-- Quê Quán --</option>
                                    { countries.ordered.map( (e, i) => {
                                        return (<option key={i} value={e}>{countries.data[e].name}</option>);
                                    })}
                                </select>
                            </div>

                            <div className="form-group  col-md-6">
                                <label htmlFor="point">Địa chỉ nơi ở của mẹ	</label>
                                <input onChange={ () => this.onChange(this._addressMotherInput ) } form-valid="str:0:200" ref={ e => this._addressMotherInput = e} defaultValue={profile.addressMother} className="form-control"   placeholder="Nhập Địa chỉ nơi ở của mẹ	" />
                            </div>


                            <div className="form-group  col-md-6">
                                <label htmlFor="point">Công việc của mẹ</label>
                                <input form-valid="str:0:200" onChange={ () => this.onChange(this._jobMotherInput ) } ref={ e => this._jobMotherInput = e} defaultValue={profile.jobMother} className="form-control"   placeholder="Nhập Công việc của mẹ" />
                            </div>
                            <div className="form-group  col-md-6">
                                <label htmlFor="point">Địa chỉ nơi làm việc của mẹ</label>
                                <input form-valid="str:0:200" onChange={ () => this.onChange(this._JobAddressMotherInput ) } ref={ e => this._JobAddressMotherInput = e} defaultValue={profile.JobAddressMother} className="form-control"   placeholder="Nhập Địa chỉ nơi làm việc của mẹ" />
                            </div>

                            <div className="form-group  col-md-6">
                                <label htmlFor="point">Tôn giáo của mẹ</label>
                                <select form-valid="str:0:10" onChange={ () => this.onChange(this._religionMotherInput ) } ref={ e => this._religionMotherInput = e} defaultValue={profile.religionMother} className="form-control">
                                    <option key={0} value="0">-- Tôn Giáo --</option>
                                    { religions.ordered.map( (e, i) => {
                                        return (<option key={i+1} value={e}>{religions.data[e].name}</option>);
                                    })}
                                </select>
                            </div>
                            <div className="form-group  col-md-6">
                                <label htmlFor="point">Dân tộc của mẹ</label>
                                <select form-valid="str:0:10" onChange={ () => this.onChange(this._ethnicgroupMotherInput ) } ref={ e => this._ethnicgroupMotherInput = e} defaultValue={profile.ethnicgroupMother} id={profile.ethnicgroupMother} className="form-control">
                                    <option value="0" >-- Dân Tộc --</option>
                                    { ethnicGroups.ordered.map( (e, i) => {
                                        return (<option key={i} value={e}>{ethnicGroups.data[e].name}</option>);
                                    })}
                                </select>
                            </div>

                            </div>
                            </div>
                        </div>

                        
                    </form>
                </div>
            </div>

        </section>
    );
  }
}

export default Form;