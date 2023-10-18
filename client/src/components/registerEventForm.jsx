'use client'

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react'

export default function RegisterEventForm() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex border={'1px solid black'} p={8} flex={1} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Buat event</Heading>
          <FormControl id="email">
            <FormLabel>Nama event</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
            <Button colorScheme={'blue'} variant={'solid'}>
              Register Event
            </Button>
        </Stack>
      </Flex>
      {/* <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1571928098080-80f4008d111e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80'
          }
        />
      </Flex> */}
    </Stack>
  )
}