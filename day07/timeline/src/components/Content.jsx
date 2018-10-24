import React, { Component } from 'react';
import ActivityItem from './ActivityItem.jsx';
import data from './data.json';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
    }

    componentWillMount() {
        this.setState({activities: data});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.requestRefresh === true) {
            this.setState({loading: true}, this.updateData);
        }
    }

    render() {
        const {activities} = this.props;

        return (
            <div className="content">
                <div className="line"></div>

                {/* Timeline item */}
                {activities.map((activity) => (
                    <ActivityItem activity={activity} />
                ))}

            </div>
        )
    }
}

export default Content;