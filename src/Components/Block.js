import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {
    const blk = {
        backgroundColor: props.color,
        // width: '400px',
        // height: '400px',
        // margin: 'auto',
    };

    return (
        // ignore this data-testid, it's purely for testing :)
        <div data-testid='main-component'>
            {/* You'll notice pre-assigned class names 'post' and 'caption', 
            we took care of the basic block styling! 
            If curious, check out the css in Styles/Block.css */}
            {/* Refer to hint if stuck on how to color the posts */}
            <div className="post" style={blk}></div>
            <div className="caption">{props.color}</div>
        </div>
    );
}

export default Block;