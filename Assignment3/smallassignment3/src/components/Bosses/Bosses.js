import React from 'react';
import { connect } from 'react-redux';

class Bosses extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { bosses } = this.props; 

        return (
            <div>
                { bosses.map((boss, index) => <h3 key={index}>{ boss.name }</h3>) }
            </div>
        )
    }
};

const mapStateToProps = ({ bosses }) => {
    return {
      bosses
    };
};

export default connect(mapStateToProps)(Bosses);
