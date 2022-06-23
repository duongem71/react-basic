import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }
    onChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    onChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    onClickName = (event) => {
        event.preventDefault()
        console.log('>>>Check :', this.state)
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.onChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.onChangeLastName(event)} /><br /><br />
                    <input type="submit" onClick={(event) => this.onClickName(event)} />
                </form>
                <ChildComponent
                    name={'Duong Loi'}
                    age={'23'}
                />
            </>
        )
    }
}

export default MyComponent;