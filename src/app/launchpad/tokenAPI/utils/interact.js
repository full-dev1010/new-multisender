// require("dotenv").config();
// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(alchemyKey);

// https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161

import web3 from './web3';
import moment from 'moment';
import { ether } from './ethers';
import { ethers } from "ethers";
import networkList from '../../networks';

const {
  BigNumber,
} = require("@ethersproject/bignumber");

const TenBN = BigNumber.from(10);
const EtherBN = TenBN.pow(BigNumber.from(18));



/**
 * Start for Multisender
 */

const UpgradebleStormSenderABI = require("../abi/UpgradebleStormSender.json");
// const multisenderContractAddress = "0x3580ff56671EbE35560E3DA87afA2CAf52933356";

// 0xC513d7f8D8a1E12F37c2b2594386Eb25F999Bd80 // MEC for rinkeby
// const multisenderContractAddress = "0x95e13f409aa493c1C52218Afe109d05714777F89"; // for rinkeby

// 0x22f455fB3dA9ABaECf1E6A582c0f6589282d7845 // for Ropsten with withdraw.

// 0x3d71eb2f464555E6965e609c81C514627d4c5878 // MEC for bsc
// const multisenderContractAddress = "0x8488Eb9D61e5c8B204706E0d9d8bba86eB82E6c3"; // for bsc
// const multisenderContractAddress = 0x2cEFd6bcbe098B813C55De78c542a181ceb2D894 // for BSC with withdraw function.

// 0xC513d7f8D8a1E12F37c2b2594386Eb25F999Bd80 // MEC for matic
// const multisenderContractAddress = "0x22f455fB3dA9ABaECf1E6A582c0f6589282d7845"; // for matic

// 0xC513d7f8D8a1E12F37c2b2594386Eb25F999Bd80 // MEC for celo
// const multisenderContractAddress = "0x660229c795185a6ccd9d02318dDCeECdbDd52Eb5"; // for celo

// 0x6AdC63316826C55d1579BbE7A75451D0A65F66c3 // MEC for AVAX
// const multisenderContractAddress = "0xF75755a33d07cD3C6CE1e33839D62868c484C74A"; // for AVAX

// 0x22f455fB3dA9ABaECf1E6A582c0f6589282d7845 // MEC for Oasis
// const multisenderContractAddress = "0xC513d7f8D8a1E12F37c2b2594386Eb25F999Bd80"; // for Oasis

const multisenderContractAddressList = [
  // "0x8488Eb9D61e5c8B204706E0d9d8bba86eB82E6c3",
  "0x2cEFd6bcbe098B813C55De78c542a181ceb2D894",
  "0x95e13f409aa493c1C52218Afe109d05714777F89",
  "0x22f455fB3dA9ABaECf1E6A582c0f6589282d7845",
  "0x660229c795185a6ccd9d02318dDCeECdbDd52Eb5",
  "0xF75755a33d07cD3C6CE1e33839D62868c484C74A",
  "0xC513d7f8D8a1E12F37c2b2594386Eb25F999Bd80",
];

// export const MultisenderContract = new web3.eth.Contract(
//   UpgradebleStormSenderABI,
//   multisenderContractAddress
// );

const ApproveABI = ["function approve(address _spender, uint256 _value) public returns (bool success)"];
// let provider = ethers.getDefaultProvider('ropsten')
// let contract = new ethers.Contract(tokenAddress, abi, provider)
// await contract.approve(accountAddress, amount)

// const chainID: number = await web3?.eth.net.getId()!;
export const getNetworkInfoByChainId = (chainID) => {
  return networkList.find((i) => i.chainId === chainID);
}

export const getNetworkListIndex = (chainID) => {
  for(let i = 0; i < networkList.length; i++) if( networkList[i].chainId === chainID ) return i;
  return -1;
}

