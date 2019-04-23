const TestHelper = artifacts.require('./TestHelper')

module.exports = function (deployer) {
  return deployer.deploy(TestHelper)
}
