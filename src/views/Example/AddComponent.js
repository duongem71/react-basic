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
        if (this.state.title === '' || this.state.salary === '') {
            alert('Not NULL')
            return;
        }
        console.log('>>>Check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })

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