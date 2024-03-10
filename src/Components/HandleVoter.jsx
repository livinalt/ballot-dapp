import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../Utils";
import { getProposalsContract } from "../Constants/contracts";
import { getProvider } from "../Constants/providers";
import Proposal from "./Proposal";
import { Flex, Text } from "@radix-ui/themes";
import { Toast } from "@radix-ui/react-toast";


const HandleVoter = ({proposals, loading}) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();


    const handleVote = async (id) => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getProposalsContract(signer);

        try {
            const transaction = await contract.vote(id);
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                return Toast.success("vote successfull!");
            }

            Toast.error("vote failed!");
        } catch (error) {
            Toast.error(error);
            let errorText;
            if (error.reason === "Has no right to vote") {
                errorText = "You have not right to vote";
            } else if (error.reason === "Already voted.") {
                errorText = "You have already voted";
            } else {
                errorText = "An unknown error occured";
            }

            Toast.error("error: ", errorText);
        }

    };

    return (

        <div>
             <Flex wrap={"wrap"} gap={"6"}>
            {loading ? (
                <Text>Loading...</Text>
            ) : proposals.length !== 0 ? (
                proposals.map((item, index) => (
                    <Proposal
                        key={index}
                        name={item.name}
                        handleVote={handleVote}
                        id={index}
                        voteCount={Number(item.voteCount)}
                    />
                ))
            ) : (
                <Text>Could not get proposals!!</Text>
            )}
        </Flex>
        </div>
           
         );
    }


export default HandleVoter