export const getNetworkChainId = () => {
  if( !web3 ) return 0;
  return web3.currentProvider.chainId;  // hex
  // const chainID = await web3.eth.net.getId(); //dec
  // return chainID;
}

export const switchNetwork = async (networkIndex) => {
  // const networkInfo = getNetworkInfoByChainId(chainId);
  const networkInfo = networkList[networkIndex];
  try {
    await web3.currentProvider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: networkInfo.chainId }],
    });
  } catch (error) {
    if (error.code === 4902) {
      try {
        await web3.currentProvider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: networkInfo.chainId,
              chainName: networkInfo.chainName,
              rpcUrls: [networkInfo.rpcUrls],
              nativeCurrency: {
                name: networkInfo.coinName,
                symbol: networkInfo.symbol,
                decimals: networkInfo.decimals,
              },
              blockExplorerUrls: [networkInfo.blockExplorerUrls],
            },
          ],
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }
}
export const approveTokenAccount = async(
  networkType,
  tokenAddress,
  amount
) => {
  // const contract = new web3.eth.Contract(ApproveABI, tokenAddress);
  // const provider = ethers.getDefaultProvider('ropsten')
  // const provider = new ethers.providers.Web3Provider(window.ethereum/window.web3);

  const multisenderContractAddress = multisenderContractAddressList[networkType];
  const MultisenderContract = new web3.eth.Contract(
    UpgradebleStormSenderABI,
    multisenderContractAddress
  );
  
  // console.log("CGI approve", networkType, tokenAddress, amount);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(tokenAddress, ApproveABI, signer)
  const success = await contract.approve(multisenderContractAddress, amount);
  return success;
}

// address _token,
// address[] calldata _contributors,
// uint256[] calldata _balances,
// uint256 _total,
// address payable _referral

export const multisendToken = async (
  networkType,
  walletAddress, 
  tokenAddress,
  contributors,
  balances,
  totalTokenAmount,
  referralAddress,
  value
  ) => {
  //input error handling
  if (!window.ethereum || walletAddress === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the name on the blockchain.",
    };
  }

  // referralAddress = '0x38d8EaC80539223e2b3c3040347a0DbBbF7E86Ab';
  // value = 0.01;
  //set up transaction parameters

  const multisenderContractAddress = multisenderContractAddressList[networkType];
  const MultisenderContract = new web3.eth.Contract(
    UpgradebleStormSenderABI,
    multisenderContractAddress
  );

  try {
    console.log("CGI", tokenAddress, contributors, balances, totalTokenAmount, referralAddress, walletAddress, value);
    await MultisenderContract.methods.multisendToken(
      tokenAddress,
      contributors,
      balances,
      totalTokenAmount,
      referralAddress
    ).send({
        from: walletAddress,
        value: web3.utils.toWei("" + value, 'ether')
    });
    console.log("CGI success");
    return {
      status: '<span>✅<a target="_blank" href={`https://rinkeby.etherscan.io/tx/${txHash}`}>View the status of your transaction on Etherscan!</a><br/>ℹ️ Once the transaction is verified by the network, the name will be updated automatically.</span>',
    };
  } catch (error) {
    console.log("CGI failed");
    return {
      status: "😥 " + error.message,
    };
  }
};

export const buyVip = async (
  networkType,
  walletAddress, 
  tier,
  valueForBuyVip
  ) => {
  //input error handling
  if (!window.ethereum || walletAddress === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the name on the blockchain.",
    };
  }

  //set up transaction parameters
  const multisenderContractAddress = multisenderContractAddressList[networkType];
  const MultisenderContract = new web3.eth.Contract(
    UpgradebleStormSenderABI,
    multisenderContractAddress
  );
  try {
    await MultisenderContract.methods.buyVip("" + tier).send({
        from: walletAddress,
        value: web3.utils.toWei("" + valueForBuyVip, 'ether')
    });
    return {
      status: '<span>✅<a target="_blank" href={`https://rinkeby.etherscan.io/tx/${txHash}`}>View the status of your transaction on Etherscan!</a><br/>ℹ️ Once the transaction is verified by the network, the name will be updated automatically.</span>',
    };
  } catch (error) {
    return {
      status: "😥 " + error.message,
    };
  }
};










