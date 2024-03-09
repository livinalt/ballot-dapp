import React from 'react'
import {configureWeb3Modal} from './Connections/index.js';
import '@radix-ui/themes/styles.css';
import Header from './Components/Header.jsx';
import { Proposal } from './Components/Proposal.jsx';
import { Flex } from '@radix-ui/themes';
import DelegateVote from './Components/DelegateVote.jsx';


configureWeb3Modal();

const App = () => {
  return (
    <div>
      <Header />
     <DelegateVote />
      <Flex wrap={'wrap'} gap={'9'}>
        <Proposal 
          name={"Timothy"}
          id={0}
          handleVote={() => {}}
          voteCount={30}
        />
        <Proposal 
          name={"Mary"}
          id={0}
          handleVote={() => {}}
          voteCount={20}
        />
        <Proposal 
          name={"Mubarak"}
          id={0}
          handleVote={() => {}}
          voteCount={10}
        />
        <Proposal 
          name={"Daniel"}
          id={0}
          handleVote={() => {}}
          voteCount={40}
        />
        
      </Flex>
    </div>

  )
}

export default App