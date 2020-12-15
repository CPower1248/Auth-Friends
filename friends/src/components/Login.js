import React from "react"
import axios from "axios"

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials, 
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                console.log("RES: ", res)
                localStorage.setItem("token", res.data.payload)
                this.props.history.push("/protected")
                this.setState({credentials: {username: "", password: ""}})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="login">
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="username" onChange={this.handleChange} value={this.state.credentials.username} />
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.credentials.password} />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default Login