/**
 * End for Multisender
 */

const tokenContractABI = require("../abi/TokenContract.json");
const presaleContractABI = require("../abi/PresaleContract.json");
const contractABI = require("../abi/PresaleFactoryContract.json");

// test1
// const contractAddress = "0x2EbeA8B7c743A5eC77976a1C7E394D7F8B0e848c";
// test2
const contractAddress = "0xfDa5abf3c7e544D23763699Db32C6a9677D3C1f1";
// real1
// const contractAddress = "0xfDa5abf3c7e544D23763699Db32C6a9677D3C1f1";

export const presaleFactoryContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// by CGI
export const createContract = async (contractABI, contractAddress) => {
    const presaleFactoryContract = new web3.eth.Contract(contractABI, contractAddress);
    return presaleFactoryContract;
}

export const getPresaleTotalCount = async() => {
  const [presaleTotalCount] = await Promise.all([
    presaleFactoryContract.methods.getTotalCount().call()
  ]);
  return presaleTotalCount;
}

export const getTokenAndPresaleAddress = async (id) => {
  const [presaleAddress] = await Promise.all([
    presaleFactoryContract.methods.presaleAddress(id).call()
  ]);
  const presaleContract = new web3.eth.Contract(
    presaleContractABI,
    presaleAddress
  );    
  const [tokenAddress] = await Promise.all([
    presaleContract.methods.token().call()
  ]);

  console.log("CGI tokenAddress presaleAddress", tokenAddress, presaleAddress);
  return {
    tokenAddress: tokenAddress,
    presaleAddress: presaleAddress
  };
}



// async function getTokenInfo(presaleFactoryContract) {
export const getTokenInfo = async (id) =>{
    console.log("CGI getTokenInfo start");
    const [tokenAddress] = await Promise.all([
      presaleFactoryContract.methods.tokenAddress(id).call()
    ]);
    console.log("tokenAddress", tokenAddress);
    
    const tokenContract = new web3.eth.Contract(
      tokenContractABI,
      tokenAddress
    );    
    const [
      name, symbol, decimals, logoLink, websiteLink, githubLink, twitterLink, redditLink, telegramLink, projectDescription, provideParticipants
    ] = await Promise.all([
      tokenContract.methods.name().call(),
      tokenContract.methods.symbol().call(),
      tokenContract.methods.decimals().call(),
      tokenContract.methods.logoLink().call(),
      tokenContract.methods.websiteLink().call(),
      tokenContract.methods.githubLink().call(),
      tokenContract.methods.twitterLink().call(),
      tokenContract.methods.redditLink().call(),
      tokenContract.methods.telegramLink().call(),
      tokenContract.methods.projectDescription().call(),
      tokenContract.methods.provideParticipants().call(),
    ]);
    console.log("CGI TokenInfo ");
    return {
      name,
      symbol,
      decimals,
      logoLink,
      websiteLink,
      githubLink,
      twitterLink,
      redditLink,
      telegramLink,
      projectDescription,
      provideParticipants,
    };
    // const [decimals, name, symbol] = await Promise.all([
    //   presaleFactoryContract.methods.decimals().call(),
    // //   presaleFactoryContract.methods.name().call(),
    //   presaleFactoryContract.methods.getName().call(),
    //   presaleFactoryContract.methods.symbol().call(),
    // ]);
    // return { decimals, name, symbol };
}

