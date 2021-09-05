const factory = artifacts.require("BakerySwapFactory");

module.exports = async function (deployer, _network, addresses) {
  await deployer.deploy(factory, addresses[0]);
};
