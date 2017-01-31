import 'react';
import 'purecss';
import './main.css';
import {component} from './component';
// import {treeShakingDemo} from './component';

let demoComponent = component();
// let demotreeShaking = treeShakingDemo();

document.body.appendChild(demoComponent);
// document.body.appendChild(demotreeShaking);

if(module.hot) {
  module.hot.accept('./component', () => {
    const nextComponent = require('./component').default();

    document.body.replaceChild(nextComponent, demoComponent);
    demoComponent = nextComponent;
  });
}
