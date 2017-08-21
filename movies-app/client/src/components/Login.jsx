import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render(){
        return(
            <div className="form">
                <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state.username, this.state.password)}>
                    <input className="form" type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} />
                    <input className="form" type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
                    <input className="form" type="submit" value='Enter' />
                </form>
            </div>
        )
    }
}

export default Login;

