import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { bosses } = this.props; 

        return (
            <div>
                { bosses.map((boss, index) => <p key={index}>{boss.name}</p>) }
            </div>
        )
    }
};

const mapStateToProps = ({ bosses }) => {
    return {
      bosses
    };
};

export default connect(mapStateToProps)(Home);
