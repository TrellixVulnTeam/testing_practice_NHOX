exports.config =
{
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./build/spec.js'],
  // jasmineNodeOpts:
  // {
  //   showColors: true,
  // },
  // multiCapabilities:
  // [
  //   {
  //     browserName: 'firefox'
  //   },
  //   {
  //     browserName: 'chrome'
  //   }
  // ],

}