export const getPresaleInfo = async (id) =>{
  console.log("CGI getPresaleInfo start");
  const [presaleAddress] = await Promise.all([
    presaleFactoryContract.methods.presaleAddress(id).call()
  ]);
  console.log("presaleAddress", presaleAddress);
  
  const presaleContract = new web3.eth.Contract(
    presaleContractABI,
    presaleAddress
  );    
  const [
    rate, hardCap, softCap, maxBuy, minBuy, swapLiquidity, swapListingRate, 
    presaleStartTime, presaleEndTime, liquidityLockedTime, presaleState, presaleBlockTime
  ] = await Promise.all([
    presaleContract.methods.rate().call(),
    presaleContract.methods.cap().call(),
    presaleContract.methods.goal().call(),
    presaleContract.methods.investorMaxBuy().call(),
    presaleContract.methods.investorMinBuy().call(),
    presaleContract.methods.tokenSalePercentage().call(),
    presaleContract.methods.swapListingRate().call(),
    presaleContract.methods.openingTime().call(),
    presaleContract.methods.closingTime().call(),
    presaleContract.methods.releaseTime().call(),
    presaleContract.methods.presaleState().call(),
    presaleContract.methods.getBlockCurrentTime().call()
  ]);

  console.log("CGI PresaleInfo ", presaleBlockTime);
  let blockTime = presaleBlockTime * 1000;
  return {
    rate, hardCap, softCap, maxBuy, minBuy, swapLiquidity, swapListingRate, 
    presaleStartTime, presaleEndTime, liquidityLockedTime, presaleState, blockTime
  };
}




export const getLogoLink = async (presaleFactoryContract, id) =>{
    console.log("CGI getlogoLink start");
    const [logoLink] = await Promise.all([
        presaleFactoryContract.methods.getLogoLinkByID(id).call()
    ]);
    console.log("CGI logoLink ", logoLink);
    return logoLink;
}


export const loadCurrentMessage = async () => {
//   const message = await flockchainContract.methods.message().call();
    const message = '';
    return message;
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: '<span><p>🦊<a target="_blank" href={`https://metamask.io/download.html`}>You must install Metamask, a virtual Ethereum wallet, in your browser.</a></p></span>',
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      console.log("CGI getCurrentWalletConnected ", addressArray);
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: '<span><p>🦊<a target="_blank" href={`https://metamask.io/download.html`}>You must install Metamask, a virtual Ethereum wallet, in your browser.</a></p></span>',
    };
  }
};

export const updateMessage = async (address, message) => {
  //input error handling
  if (!window.ethereum || address === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the message on the blockchain.",
    };
  }

  if (message.trim() === "") {
    return {
      status: "❌ Your message cannot be an empty string.",
    };
  }
  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: presaleFactoryContract.methods.update(message).encodeABI(),
  };

  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      status: '<span>✅<a target="_blank" href={`https://ropsten.etherscan.io/tx/${txHash}`}>View the status of your transaction on Etherscan!</a><br/>ℹ️ Once the transaction is verified by the network, the message will be updated automatically.</span>',
    };
  } catch (error) {
    return {
      status: "😥 " + error.message,
    };
  }
};

export const updateTokenName = async (
    walletAddress, 
    name, 
    symbol, 
    decimals) => {
  //input error handling
  if (!window.ethereum || walletAddress === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the name on the blockchain.",
    };
  }

  if (name.trim() === "") {
    return {
      status: "❌ Your name cannot be an empty string.",
    };
  }
  //set up transaction parameters
  try {
    await presaleFactoryContract.methods.generateCoin(name, symbol, decimals).send({
        from: walletAddress
    });
    // await presaleFactoryContract.methods.setName(name).send({
    //   from: walletAddress,
    // //   value: web3.utils.toWei(value, 'ether'),
    // });
    return {
      status: '<span>✅<a target="_blank" href={`https://ropsten.etherscan.io/tx/${txHash}`}>View the status of your transaction on Etherscan!</a><br/>ℹ️ Once the transaction is verified by the network, the name will be updated automatically.</span>',
    };
  } catch (error) {
    return {
      status: "😥 " + error.message,
    };
  }
};

