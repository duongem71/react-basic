import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    onChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    onChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    onClickName = (event) => {
        event.preventDefault()
        console.log('>>>Check data input: ', this.state)

    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Title Jobs:</label><br />
                    <input type="text" value={this.state.title} onChange={(event) => this.onChangeTitleJob(event)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => this.onChangeSalary(event)} /><br /><br />
                    <input type="submit" onClick={(event) => this.onClickName(event)} />
                </form>
            </>
        )

    }

}
export default AddComponent;