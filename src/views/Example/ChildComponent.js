import React from "react";
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    onClickShow = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs=true' : 'showJobs=false';
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.onClickShow()}>Show</button>
                    </div>

                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>

                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.onClickShow()}>Hide</button>
                        </div>
                    </>
                }

            </>
        )
    }
}

export default ChildComponent;