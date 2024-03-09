import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import React from 'react'
import { useState } from 'react';
import useGiveRightToVote from '../hooks/useGiveRightToVote';

const GiveRightToVoteComponent = () => {
  const [address, setAddress] = useState("");
  const handleGiveRightToVote = useGiveRightToVote(address);

  return (
    <div>
   <Dialog.Root>
          <Dialog.Trigger>
            <Button className="bg-blue-600">Give Right</Button>
          </Dialog.Trigger>

  <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Give Right To Vote</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      Give Right To Vote.
    </Dialog.Description>

    <Flex direction="column" gap="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Voter's Address
        </Text>
        <TextField.Input
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          placeholder="Enter the address"
        />
      </label>
    
    </Flex>

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button 
        onClick={handleGiveRightToVote}
        className="bg-blue-600">Add Voter</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
    </div>
  )
}

export default GiveRightToVoteComponent