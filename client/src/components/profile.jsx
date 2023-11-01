import {Heading, Avatar, Box, Center, Text, Stack, Button, useColorModeValue,
  } from '@chakra-ui/react'
import { useSelector } from 'react-redux';

function Profile(){
    const token = localStorage.getItem("token");
    const user = useSelector((state) => state.user.value);
    const handleLogout = () =>{
        localStorage.removeItem('token');
        window.location.reload();
    }
    
    return(
        <Center py={6}>
            <Box
                maxW={'520px'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'xl'}
                rounded={'lg'} p={6} textAlign={'center'}>
                <Avatar size={'xl'} name={user.name} mb={4} pos={'relative'}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                {user.name}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                @{user.username}
                </Text>
                <Text fontWeight={600} color={'black'} mb={4}>
                Email: {user.email}
                </Text>

                <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                    colorScheme='red'
                    flex={1}
                    fontSize={'sm'}
                    rounded={'lg'}
                    _focus={{
                    bg: 'gray.200',
                    }}>
                    Delete Account
                </Button>
                <Button onClick={handleLogout} flex={1} fontSize={'sm'} rounded={'lg'} bg={'blue.400'} color={'white'}
                    _hover={{
                    bg: 'blue.500',
                    }}
                    _focus={{
                    bg: 'blue.500',
                    }}>
                    Logout
                </Button>
                </Stack>
            </Box>
        </Center>
    )
}

export default Profile;