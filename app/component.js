const component = function () {
  const element = document.createElement('button');

  element.className = 'pure-button';
  element.innerHTML = 'Hello World';
  element.onclick = () => {
    import('./lazy').then(lazy => {
      element.textContent = lazy.default;
    }).catch(err => {
      console.log(err);
    });
  };

  // using require.ensure
  // element.onclick = () => {
  //   require.ensure([], require => {
  //     element.textContent = require('./lazy').default;
  //   });
  // };

  return element;
};

const treeShakingDemo = function () {
  return 'this should get shaked out';
};

export {
  component,
  treeShakingDemo,
};
