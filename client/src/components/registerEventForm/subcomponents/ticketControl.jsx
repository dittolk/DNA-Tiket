import {
    Text,
    FormControl,
    FormLabel,
    Input,
    useToast,
    StackDivider,
    HStack,
    VStack,
    InputGroup,
    Switch,
  } from '@chakra-ui/react'
    import { useState } from 'react';
  import CurrencyInput from 'react-currency-input-field';

function TicketControl({formik, selectedRadioValue, setIsExceedLimit}) {
    const toast = useToast();
    const id = "id-toast";

    //local state untuk max harga tiket
    const [ticketPrice, setTicketPrice] = useState(10000)
    //local state untuk max kuota tiket
    const [ticketQuota, setTicketQuota] = useState(1)
    const [promotionToggle, setPromotionToggle] = useState(false);
    const handleSwitchChange = () => {
        setPromotionToggle(!promotionToggle); // Toggle the state value
        if(!promotionToggle){
          formik.setFieldValue("promosi", 1)
        }else{
          formik.setFieldValue("promosi", 0)
        }
    };
    return(
        <VStack spacing={6} divider={<StackDivider borderColor='gray.400' />} w={'full'} maxW={'xl'}>
            <FormControl>
                <HStack spacing={5} justifyContent={'center'} divider={<StackDivider borderColor='gray.400'/>}>
                  {selectedRadioValue === 'Berbayar' ? (
                    <VStack w={'100%'} align={'flex-start'}>
                    <FormLabel>Harga Tiket</FormLabel>
                      <InputGroup>
                          <Input 
                          defaultValue={formik.values.hargaTiket}
                          color={ticketPrice>10000000 || ticketPrice<10000 ? 'red' : 'initial'}
                          as={CurrencyInput}
                          maxLength={15}
                          onValueChange={(value, name) => {
                              setTicketPrice(value)
                              // console.log(typeof value);
                              if (!value || value > 10000000 || value < 10000) {
                                setIsExceedLimit(true);
                              } else {
                                setIsExceedLimit(false);
                                formik.setFieldValue('hargaTiket', parseInt(value));
                              }
                            }
                          } 
                          intlConfig={{ locale: 'id-ID', currency: 'IDR' }} 
                          id='input-example' 
                          placeholder='Masukan harga tiket' 
                          border={'1px solid black'}
                          autoComplete='off'></Input>
                      </InputGroup>
                      <Text fontSize={'xs'}>Harga tiket min. 10.000 dan maks. 10.000.000</Text>
                    </VStack>
                  ):(<HStack><Text ml={6}>Event Gratis</Text></HStack>)}
                  <VStack w={'100%'} align={'flex-start'}>
                    <FormLabel>Kuota Tiket</FormLabel>
                    <Input name='kuota' value={formik.values.kuota} onChange={(e) => {
                      if(e.target.value > 50000){
                        setTicketQuota(50000)
                        formik.setFieldValue("kuota", 50000);
                        if (!toast.isActive(id)) {
                          toast({
                            id,
                            title: 'Ooops!',
                            description: "Kuota maksimal 50000",
                            status: 'warning',
                            duration: 2000,
                            isClosable: true,
                          })
                        }
                      }else{
                        setTicketQuota(e.target.value);
                        formik.setFieldValue("kuota", parseInt(e.target.value));
                      }
                      }} 
                      min={1} max={50000} type='number' border={'1px solid black'}></Input>
                    <Text fontSize={'xs'}>{ticketQuota}/50000</Text>
                      {formik.touched.kuota && formik.errors.kuota ?(
                          <Text style={{color: 'red'}}>{formik.errors.kuota}</Text>
                        ) : null}
                  </VStack>
                </HStack>
              </FormControl>
              
              {selectedRadioValue === 'Berbayar' && (
                <FormControl>  
                  <VStack>
                    <HStack w={'100%'}>
                        <VStack w={'100%'} align={'flex-start'}>
                          <FormLabel>Promosi</FormLabel>
                          <Text fontSize={'sm'}>Promosi berupa potongan harga berdasarkan rentang waktu tertentu.</Text>
                        </VStack>
                        <HStack justifyContent={'flex-end'}>
                          <Switch isChecked={promotionToggle} onChange={handleSwitchChange}></Switch>
                        </HStack>
                    </HStack>
                    {promotionToggle && (
                      <HStack mt={1} alignItems={'center'} h={'auto'}>
                        <VStack align={'flex-start'}>
                          <FormLabel>Tanggal mulai</FormLabel>
                          <Input name='tanggalMulaiPromosi' value={formik.values.tanggalMulaiPromosi} onChange={formik.handleChange} type='date'></Input>
                        </VStack>
                        <VStack align={'flex-start'}>
                          <FormLabel>Tanggal berakhir</FormLabel>
                          <Input name='tanggalBerakhirPromosi' values={formik.values.tanggalBerakhirPromosi} onChange={formik.handleChange} type='date'></Input>
                        </VStack>
                        <VStack align={'flex-start'}>
                          <FormLabel>Potongan Harga</FormLabel>
                          <Input name='potonganHarga' values={formik.values.potonganHarga} onChange={formik.handleChange} type='number'></Input>
                        </VStack>
                      </HStack>
                    )}
                  </VStack>
                </FormControl>
              )}
        </VStack>
    )
}

export default TicketControl