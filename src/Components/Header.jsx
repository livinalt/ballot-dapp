import { Flex } from '@radix-ui/themes'
import GiveRightToVoteComponent from './GiveRightToVoteComponent';


const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='text-red500 bg-amber-500'>Ballot</div>
      
      <Flex justify={"between"}>
        <GiveRightToVoteComponent />
        <w3m-button />
      </Flex>
    </div>
  )
}

export default Header