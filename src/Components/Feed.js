import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    let [blocks, setBlocks] = useState([]);

    const updateBlocks = (color) => {
        const b = blocks.slice();
        b.unshift(color);
        setBlocks(b);
    }
    
    const posts = blocks.map((c) => {return <Block color={c}></Block>});

    return (
        <div>
            <Menu func={updateBlocks}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;