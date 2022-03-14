import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import networkActions from '../redux/network/actions';
import networkList from '../networks';
import ChangeNetworkBoxItem from './ChangeNetworkBoxItem'
import {
    switchNetwork
  } from "../tokenAPI/utils/interact.js";
  
const style = {
    box: {
        backgroundColor: '#0b152d',
        width: '100%',
        borderRadius: '5px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        backgroundColor: '#152856',
        color: 'white',
        fontSize: '20px',
        width: '100%',
        textAlign: 'center',
        padding: '12px',
        borderBottom: '1px solid #1677b8',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',    
    },
}
const networkData = networkList;
const { setNetworkType } = networkActions;

const ChangeNetworkBox = ({}) => {

    const dispatch = useDispatch();
    const {
        networkType
    } = useSelector((state) => state.Network);

    const [selectedID, setSelectedID] = useState(-1);
    const updateNetwork = (networkIndex) => {
        console.log("CGI updateNetwork at changeNetworkBox", networkIndex);
        setSelectedID(networkIndex)
        dispatch(setNetworkType(networkIndex));
        switchNetwork(networkIndex);
    }
    
    useEffect(() => {
        // dispatch(setNetworkType(-1));

        // const asyncFetchTokenData = async () => {
        //   const { address, status } = await getCurrentWalletConnected();
        //   setWallet(address);
        //   setStatus(status);
        //   addWalletListener();  
        // }
        // asyncFetchTokenData();
    });
    
    return (
        <div style={style.box}>
            <div style={style.title}>Change Network</div>
            {networkData && networkData.map((item, index) => (
                <ChangeNetworkBoxItem 
                    networkName={item.networkName}
                    url={item.url}
                    idx={index}
                    active={selectedID == index}
                    onClick={() => updateNetwork(index)}
                />
            ))}

        </div>
    )
}

export default ChangeNetworkBox;
