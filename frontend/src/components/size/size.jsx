import React from 'react';
import { useWindowSize } from '../../utils/useWIndowSize';

function Size() {
    const { width, height } = useWindowSize();

    console.log(width, height);

    return (
        <div className='main_size'></div>
    );
}

export default Size;

