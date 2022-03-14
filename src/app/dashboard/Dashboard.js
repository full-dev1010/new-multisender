import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Slider from "react-slick";
import { TodoListComponent } from '../apps/TodoList'
import { VectorMap } from "react-jvectormap";
import yellowtoken from '../../assets/new_images/images/yellowtoken.png';
import logo from '../../assets/new_images/images/logo.png';
import token1 from '../../assets/new_images/images/token1.png';
import token2 from '../../assets/new_images/images/token2.png';
import token3 from '../../assets/new_images/images/token3.png';
import twitter from '.././../assets/new_images/images/twitter.png';
import file from '../../assets/new_images/images/file.png';
import discord from '../../assets/new_images/images/discord.png';
import telegram from '../../assets/new_images/images/telegram.png';
import bscnetwork from '../../assets/new_images/icons/bscnetwork.png'



export class Dashboard extends Component {
  render () {
    return (
      <div>
        <div className="top-line">
        </div>
        <div className="welcome">
          <div><p className="sub-welcome">Welcome To Token MultiSender!</p></div>
          <div>
            <p className="sub-welcome-content">A tool that allows you to batch send ERC20 tokens.
            </p>
          </div>
        </div>
        
        
        <div className="blockchain">
            <p className="blockchains">Blockchains</p>
            <div className="supported-blockchain"><p className="sub-support">SUPPORTED BLOCKCHAIN</p></div>
            {/* <div className="parent-yellow-token"><img src={yellowtoken} /></div>
            <div><p className="binance">Binance</p></div> */}
        </div>
        <div className="row social-tags">
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body custom-card token-card social-card">
                <img src={twitter} />
                <p className="card-content">Follow us on Twitter</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body custom-card token-card social-card">
                <img src={telegram} />
                <p className="card-content">Join Community on Telegram</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body custom-card token-card social-card">
                <img src={file} />
                <p className="card-content">Read our Documentation</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body custom-card token-card social-card">
                <img src={discord} />
                <p className="card-content">Join Discord</p>
              </div>
            </div>
          </div>
        </div>
        
          </div>
       
    );
  }
}

export default Dashboard;