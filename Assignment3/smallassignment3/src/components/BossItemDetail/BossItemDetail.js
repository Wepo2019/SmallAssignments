import React from 'react';
import { connect } from 'react-redux';
import { getBossById } from '../../actions/bossAction';

class BossItemDetail extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getBossById(id);
    }

    render() {
        const { name, description, img } = this.props.boss;

        return (
            <div style={{color: "lime"}}>
                <h2>{ name }</h2>
                <p>{ description }</p>
                <img src={ img } alt="" width="126" height="126" />
            </div>
        )
    }
};

const mapStateToProps = ({ boss }) => {
    return {
      boss
    };
};

export default connect(mapStateToProps, { getBossById })(BossItemDetail);
