import React from 'react';
import { connect } from 'react-redux';
import { getBossById } from '../../actions/bossAction';

class BossItemDetail extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getBossById(id);
    }

    constructor(props) {
        super(props);
        this.state = {
            changedBoss: {
                bossName: "",
                bossDescr: "",
                bossImg: ""
            }
        };
    }

    onInput(e) {
        this.setState({
            changedBoss: {
                ...this.state.changedBoss,
                [e.target.name]: e.target.value
            }
        });
    }
    
    changeBoss(e) {

    }

    render() {
        const { name, description, img } = this.props.boss;

        return (
            <div style={{color: "lime"}}>
                <h3>{ name }</h3>
                <p>{ description }</p>
                <img src={ img } alt="" width="42" height="42" />
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
