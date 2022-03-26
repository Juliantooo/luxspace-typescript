import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'

const Footer: React.FC = () => {
    return (
        <Box py={7} px={5}>
            <Divider orientation='vertical' />
            <Text fontSize='sm' textAlign='center'>
                Copyright 2022 • All Rights Reserved LuxSpace by Julianto
            </Text>
        </Box>
    )
}

export default Footer