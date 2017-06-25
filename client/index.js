import React from 'react';
import ReactDOM from 'react-dom';
import {FlipCounter} from '../components';

let target = document.getElementById('root');
ReactDOM.render(<div className='container'><FlipCounter value={20754}/></div>, target);
