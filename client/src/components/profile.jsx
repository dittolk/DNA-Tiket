<<<<<<< Updated upstream
import {Heading, Avatar, Box, Center, Text, Stack, Button, useColorModeValue,
=======
import {Heading, Avatar, Box, Center, Text, Stack, Button, useColorModeValue, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalOverlay, useDisclosure, ModalCloseButton, StackDivider, Input, FormControl, FormLabel, InputGroup, InputLeftAddon, useToast, HStack,
>>>>>>> Stashed changes
  } from '@chakra-ui/react'
import { useSelector } from 'react-redux';

function Profile(){
    const token = localStorage.getItem("token");
    const user = useSelector((state) => state.user.value);
<<<<<<< Updated upstream
    const handleLogout = () =>{
        localStorage.removeItem('token');
        window.location.reload();
=======
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();

    console.log(user);
    
    const handleUpdateAccount = async (data) => {
        try{
            const response = await axios.patch(`http://localhost:2000/user/update-user/`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            toast({
                title: "Success",
                description: "Data akun anda telah diperbaharui.",
                status: "success",
                duration: 4000,
                isClosable: true,
                position: "top",
              });
        }catch(err){
            console.log(err);
        }
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

                <Stack mt={8} direction={'row'} spacing={4}>
=======
                <HStack justifyContent={'center'}>
                    <Text fontWeight={600} color={'black'} mb={4}>
                    Point: <span style={{ color: '#020091' }}>{user.point}</span>
                    </Text>
                    <Text fontWeight={600} color={'black'} mb={4}>
                    Kode Referral: <span style={{ color: '#020091' }}></span>
                    </Text>
                </HStack>
                <form onSubmit={formik.handleSubmit}>
                 <Stack direction={'column'} divider={<StackDivider borderColor='gray.400' />} spacing={4}>
                    <FormControl>
                        <FormLabel>Update Nama</FormLabel>
                            <Input name='name' onChange={formik.handleChange} value={formik.values.name} autoComplete='off' type='text' placeholder='Nama baru' focusBorderColor='#020091'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Update Username</FormLabel>
                            <Input name='username' onChange={formik.handleChange} value={formik.values.username} autoComplete='off' type='text' placeholder='Username baru' focusBorderColor='#020091'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Update Password</FormLabel>
                            <Input name='password' onChange={formik.handleChange} value={formik.values.password} autoComplete='off' type='password' placeholder='Password baru' focusBorderColor='#020091'/>
                    </FormControl>
                    <Button type='submit' bgColor={'#020091'} color={'white'} _hover={{
                        background: '#0300dd',
                        color: "white",
                    }}>Update</Button>
                </Stack>
                </form>
                <Stack mt={8} direction={'column'} spacing={4}>
>>>>>>> Stashed changes
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