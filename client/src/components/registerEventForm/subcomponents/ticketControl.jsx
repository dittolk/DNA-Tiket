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
                          name='harga_tiket'
                          defaultValue={formik.values.harga_tiket}
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
                                formik.setFieldValue('harga_tiket', parseInt(value));
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
              <FormControl>
                <VStack>
                <HStack mt={1} alignItems={'center'} h={'auto'} w={'100%'} spacing={5} justifyContent={'center'}>
                        <VStack align={'flex-start'} w={'100%'}>
                          <FormLabel>Tanggal akhir penjualan </FormLabel>
                          <Input name='akhir_penjualan' value={formik.values.akhir_penjualan} onChange={(e) => {formik.setFieldValue("akhir_penjualan", e.target.value)}} type='date' border={'1px solid black'}></Input>
                        </VStack>
                      </HStack>
                </VStack>
              </FormControl>
              
              {selectedRadioValue === 'Berbayar' && (
                <FormControl>  
                  <VStack>
                    <HStack w={'100%'}>
                        <VStack w={'100%'} align={'flex-start'}>
                          <FormLabel>Promosi</FormLabel>
                          <Text fontSize={'sm'}>Promosi berupa potongan harga berdasarkan poin yang terpakai.</Text>
                          <Text fontSize={'sm'}>Contoh: EV1PROMO, Poin terpakai: 200, Potongan harga: 10.000</Text>
                        </VStack>
                        <HStack justifyContent={'flex-end'}>
                          <Switch isChecked={promotionToggle} onChange={handleSwitchChange}></Switch>
                        </HStack>
                    </HStack>
                    {promotionToggle && (
                      <HStack mt={1} alignItems={'center'} h={'auto'} >
                        <VStack align={'flex-start'}>
                          <FormLabel>Kode Promosi</FormLabel>
                          <Input name='kode_promo' values={formik.values.kode_promo} onChange={formik.handleChange} type='text' placeholder='Buat kode promosi anda' border={'1px solid black'}></Input>
                        </VStack>
                        <VStack align={'flex-start'}>
                          <FormLabel>Poin</FormLabel>
                          <Input name='cost_point' values={formik.values.cost_point} onChange={formik.handleChange} type='number' placeholder='Tentukan poin yang terpakai' border={'1px solid black'}></Input>
                        </VStack>
                        <VStack align={'flex-start'}>
                          <FormLabel>Potongan Harga</FormLabel>
                          <Input name='discount' values={formik.values.discount} onChange={formik.handleChange} type='number' placeholder='Tentukan potongan harga' border={'1px solid black'}></Input>
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