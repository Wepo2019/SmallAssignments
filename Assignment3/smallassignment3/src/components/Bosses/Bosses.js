import React from 'react';
import { connect } from 'react-redux';
import BossItem from '../BossItem/BossItem';

class Bosses extends React.Component {
    render() {
        const { bosses } = this.props; 

        return (
            <div>
                { bosses.map((boss, index) => <BossItem key={"boosItem " + index} boss={boss} />) }
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
