import React from 'react';

const BossItem = (props) => {
    
    const { boss } = props;

    return (
        <a href={"/bosses" + boss.id } style={{textDecoration: "none", color: "black"}}>
            <div>
                <h3>{ boss.name }</h3>
                <p>{ boss.description }</p>
                <img src={ boss.img } alt="" width="42" height="42" />
            </div>
        </a>
    )
};

export default BossItem;
