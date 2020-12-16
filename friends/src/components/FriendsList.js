import React from "react"
import axiosWithAuth from "../utils/axiosWithAuth"

import Friend from "./Friend"

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

    render() {
        return (
            <div className="friendslist">
                <h3>Friends List</h3>
                {this.state.friends.map(item => {
                    return <Friend details={item} key={item.id} />
                })}
            </div>
        )
    }
    
}

export default FriendsList
