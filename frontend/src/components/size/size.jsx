import React from 'react';
import { useWindowSize } from '../../utils/useWIndowSize';

function Size() {
    const { width, height } = useWindowSize();

   

    return (
        <div className='main_size'></div>
    );
}

export default Size;

