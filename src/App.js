import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    email: '',
    password: '',
    eTxt: '',
    pwTxt: '',
    isEmailOK: false,
    isPasswordOK: false,
    btnState: 'disabled'
  }

  valueCheck = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });

    /* 이메일 체크 */
    if( name === 'email' ){
      // value.includes('@') || value == '' ? this.setState({eTxt: '', isEmailOK: true}) : this.setState({eTxt: '@가 없음', isEmailOK: false});

      if( value.includes('@') || value === '' ) {
        this.setState({
          eTxt: '',
          isEmailOK: true
        });
      }else {
        this.setState({
          eTxt: '@가 없음',
          isEmailOK: false
        });
      }
    } /* 패스워드 체크 */
    else if( name === 'password' ) {
      if( value.length < 6 ) {
        this.setState({
          pwTxt: '길이가 6이상이 아님',
          isPasswordOK: false
        });
      }else if( value.toUpperCase() === value || value.toLowerCase() === value ) {
        this.setState({
          pwTxt: '영문 대 소문자를 사용하세요',
          isPasswordOK: false
        });
      }else {
        this.setState({
          pwTxt: '',
          isPasswordOK: true
        });
      }
    }
  }

  handleClick = () => {
    alert("success");
    /* 초기화 */
    this.setState({
      email: '',
      password: '',
      isEmailOK: false,
      isPasswordOK: false
    });
  }

  render(){
    return (
      <div className="App">
        <div>
          <input type="text" name="email" onChange={this.valueCheck} value={this.state.email} placeholder="email을 입력하세요"/>
          <span className="txt">{this.state.eTxt}</span>
        </div>
        <div>
          <input type="password" name="password" onChange={this.valueCheck} value={this.state.password} placeholder="password를 입력하세요"/>
          <span className="txt">{this.state.pwTxt}</span>
        </div>
        {
          /* 버튼조건 ? 활성화 : 비활성화 */
          this.state.isEmailOK && this.state.isPasswordOK ? <button type="button" className="btn_submit" onClick={this.handleClick}>submit</button> : <button type="button" className="btn_submit" disabled>submit</button>
        }
        </div>
    );
  }
}

export default App;
