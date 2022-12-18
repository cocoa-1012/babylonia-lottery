const web3Provider = ["https://data-seed-prebsc-1-s1.binance.org:8545/"];
// const web3Provider = "https://matic-mumbai.chainstacklabs.com";
// console.log(process.env.REACT_APP_NETWORK_ID)
const config = {
  web3Provider: web3Provider,
  networkId: 56,
  contractAddress: {
    babyToken: {
      56: "0xA4E26Bd6DCBa9021DCd3A1159BA52e97CD770b8a",
      137: "0xA4E26Bd6DCBa9021DCd3A1159BA52e97CD770b8a",
      250: "0xA4E26Bd6DCBa9021DCd3A1159BA52e97CD770b8a",
       97: "0xd6531f79fe918f3e1C0CE842D145345fB190e7Bc",
      80001: "0x6936D8bC6ACF141AB724f30Aede87FC2baAcE9A8",
      //  4: "0xc762c8F0daec76F27C0F34e92760899d4291CA47",
      //  43113: "0x0ED192F5D48dA6419f2E0Fd4F40c303708041F15",
    },
    lottery: {
      56: "0xE4CbCD4064B86960719CBF1C0703de3a0DD903F7",
      137: "0x5CBfA7DC337eff11B55F34100454e5eC7d58206f",
      // 250: "0xE4CbCD4064B86960719CBF1C0703de3a0DD903F7",
       97: "0x78A850fD37FD5be30F1806e3FBBC5419A234b494",
      80001: "0xab9B975D161ce81B6a68eDe335D0fe0af3b73F62",
      //  4: "0x2a99174456973153E4d152BBD29FC2882fBAB5EE",
      //  43113: "0xA676C26aB4224Cf2B2AE52562F149c20Ed250258",
    },
    busd: {
      56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
      //  97: "0x4560d63b05C4eC5d4cDF71dF1579251dba80C67B",
      //  80001: "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7",
      //  4: "0x4e2442A6f7AeCE64Ca33d31756B5390860BF973E",
      //  43113: "0x8CC9c8660c1c44D92141f17367885Fd7efF6Daec",
    },
    usdt: {
      56: "0x55d398326f99059ff775485246999027b3197955",
      137: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      // 250: "",
      // 97: "0x4560d63b05C4eC5d4cDF71dF1579251dba80C67B",
      // 80001: "0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832",
      // 4: "0x3B00Ef435fA4FcFF5C209a37d1f3dcff37c705aD",
      // 43113: "0x82DCEC6aa3c8BFE2C96d40d8805EE0dA15708643",
    },
    usdc: {
      56: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      137: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      250: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
      // 97: "0x4560d63b05C4eC5d4cDF71dF1579251dba80C67B",
      // 80001: "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747",
      // 4: "0xeb8f08a975Ab53E34D8a0330E0D34de942C95926",
      // 43113: "0xAF82969ECF299c1f1Bb5e1D12dDAcc9027431160",
    },
    dai: {
      56: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
      137: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      250: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
      // 97: "0x4560d63b05C4eC5d4cDF71dF1579251dba80C67B",
      // 80001: "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747",
      // 4: "0xeb8f08a975Ab53E34D8a0330E0D34de942C95926",
      // 43113: "0xAF82969ECF299c1f1Bb5e1D12dDAcc9027431160",
    },
    bnbPolyFan: {
      56: "0x84b1ef16C1461B7864a611925FbF31736f924a40",
      137: "0x84b1ef16C1461B7864a611925FbF31736f924a40",
      250: "0x84b1ef16C1461B7864a611925FbF31736f924a40",
      // 80001: "0x84b1ef16C1461B7864a611925FbF31736f924a40",
      // 97: "0x84b1ef16C1461B7864a611925FbF31736f924a40",
      // 4002: "0x84b1ef16C1461B7864a611925FbF31736f924a40",
    },
    ICO1M1: {
      56: "0xE4CbCD4064B86960719CBF1C0703de3a0DD903F7",
      137: "0xe35101eca87FEbD106D45Be43e40b2d1690433D1",
      250: "0xE4CbCD4064B86960719CBF1C0703de3a0DD903F7",
      //  97: "0x81EACD0a727C5a8300c29e47D62f5EA387B864e9",
      //  80001: "0x44313063390d7707f7559832c0801321320910cE",
      //  4: "0x2a99174456973153E4d152BBD29FC2882fBAB5EE",
      //  43113: "0xA676C26aB4224Cf2B2AE52562F149c20Ed250258",
    },

    ICO1M2: {
      56: "0x84b1ef16C1461B7864a611925FbF31736f924a40",
      137: "0x84b1ef16C1461B7864a611925FbF31736f924a40",
      250: "0x84b1ef16C1461B7864a611925FbF31736f924a40",
      // 80001: "0x84b1ef16C1461B7864a611925FbF31736f924a40",
      // 97: "0x84b1ef16C1461B7864a611925FbF31736f924a40",
      // 4002: "0x84b1ef16C1461B7864a611925FbF31736f924a40",
    },
  },
};

export default config;