export const createTokenInfo = async (
    walletAddress, 
    tokenAddress,
    name, 
    symbol, 
    logoLink,
    websiteLink,
    githubLink,
    twitterLink,
    redditLink,
    telegramLink,
    projectDescription,
    provideParticipants,
    presaleRate,
    softCap,
    hardCap,
    minBuy,
    maxBuy,
    swapLiquidity,
    swapListingRate,
    presaleStartTime,
    presaleEndTime,
    liquidityLockedTime
    ) => {
  //input error handling
  if (!window.ethereum || walletAddress === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the name on the blockchain.",
    };
  }

//   if (name.trim() === "") {
//     return {
//       status: "❌ Your name cannot be an empty string.",
//     };
//   }
  
  //set up transaction parameters

  console.log("CGI timing1", presaleStartTime, presaleEndTime, liquidityLockedTime);

  try {
    let presaleStartTimeNumber = "" + moment(new Date(presaleStartTime), 'MM/DD/YYYY, hh:mm A').valueOf();
    let presaleEndTimeNumber = "" + moment(new Date(presaleEndTime), 'MM/DD/YYYY, hh:mm A').valueOf();
    let liquidityLockedTimeNumber = "" + moment(new Date(liquidityLockedTime), 'MM/DD/YYYY, hh:mm A').valueOf();
    // let b = "" + moment(presaleStartTime, 'MM/DD/YYYY, hh:mm A').add(10, "minute").valueOf();
    // let c = "" + moment(presaleStartTime, 'MM/DD/YYYY, hh:mm A').add(1, "months").valueOf();

    // let strSoftCap = ether(parseFloat(softCap)).toString();
    let strSoftCap = ether(softCap).toString();
    let strHardCap = ether(hardCap).toString();
    let strMinBuy = ether(minBuy).toString();
    let strMaxBuy = ether(maxBuy).toString();

    console.log("CGI Cap", strSoftCap, strHardCap, strMinBuy, strMaxBuy);

    let addLinks = [];
    addLinks.push(name);
    addLinks.push(symbol);
    addLinks.push(logoLink);
    addLinks.push(websiteLink);
    addLinks.push(githubLink);
    addLinks.push(twitterLink);
    addLinks.push(redditLink);
    addLinks.push(telegramLink);
    addLinks.push(projectDescription);
    addLinks.push(provideParticipants);
    addLinks.push(presaleRate);
    addLinks.push(strHardCap);
    addLinks.push(strSoftCap);
    addLinks.push(presaleStartTimeNumber);
    addLinks.push(presaleEndTimeNumber);
    addLinks.push(liquidityLockedTimeNumber);
    addLinks.push(strMaxBuy);
    addLinks.push(strMinBuy);
    addLinks.push(swapLiquidity);
    addLinks.push(swapListingRate);
    // let conditionValues = ["10", "10", "10", "10", "10", "10"];


    let wallets = [
        walletAddress,
        walletAddress,
        walletAddress,
        walletAddress
    ];

    console.log("CGI timing", presaleStartTimeNumber, presaleEndTimeNumber, liquidityLockedTimeNumber);
    // let tokenName = "CGI";
    // await presaleFactoryContract.methods.generateCoin(tokenName).send({
    //   from: walletAddress
    // });
    // tokenAddress = "";
    await presaleFactoryContract.methods.generateCoin(
        addLinks,
        tokenAddress,
        wallets
        ).send({
        from: walletAddress,
        value: web3.utils.toWei("0.01", 'ether')
        // value: web3.utils.toWei("1", 'ether')
    });

    // await presaleFactoryContract.methods.setName(name).send({
    //   from: walletAddress,
    // //   value: web3.utils.toWei(value, 'ether'),
    // });
    return {
      status: '<span>✅<a target="_blank" href={`https://ropsten.etherscan.io/tx/${txHash}`}>View the status of your transaction on Etherscan!</a><br/>ℹ️ Once the transaction is verified by the network, the name will be updated automatically.</span>',
    };
  } catch (error) {
      console.log("CGI error is ", error);
    return {
      status: "😥 " + error.message,
    };
  }
};

