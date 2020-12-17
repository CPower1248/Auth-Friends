import React from "react"
import axiosWithAuth from "../utils/axiosWithAuth"
import { Link } from "react-router-dom"
import PrivateRoute from "../components/PrivateRoute"

import Friend from "./Friend"
import AddFriend from "./AddFriend"

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        axiosWithAuth().get("/friends")
            .then(res => {
                this.setState({friends: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleAdd = newFriend => {
        this.setState({
            friends: [...this.state.friends, newFriend]
        })
    }

    render() {
        return (
            <div className="friendslist">
                <h3>Friends List</h3>
                {/* <Link to="/add-friend">Add Friend</Link>
                <PrivateRoute path="/add-friend" component={AddFriend} /> */}
                <AddFriend handleAdd={this.handleAdd} />
                {this.state.friends.map(item => {
                    return <Friend details={item} key={item.id} />
                })}
            </div>
        )
    }
    
}

export default FriendsList
