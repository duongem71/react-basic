import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'abcjob1', title: 'Development', salary: '500' },
            { id: 'abcjob2', title: 'Tester', salary: '400' },
            { id: 'abcjob3', title: 'Project Manager', salary: '1500' }
        ]
    }



    render() {
        return (
            <>
                <AddComponent />







                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;