import { Box, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdClose } from 'react-icons/md'

interface ISideNavProps {
  handleClickMenu: () => void
}

const SideNav: React.FC<ISideNavProps> = ({ handleClickMenu }) => {
  return (
    <Box flex={1} minH='100vh' w='full' background='white' position='fixed' zIndex='popover' top={0} display='flex' flexDir='column' justifyContent='center'>
      <Icon as={MdClose} w={7} h={7} position='absolute' top={4} right={4} cursor='pointer' onClick={handleClickMenu} />
      <VStack spacing={10}>
        <Text fontSize='lg'>ShowCase</Text>
        <Text fontSize='lg'>Catalog</Text>
        <Text fontSize='lg'>Delivery</Text>
        <Text fontSize='lg'>Rewards</Text>
      </VStack>
    </Box>
  )
}

export default SideNav