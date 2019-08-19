const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

enzyme.configure({ adapter: new Adapter() })

window._virtualConsole && window._virtualConsole.on('jsdomError', function (error) {
  console.error('jsDomError', error.stack, error.detail);
})
