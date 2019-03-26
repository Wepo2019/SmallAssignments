import React from 'react';
import { connect } from 'react-redux';
import BossItem from '../BossItem/BossItem';
import { postNewBoss } from '../../actions/bossAction';

class Bosses extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            newBoss: {
                newBossName: "",
                newBossDescr: "",
                newBossImg: ""
            },
            errors: {
                newBossNameError: "",
                newBossDescrError: "",
                newBossImgError: ""
            }
        }
    }

    createBoss(e) {
        e.preventDefault();
        if(this.validate()) {
            const { newBoss } = this.state
            this.props.postNewBoss(
                { 
                    name: newBoss.newBossName, 
                    description: newBoss.newBossDescr, 
                    img: newBoss.newBossImg 
                }
            );
        }
    }

    onInput(e) {
        this.setState({
            newBoss: {
                ...this.state.newBoss,
                [e.target.name]: e.target.value
            }
        });
    }   

    validate() {
        const { newBossName, newBossDescr, newBossImg } = this.state.newBoss;
        const errors = {};
        if(newBossName === '') { errors.newBossNameError = 'You need to enter a name!'; }
        if(newBossDescr === '') { errors.newBossDescrError = 'You need to enter a description!'; }
        if(newBossImg === '') { errors.newBossImgError = 'You need to enter an image!'; }
        
        if(Object.keys(errors).length > 0) {
            this.setState({...this.state.errors, errors});
            return false;
        }
        return true;
    };

    render() {
        const { bosses } = this.props; 

        return (
            <div>
                <div>
                    <p>Create a boss!</p>
                    <form onClick={ e => this.createBoss(e) }>
                        <input type="text" name="newBossName" id="newBossName" value={this.state.newBoss.newBossName} onChange={ e => this.onInput(e) } placeholder ="Enter a name . . ."/>
                        <input type="text" name="newBossDescr" id="newBossDescr" value={this.state.newBoss.newBossDescr} onChange={ e => this.onInput(e) } placeholder ="Enter a description . . ."/>
                        <input type="text" name="newBossImg" id="newBossImg" value={this.state.newBoss.newBossImg} onChange={ e => this.onInput(e) } placeholder ="Enter an image . . ."/>
                        <input type="submit" value ="submit" />
                    </form>
                </div>
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

export default connect(mapStateToProps, { postNewBoss })(Bosses);
