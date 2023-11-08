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
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();
  
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
            window.location.reload();
      }catch(err){
          console.log(err);
      }
  }

  const handleDeleteAccount = async () => {
      try{
          const response = await axios.delete(`http://localhost:2000/user/delete-account/`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          });
          localStorage.removeItem('token');
          window.location.reload();
      }catch(err){
          console.log(err);
      }
  }

  const formik = useFormik({
      initialValues: {
          name : "",
          password: "",
          username: ""
      },
      onSubmit: (values, action) => {
          handleUpdateAccount(values);
          action.resetForm();
      }
  })

  console.log("Ini data user", user);

  return(
      <>
          <Box
              maxW={'520px'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'lg'}
              rounded={'lg'} p={6} textAlign={'center'} h={'auto'}>
              <Avatar size={'xl'} name={user?.name} mb={4} pos={'relative'}
              />
              <Heading fontSize={'2xl'} fontFamily={'body'}>
              {user?.name}
              </Heading>
              <Text fontWeight={600} color={'gray.500'} mb={4}>
              @{user?.username}
              </Text>
              <Text fontWeight={600} color={'black'} mb={4}>
              {user?.email}
              </Text>
              <HStack justifyContent={'center'} spacing={4}>
                <Text fontWeight={600} color={'black'} mb={4}>
                Referral Code: <span style={{ color: '#020091' }}>{user.Referral?.kode_referral}</span>
                </Text>
                <Text fontWeight={600} color={'black'} mb={4}>
                Poin: <span style={{ color: '#020091' }}>{user?.point}</span>
                </Text>
                <Text fontWeight={600} color={'black'} mb={4}>
                Balance: <span style={{ color: '#020091' }}>{user.Wallet?.balance.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}</span>
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