//  addToWhitelist

export const addToWhitelist = async (
  walletAddress,
  presaleId,
  address
  ) => {
  //input error handling
  if (!window.ethereum || walletAddress === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the name on the blockchain.",
    };
  }

  try {
    const [presaleAddress] = await Promise.all([
      presaleFactoryContract.methods.presaleAddress(presaleId).call()
    ]);
    
    const presaleContract = new web3.eth.Contract(
      presaleContractABI,
      presaleAddress
    );    
  
    await presaleContract.methods.addToWhitelist(address).send({
        from: walletAddress,
        // value: web3.utils.toWei("" + contributeAmount, 'ether')
    });
    return {
      status: '<span>✅<a target="_blank" href={`https://ropsten.etherscan.io/tx/${txHash}`}>View the status of your transaction on Etherscan!</a><br/>ℹ️ Once the transaction is verified by the network, the name will be updated automatically.</span>',
    };
  } catch (error) {
      console.log("CGI error is ", error);
    return {
      status: "😥 " + error.message,
    };
  }
};

//  addManyToWhitelist

export const addManyToWhitelist = async (
  walletAddress,
  presaleId,
  arrayAddress
  ) => {
  //input error handling
  if (!window.ethereum || walletAddress === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the name on the blockchain.",
    };
  }

  try {
    const [presaleAddress] = await Promise.all([
      presaleFactoryContract.methods.presaleAddress(presaleId).call()
    ]);
    
    const presaleContract = new web3.eth.Contract(
      presaleContractABI,
      presaleAddress
    );    
  
    await presaleContract.methods.addManyToWhitelist(arrayAddress).send({
        from: walletAddress,
        // value: web3.utils.toWei("" + contributeAmount, 'ether')
    });
    return {
      status: '<span>✅<a target="_blank" href={`https://ropsten.etherscan.io/tx/${txHash}`}>View the status of your transaction on Etherscan!</a><br/>ℹ️ Once the transaction is verified by the network, the name will be updated automatically.</span>',
    };
  } catch (error) {
      console.log("CGI error is ", error);
    return {
      status: "😥 " + error.message,
    };
  }
};


//  removeFromWhitelist




//  isWhitelisted
export const isWhitelisted = async (presaleId) => {
  const [presaleAddress] = await Promise.all([
    presaleFactoryContract.methods.presaleAddress(presaleId).call()
  ]);
  
  const presaleContract = new web3.eth.Contract(
    presaleContractABI,
    presaleAddress
  );    

  const [value] = await Promise.all([
    presaleContract.methods.isWhitelisted().call()
  ]);

  return value;
}

export const contributeBNB = async (
  walletAddress, 
  presaleId,
  contributeAmount
  ) => {
  //input error handling
  if (!window.ethereum || walletAddress === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the name on the blockchain.",
    };
  }

  try {
    console.log("CGI contributeAmount", contributeAmount, presaleId);
    const [presaleAddress] = await Promise.all([
      presaleFactoryContract.methods.presaleAddress(presaleId).call()
    ]);
    
    const presaleContract = new web3.eth.Contract(
      presaleContractABI,
      presaleAddress
    );    
  
    await presaleContract.methods.buyTokens(walletAddress).send({
        from: walletAddress,
        value: web3.utils.toWei("" + contributeAmount, 'ether')
    });
    return {
      status: '<span>✅<a target="_blank" href={`https://ropsten.etherscan.io/tx/${txHash}`}>View the status of your transaction on Etherscan!</a><br/>ℹ️ Once the transaction is verified by the network, the name will be updated automatically.</span>',
    };
  } catch (error) {
      console.log("CGI error is ", error);
    return {
      status: "😥 " + error.message,
    };
  }
};

