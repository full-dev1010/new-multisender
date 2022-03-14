import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import bsCustomFileInput from 'bs-custom-file-input';
import moment from 'moment';

import crown from '../../assets/new_images/images/crown.png'

import AceEditor from 'react-ace';

import { useEffect, useState } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
  createTokenInfo,
  updateTokenName,
  buyVip,
  getNetworkChainId,
  getNetworkListIndex,
} from "./tokenAPI/utils/interact.js";

import networkActions from './redux/network/actions';
const { setNetworkType } = networkActions;

const Vip = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [mainCoinName, setMainCoinName] = useState("BNB");

  const [mounted, setMounted] = React.useState(false)
  const [networkId, setNetworkId] = useState(-1);

  const [typeTier, setTypeTier] = useState("3");
  const fee = [0.1, 0.3, 0.5, 1];
  
  const handleChangeCheckbox = (e) => {
    // let isChecked = e.target.checked;
    setTypeTier(e.target.value)
    console.log("CGI", typeTier);
  }
  const dispatch = useDispatch();
  const updateNetwork = (networkIndex) => {
      dispatch(setNetworkType(networkIndex));
  }

  const handleClickBuyVip = () => {
    alert(networkType);
    buyVip(networkType, walletAddress, typeTier, fee[parseInt(typeTier)]);
  }

    //called only once
    useEffect(() => {
      const chainId = getNetworkChainId();
      const networkIndex = getNetworkListIndex(chainId);
      updateNetwork(networkIndex);
      console.log("network Index is ", networkIndex);

      bsCustomFileInput.init()
      setMounted(true)

      const asyncFetchTokenData = async () => {

        const { address, status } = await getCurrentWalletConnected();
    
        setWallet(address);
        setStatus(status);
    
        addWalletListener();
        
      }
      asyncFetchTokenData();
    }, []);

    const {
      networkType
    } = useSelector((state) => state.Network);
    
    function addWalletListener() {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts) => {
          if (accounts.length > 0) {
            setWallet(accounts[0]);
            setStatus("👆🏽 Write a message in the text-field above.");
          } else {
            setWallet("");
            setStatus("🦊 Connect to Metamask using the top right button.");
          }
        });
      } else {
        setStatus(
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        );
      }
    }
    
    if (!mounted) return null;


    return (
      <div className="div-vip">
        <div className="row-header">
          <div className="grid-margin stretch-card">
            <img id="img-tax-free" src={crown}></img>
          </div>
          <div className="div-vip-description">
            <p>VIP gives you discounted access to Multisender.app and all of your tx will be free.</p>
            <p>Keep in mind, you would still need to pay for {mainCoinName} network fees.</p>
            <p>If you need additional information, feel free to ask in our Telegram channel. <a href="https://t.me/MultiSender" target="_blank">t.me/MultiSender</a></p>
          </div>
        </div>

        <div className="row">
          <div className="grid-margin stretch-card col-step-card">
            <Form.Group>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="0" onChange={e => handleChangeCheckbox(e)}/>
                        <i className="input-helper"></i>1 day
                        <span className="text-fee-value">{fee[0]} {mainCoinName}</span>
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="1" onChange={e => handleChangeCheckbox(e)}/>
                        <i className="input-helper"></i>
                        7 days
                        <span className="text-fee-value">{fee[1]} {mainCoinName}</span>
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="2" onChange={e => handleChangeCheckbox(e)}/>
                        <i className="input-helper"></i>
                        1 month
                        <span className="text-fee-value">{fee[2]} {mainCoinName}</span>
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios4" value="3" defaultChecked onChange={e => handleChangeCheckbox(e)}/>
                        <i className="input-helper"></i>
                          no limit
                        <span className="text-fee-value">{fee[3]} {mainCoinName}</span>
                    </label>
                </div>
            </Form.Group>
          </div>
          <button type="button" className="btn btn-icon-text btn-buy"
            onClick={handleClickBuyVip}>
            Buy
          </button>

        </div>

      </div>

    );
  };
  
export default Vip;

