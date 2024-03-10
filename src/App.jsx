import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { configureWeb3Modal } from "./Connections";
import "@radix-ui/themes/styles.css";
import Header from "./Components/Header";
import Proposal from "./Components/Proposal";
import DelegateVote from "./Components/DelegateVote";
import useProposals from "./hooks/useProposals";
// import { useWeb3ModalAccount,useWeb3ModalProvider} from "@web3modal/ethers/react";
// import { isSupportedChain } from "./Utils";
// import { getProvider } from "./Constants/providers";
// import { getProposalsContract } from "./Constants/contracts";
import HandleVoter from "./Components/HandleVoter";


configureWeb3Modal();

function App() {
    const { loading, data: proposals } = useProposals();

    return (
        <Container>
            <Header />
            <main className="mt-6">
                <Box mb="4">
                    <DelegateVote />
                </Box>
            <HandleVoter proposals={proposals} loading={loading} />               
            </main>
        </Container>
    );
}

export default App;
