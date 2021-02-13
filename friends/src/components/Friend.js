import React from "react"

class Friend extends React.Component {
    render() {
        const { details } = this.props
        return (
            <div className="friend">
                <h5>{details.name}</h5>
                <p>{details.age}</p>
                <p>{details.email}</p>
            </div>
        )
    }
}

export default Friend
