import { Box, Button, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  const [isMinMedium] = useMediaQuery('(min-width: 48em)')
  return (
    <>
      <Head>
        <title>LuxSpace</title>
        <meta name="description" content="LuxSpace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box display={isMinMedium ? 'flex' : 'block'} flexDirection='row'>
          {
            isMinMedium &&
            <>
              <Box display='flex' w='full' justifyContent='center' alignItems='center' h='80vh' backgroundColor='white'>
                <VStack spacing={5} px={8} >
                  <Text fontSize='5xl' textAlign='center' fontWeight='bold'>
                    The Room You have Dreaming
                  </Text>
                  <Box>
                    <Text fontSize='lg' textAlign='center' px={0}>
                      Kami menyediakan furniture berkelas
                    </Text>
                    <Text fontSize='lg' textAlign='center' px={0}>
                      yang membuat ruangan terasa homey
                    </Text>
                  </Box>
                  <Button px={8} py={6} rounded='full' colorScheme='pink' variant='solid' fontSize='md'>
                    Explore Now
                  </Button>
                </VStack>
              </Box>
            </>
          }
          <Box display='flex' justifyContent='center' alignItems='center' backgroundImage={'/image-hero-1.png'} h='80vh' w='full' backgroundSize='cover' backgroundPosition='center'>
            {
              !isMinMedium &&
              <>
                <VStack spacing={5} >
                  <Text fontSize='2xl' fontWeight='bold'>
                    The Room You have Dreaming
                  </Text>
                  <Text fontSize='small' textAlign='center' px={16}>
                    Kami menyediakan furniture berkelas yang membuat ruangan terasa homey
                  </Text>
                  <Button px={8} py={6} rounded='full' colorScheme='pink' variant='solid' fontSize='sm'>
                    Explore Now
                  </Button>
                </VStack>
              </>
            }
          </Box>
        </Box>
      </main>
    </>
  )
}

export default Home
