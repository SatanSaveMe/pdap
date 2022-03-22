import React from 'react';
import {useState,useEffect} from 'react';
import {ethers,BigNumber} from 'ethers';
import roboPunksNFT from './RoboPunksNFT.json'
import {FaMinusCircle,FaPlusCircle} from 'react-icons/fa'
import {EmailIcon} from "@chakra-ui/icons"
import {
    Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center
} from '@chakra-ui/react'

const roboPunksNFTAddress="0x3448bD4D548c0F6e4C3Ce658340CD7Dc5638d15F";



const MainMint = ({accounts,setAccounts}) => {
    const [mintAmount,setMintAmount] = useState(1);
    let maxMintAmount;

    const isConnected = Boolean(accounts[0]);

    async function handleMint(){
        if(window.ethereum){
            const provider = await new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                roboPunksNFT.abi,
                signer
            )
            try{
                console.log('big number from my dick: ',BigNumber.from(mintAmount))
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response: ',response)
            }catch(err){
                console.log("error: " ,err)
            }
        }
    }

    const handleMaxMint = () =>{
        setMintAmount(maxMintAmount)
    }

    const handleDecrement = () =>{
        // if(mintAmount<=1) return;
        console.log('decremeent')
        setMintAmount(mintAmount-1)
    }

    const handleIncrement = () =>{
        // if(mintAmount<=10) return;
        console.log('increment')
        setMintAmount(mintAmount+1)
    }
useEffect(()=>{
    console.log('mint amount: ',mintAmount)
},[mintAmount])


    return (<div className="mainMintDiv">
        <h1>👁 Metis ApeWives 👁</h1>
        <h2>Cultural Development</h2>
        <p>Metis Desperate ApeWives (mDAW) is a collection of 10000 NFTs living on Metis Andromeda Network. We plan on designing an inclusive, receptive and engaged community which will focus on evlovling the cultural and artistic aspect of Metis. mDAW is a derivative of the famous NFT collection ~ Desperate ApeWives ~, however we are not affiliated with them. We recognise their contribution and we are greatful to them. Owning a Metis ApeWife will offers access to the next sthH</p>

        {
            isConnected?
            (
                <div className="mintButtons">
                    <div className="plusMinusSection">
                        <button onClick={handleDecrement} className="minusButton">
                            <FaMinusCircle/>
                        </button>
                        <input type="hidden" name="" id="" value={mintAmount}/>
                        <div className="mintValueClassWrapper">
                        <p className="mintValueClass" >{mintAmount}</p>
                        </div>
                        <button onClick={handleIncrement} className="plusButton">
                            <FaPlusCircle/>
                        </button>
                    </div>
                    <div className="mintButtons">
                        <button className="mintButton" onClick={handleMint}>mint</button>
                        <button className="maxMintButton" onClick={handleMaxMint}>max mint</button>
                    </div>
                </div>
            )
            :
            (
                <p>You must be connected to mint</p>
            )
        }
    </div>);
}
export default MainMint;