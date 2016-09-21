import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../style/login.css';
import store from '../store/index';
import * as actions from '../actions/login';
class Login extends Component {
    subHandle(e) {
        e.preventDefault();
        let self = this;
        let {actions} = this.props;
        //-------------获取登陆数据------------//
        let username = this.refs.username.value;
        let password = this.refs.password.value;

        //-------------开始登陆------------//
        actions.login({username: username, password: password})
        .then(function () {
            console.log(self.props.state.isLogin)
            if (self.props.state.isLogin) {
            	sessionStorage.username = username;
                console.log
                let pathname = self.props.location.state.nextPathname || '/';
                self.context.router.push({pathname: pathname, state: {username: username}});
            } else {
                alert('---密码错误---')
            }
        })
    }
    render() {
        return (
        	<div>
        		<form>
        			<div className="input_group">
        				<label>username</label>
        				<input ref="username" type="text" name="username" />
        			</div>
        			<div className="input_group">
        				<label>password</label>
        				<input ref="password" type="text" name="password" />
        			</div>
        			<button onClick={this.subHandle.bind(this)}>submit</button>
        		</form>
        	</div>
        )
    }
}
Login.contextTypes = {
    router: React.PropTypes.object
}
function selectState(state) {
    return {
        state: state.Login
    }
}
function bindActionDispatcher(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
module.exports = connect(selectState, bindActionDispatcher)(Login)