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
                changedBossName: "",
                changedBossDescr: "",
                changedBossImg: ""
            },
            errors: {
                changedBossNameError: "",
                changedBossDescrError: "",
                changedBossImgError: ""
            }
        }
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
        e.preventDefault();
    }

    deleteBoss(e) {
        e.preventDefault();
    }

    render() {
        const { name, description, img } = this.props.boss;

        return (
            <>
            <div style={{color: "lime"}}>
                <h3>{ name }</h3>
                <p>{ description }</p>
                <img src={ img } alt="" width="90" height="90" />
            </div>
            <div style={{color: "lime"}}>
                <h4>Edit this boss:</h4>
                <form>
                    <input type="text" name="changedBossName" id="changedBossName" value={ this.state.changedBoss.changedBossName } onChange={ e => this.onInput(e) } placeholder ={ name } />
                    <br/>
                    <textarea rows="10" cols="100" className="text-area" name="changedBossDescr" id="changedBossDescr" value={ this.state.changedBoss.changedBossDescr } onChange={ e => this.onInput(e) } placeholder ={ description }/>
                    <br/>
                    <input type="text" name="changedBossImg" id="changedBossImg" value={ this.state.changedBoss.changedBossImg } onChange={ e => this.onInput(e) } placeholder ={ img }/>
                    <br/>
                    <input type="submit" className="green-button" value ="submit" onClick={ e => this.changeBoss(e) } />
                </form>
            </div>
            <div style={{color: "red"}}>
                    <input type="submit" className="red-button" value="DELETE" onClick={ e => this.deleteBoss(e) } />
            </div>
            </>
        )
    }
};

const mapStateToProps = ({ boss }) => {
    return {
      boss
    };
};

export default connect(mapStateToProps, { getBossById })(BossItemDetail);
