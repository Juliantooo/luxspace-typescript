import { Box, HStack, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { TiShoppingCart } from 'react-icons/ti'
import { useMediaQuery } from '@chakra-ui/react'

interface IHeaderProps {
    handleClickMenu: () => void
}


const Header: React.FC<IHeaderProps> = ({ handleClickMenu }) => {
    const [isMinMedium] = useMediaQuery('(min-width: 48em)')
    return (
        <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' p={4} zIndex='overlay' w='full' position='absolute' top={0}>
            <Image src='/logo.png' alt='lux-space-logo' h={6} />
            <HStack spacing={6}>
                {
                    isMinMedium &&
                    <>
                        <Text fontSize='lg'>ShowCase</Text>
                        <Text fontSize='lg'>Catalog</Text>
                        <Text fontSize='lg'>Delivery</Text>
                        <Text fontSize='lg'>Rewards</Text>
                    </>
                }
                {
                    !isMinMedium && <Icon as={TiShoppingCart} w={7} h={7} />
                }
                <Icon as={FiMenu} w={6} h={6} onClick={handleClickMenu} cursor='pointer' />
            </HStack>
        </Box>
    )
}

export default Header