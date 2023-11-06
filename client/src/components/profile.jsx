import {Heading, Avatar, Box, Center, Text, Stack, Button, useColorModeValue, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalOverlay, useDisclosure, ModalCloseButton, StackDivider, Input, FormControl, FormLabel, InputGroup, InputLeftAddon, useToast, HStack,
  } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { useFormik } from 'formik';

function Profile(){
    const token = localStorage.getItem("token");
    const user = useSelector((state) => state.user.value);
    const handleLogout = () =>{
        localStorage.removeItem('token');
        window.location.reload();
    }
    
    return(
        <>
            <Box
                maxW={'520px'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'lg'}
                rounded={'lg'} p={6} textAlign={'center'} h={'auto'}>
                <Avatar size={'xl'} name={user.name} mb={4} pos={'relative'}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                {user.name}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                @{user.username}
                </Text>
                <Text fontWeight={600} color={'black'} mb={4}>
                {user.email}
                </Text>
                <Text fontWeight={600} color={'black'} mb={4}>
                Referral Code: <span style={{ color: '#020091' }}>{user.referral}</span>
                </Text>

                <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                    onClick={onOpen}
                    colorScheme='red'
                    fontSize={'sm'}
                    rounded={'lg'}>
                    Delete Account
                </Button>
                <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                    Facebook
                </Button>
                <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                    Twitter
                </Button>
                </Stack>
            </Box>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Apakah anda yakin? :(</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Akun DNA Tiket anda akan dihapus. Semua data terkait akun anda akan dihapus.</Text>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Batalkan
                    </Button>
                    <Button onClick={handleDeleteAccount} colorScheme='red' variant='ghost'>Hapus akun</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default Profile;