export const getPresaledTotalAmount = async (presaleId) => {
  const [presaleAddress] = await Promise.all([
    presaleFactoryContract.methods.presaleAddress(presaleId).call()
  ]);
  
  const presaleContract = new web3.eth.Contract(
    presaleContractABI,
    presaleAddress
  );    

  const [weiRaised] = await Promise.all([
    presaleContract.methods.weiRaised().call()
  ]);

  return weiRaised;
}

export const getPresaleIdByWalletAddress = async (walletAddress) => {
  const [presaleId] = await Promise.all([
    presaleFactoryContract.methods.getPresaleIdByWallet(walletAddress).call()
  ]);
  
  return presaleId;
}




export const getTimeWillStartAndEnd = async (presaleId) => {
  const [presaleAddress] = await Promise.all([
    presaleFactoryContract.methods.presaleAddress(presaleId).call()
  ]);
  
  const presaleContract = new web3.eth.Contract(
    presaleContractABI,
    presaleAddress
  );    

  const [openingTime, closingTime, blockTime] = await Promise.all([
    presaleContract.methods.openingTime().call(),
    presaleContract.methods.closingTime().call(),
    presaleContract.methods.getBlockCurrentTime().call()
  ]);
  
  // console.log("CGI getRemainTime", openingTime, closingTime, blockTime);
  return {
    remainStartTime: openingTime - blockTime * 1000,
    remainEndTime: closingTime - blockTime * 1000
  };
}


export const setTokenAdditionalInformationByID = async (
    id,
    walletAddress, 
    logoLink,
    websiteLink,
    githubLink,
    twitterLink,
    redditLink,
    telegramLink,
    projectDescription,
    provideParticipants
    ) => {
  //input error handling
  if (!window.ethereum || walletAddress === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the name on the blockchain.",
    };
  }

  //set up transaction parameters
  try {
    let addLinks = [];
    addLinks.push(logoLink);
    addLinks.push(websiteLink);
    addLinks.push(githubLink);
    addLinks.push(twitterLink);
    addLinks.push(redditLink);
    addLinks.push(telegramLink);
    addLinks.push(projectDescription);
    addLinks.push(provideParticipants);

    await presaleFactoryContract.methods.setTokenAdditionalInformationByID(id, addLinks).send({
        from: walletAddress
    });
    // await tokenContract.methods.setName(name).send({
    //   from: walletAddress,
    // //   value: web3.utils.toWei(value, 'ether'),
    // });
    return {
      status: '<span>✅<a target="_blank" href={`https://ropsten.etherscan.io/tx/${txHash}`}>View the status of your transaction on Etherscan!</a><br/>ℹ️ Once the transaction is verified by the network, the name will be updated automatically.</span>',
    };
  } catch (error) {
    return {
      status: "😥 " + error.message,
    };
  }
};

export const createPresale = async (
    walletAddress, 
    name, 
    symbol, 
    decimals) => {
  //input error handling
  if (!window.ethereum || walletAddress === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the name on the blockchain.",
    };
  }

  if (name.trim() === "") {
    return {
      status: "❌ Your name cannot be an empty string.",
    };
  }
  //set up transaction parameters
  try {
    await presaleFactoryContract.methods.genCoin(name, symbol, decimals).send({
        from: walletAddress
    });
    // await tokenContract.methods.setName(name).send({
    //   from: walletAddress,
    // //   value: web3.utils.toWei(value, 'ether'),
    // });
    return {
      status: '<span>✅<a target="_blank" href={`https://ropsten.etherscan.io/tx/${txHash}`}>View the status of your transaction on Etherscan!</a><br/>ℹ️ Once the transaction is verified by the network, the name will be updated automatically.</span>',
    };
  } catch (error) {
    return {
      status: "😥 " + error.message,
    };
  }
};
