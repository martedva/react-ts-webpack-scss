import * as React from 'react';

import './world.scss'

interface WorldProps {
    text: string,
    count: number
}

const World: React.FC<WorldProps> = ({text, count}) => {
    return (
        <div>
            <p className='world'>{text}: {count}</p>
        </div>
    );
}

export default World