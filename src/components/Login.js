import React, { Component } from 'react';
export default class Login extends Component
{
  render() {
    return (
    	<div>
    		<form>
    			<div className="input_group">
    				<label>username</label>
    				<input type="text" name="username" />
    			</div>
    			<div class="input_group">
    				<label>password</label>
    				<input type="text" name="password" />
    			</div>
    			<button>submit</button>
    		</form>
    	</div>
    )
  }
}

module.exports = Login