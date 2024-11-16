require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      { version: "0.5.5" },
      { version: "0.6.6" },
      { version: "0.8.8" },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://bsc-dataseed1.binance.org/",
      },
    },
  },
};