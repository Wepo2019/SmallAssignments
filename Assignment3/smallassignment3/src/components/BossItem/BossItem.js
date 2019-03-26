import React from 'react';
import { Link } from 'react-router-dom';

const BossItem = (props) => {
    
    const { boss } = props;

    return (
        <Link to={"/bosses/" + boss.id } style={{textDecoration: "none", color: "lime"}}>
            <div>
                <h3>{ boss.name }</h3>
                <p>{ boss.description }</p>
                <img src={ boss.img } alt="" width="42" height="42" />
            </div>
        </Link>
    )
};

export default BossItem;
