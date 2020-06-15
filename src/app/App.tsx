import * as React from 'react';
import * as ReactDOM from 'react-dom';
import World from './components/world/world';
declare let module: any

ReactDOM.render(<World text="Hello" count={0} />,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}