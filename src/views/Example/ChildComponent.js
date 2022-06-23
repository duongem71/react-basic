import React from "react";
class ChildComponent extends React.Component {
    state = {

    }


    render() {
        let { name, age } = this.props;
        return (
            <>
                <div>ChildComponent name and age: {name} - {age}</div>
            </>
        )
    }
}

export default ChildComponent;