import { Box, Button, Card, Flex, Text, TextField } from '@radix-ui/themes'

const DelegateVote = () => {
  return (
    <div>
        <Card size="2" style={{ width: 425 }}>
            <Flex gap="" align="center">
                <Box width={"100%"}>
                <Flex direction="column" gap="3">
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                    Delegate Address
                    </Text>
                    <TextField.Input
                    placeholder="Enter the address"
                    />
                    <Button className="bg-blue-600">Delegate Address</Button>
                </label>
                
             </Flex>
                </Box>
            </Flex>
        </Card>
    </div>
  );
}

export default DelegateVote