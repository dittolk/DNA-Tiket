'use client'

import {
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useDisclosure,
  ModalOverlay,
  StackDivider,
  HStack,
  VStack,
  Box,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { TimeIcon, EditIcon} from '@chakra-ui/icons'
import { SlLocationPin } from 'react-icons/sl';
import { MdEventNote } from 'react-icons/md';
import {useFormik} from "formik";
import * as Yup from "yup"
import styled from '@emotion/styled';
import LimitTransactionInput from './subcomponents/limitTransactionInput';
import CategoryModal from "./subcomponents/categoryModal";
import DateModal from './subcomponents/dateModal';
import LocationModal from './subcomponents/locationModal';
import TabbedContent from './subcomponents/tabbedContent';
import TicketControl from './subcomponents/ticketControl';
import { useSelector } from 'react-redux';

const StyledInput = styled(Input)`
  font-weight: normal;
  &:not(:placeholder-shown) {
    font-weight: bold;
  }
`;

const OverlayModal = () => (
  <ModalOverlay
    bg='blackAlpha.800'
    backdropFilter='auto'
  />
)

export default function RegisterEventForm() {
  const user = useSelector((state) => state.user.value)
  
  //Untuk modal kategori, date, dan lokasi
  const [overlay, setOverlay] = useState(<OverlayModal />) //overlay bakcground untuk modal

  //Modal Category
  const {isOpen: isCategoryModalOpen, onOpen: onCategoryModalOpen, onClose: onCategoryModalClose } = useDisclosure();
  const [selectedRadioValue, setSelectedRadioValue] = useState('Berbayar');
  const [selectedCategoryValues, setSelectedCategoryValues] = useState(""); //value akhir
  const handleCategoryModalClose = (categoryValues, radioValue) => {
    setSelectedCategoryValues(categoryValues); // Update the selectedCategoryValues in the parent component
    setSelectedRadioValue(radioValue)
    onCategoryModalClose(); // Close the modal
  };

  //Modal Date
  const {isOpen: isDateModalOpen, onOpen: onDateModalOpen, onClose: onDateModalClose} = useDisclosure();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const handleDateModalClose = (dateStr, timeStr) => {
    setSelectedDate(dateStr)
    setSelectedTime(timeStr)
    onDateModalClose(); // Close the modal
  };

  const {isOpen: isLocationModalOpen, onOpen: onLocationModalOpen, onClose: onLocationModalClose} = useDisclosure();
  const [selectedCity, setSelectedCity] = useState('');
  const handleLocationModalClose = (str) => {
    setSelectedCity(str)
    onLocationModalClose(); // Close the modal
  };

  //local state ticket counter
  let [ticketCounter, setTicketCounter] = useState(1);
  const [isExceedLimit, setIsExceedLimit] = useState(false);

  const RegisterEventSchema = Yup.object().shape({
    nama_event: Yup.string().required("Nama event tidak boleh kosong"),
    hargaTiket: Yup.number().required('Harga tiket tidak boleh kosong').positive('Harga tiket harus positif'),
    tanggalMulai: Yup.string().required("Jadwal Event tidak boleh kosong"),
    format_event: Yup.string().required("Format event tidak boleh kosong"),
    kuota: Yup.number().required('Kuota tidak boleh kosong').positive('Kuota harus positif'),
    alamat: Yup.string().required("Alamat tidak boleh kosong"),
    kota: Yup.string().required("Kota event tidak boleh kosong"),
  });

  const handleSubmitEvent = (data) =>{
    console.log('ini data', data);
<<<<<<< Updated upstream
=======
    if(data.jenis_event == "Gratis"){
      data.harga_tiket = 0;
    }
    try{
      const response = await axios.post("http://localhost:2000/event/register-event", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast({
        title: "Success",
        description: "Event berhasil dibuat",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }catch(err){
      console.log(err);
    }
>>>>>>> Stashed changes
  }

  const formik = useFormik({
    initialValues: {
      nama_event: "",
      format_event: "",
      penyelenggara: user.name,
      topik_event: "",
      jenis_event: "Berbayar",
      tanggalMulai: "",
      tanggalBerakhir: "",
      waktuMulai: "",
      waktuBerakhir: "",
      alamat: "",
      kota: "",
      deskripsiEvent: "",
      ketentuanEvent: "",
      hargaTiket: 10000,
      promosi: 0,
      tanggalMulaiPromosi: "",
      tanggalBerakhirPromosi: "",
      potonganHarga: "",
      kuota: 1,
      limitTransaksi: "",
    },
    validationSchema: RegisterEventSchema,
    onSubmit: (values, action) => {
      handleSubmitEvent(values);
      // action.resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex p={6} h={'auto'} direction={{ base: 'column', md: 'row' }} justify={'center'}>
          <Flex boxShadow={'xl'} w={'50vw'} h={'auto'} rounded={'lg'} p={8} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'xl'} divider={<StackDivider borderColor='gray.400' />}>
              <Heading size={'lg'}>Buat event</Heading>
              <FormControl>
                <FormLabel>Nama Event<span style={{ color: 'red' }}>*</span></FormLabel>
                 <StyledInput id='nama_event' name='nama_event' onChange={formik.handleChange} value={formik.values.nama_event} autoComplete='off' maxLength={60} fontSize={'lg'} transition={'0.2s ease-in-out'} variant={'unstyled'} type="text" placeholder='Tentukan nama event anda'
                _focus={{
                  fontSize: '2xl', // Set the desired font size for focus
                  transition: 'font-size 0.2s ease-in-out',
                }}
                error={formik.touched.nama_event && Boolean(formik.errors.nama_event)}
                />
                {formik.touched.nama_event && formik.errors.nama_event ?(
                  <Text style={{color: 'red'}}>{formik.errors.nama_event}</Text>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel>Diselenggarakan oleh</FormLabel>
                <StyledInput name='penyelenggara' onChange={formik.handleChange} value={formik.values.penyelenggara} autoComplete='off' maxLength={60} fontSize={'lg'} transition={'0.2s ease-in-out'} variant={'unstyled'} type="text" placeholder={user.name}
                _focus={{
                  fontSize: '2xl', // Set the desired font size for focus
                  transition: 'font-size 0.2s ease-in-out',
                }}
                error={formik.touched.nama_event && Boolean(formik.errors.nama_event)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Gambar Event</FormLabel>
                  <Input type='file' size={'md'} variant={'unstyled'} _hover={{ cursor: "pointer" }} _focus={{ outline: "none" }}></Input>
              </FormControl>
              <FormControl>
                <Button color={'rgb(22, 97, 255)'} variant={'link'} onClick={() => {
                  setOverlay(<OverlayModal />)
                  onCategoryModalOpen()
                }}>
                  {selectedCategoryValues ? (<>{selectedCategoryValues} <EditIcon ml={'8px'}/></>) 
                  :
                   <>
                   {formik.touched.format_event && formik.errors.format_event ?(
                  <><Text style={{color: 'red'}}>{formik.errors.format_event}</Text><EditIcon ml={'8px'}/></>
                ) : <><MdEventNote/> <Text ml={'8px'}>Kategori</Text></>}
                   {/* <MdEventNote/> <Text ml={'8px'}>Kategori</Text> */}
                   </>}
                </Button>
              </FormControl>
              <FormControl>
                <Button color={'rgb(22, 97, 255)'} variant={'link'} onClick={() => {
                  setOverlay(<OverlayModal />)
                  onDateModalOpen()
                }}>
                  {selectedDate ? (
                  <VStack alignItems={'flex-start'}>
                    <HStack>
                      <Text>Tanggal : {selectedDate}</Text> <EditIcon ml={'8px'}/>
                    </HStack>
                    <HStack>
                      <Text>Waktu : {selectedTime}</Text> <EditIcon ml={'8px'}/>
                    </HStack>
                  </VStack>) 
                  :
                  <>
                  {formik.touched.tanggalMulai && formik.errors.tanggalMulai ?(
                    <><Text style={{color: 'red'}}>{formik.errors.tanggalMulai}</Text><EditIcon ml={'8px'}/></>
                  ) : <><TimeIcon/> <Text ml={'8px'}>Tanggal & Waktu</Text></>}</>
                  //  <><TimeIcon/> <Text ml={'8px'}>Tanggal & Waktu</Text></>
                   }
                </Button>
              </FormControl>
              <FormControl>
                <Button color={'rgb(22, 97, 255)'} variant={'link'} onClick={() => {
                  setOverlay(<OverlayModal />)
                  onLocationModalOpen()
                }}>
                  {selectedCity ? (<><Text>{selectedCity}</Text><EditIcon ml={'8px'}/></>) : 
                  <>
                  {formik.touched.alamat && formik.errors.alamat ?(
                  <><Text style={{color: 'red'}}>{formik.errors.alamat}</Text><EditIcon ml={'8px'}/></>
                ) : <><SlLocationPin/> <Text ml={'8px'}>Lokasi</Text></>}
                  </>}
                </Button>
              </FormControl>
              <TabbedContent formik={formik}/>
              <TicketControl formik={formik} selectedRadioValue={selectedRadioValue} setIsExceedLimit={setIsExceedLimit}/>
              <LimitTransactionInput value={ticketCounter} onChange={(value) => {setTicketCounter(value); formik.setFieldValue('limitTransaksi', value);}}/>
              <Button type='submit' bgColor={'#020091'} isDisabled={isExceedLimit?true:false} variant={'solid'} color={'white'}
              _hover={{
                background: '#0300dd',
                color: "white",
              }}>
                Buat Event
              </Button>
            </Stack>
          </Flex>
        </Flex>
        </form>

        {/* ---------------------------- MODAL UNTUK KATEGORI -------------------- */}
        <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={handleCategoryModalClose}
        formik={formik}
        overlay={overlay}
        />
         
        {/* ---------------------------- MODAL UNTUK TANGGAL & WAKTU -------------------- */}
        <DateModal
        isOpen={isDateModalOpen}
        onClose={handleDateModalClose}
        formik={formik}
        overlay={overlay}/>
        
        {/* ---------------------------- MODAL UNTUK LOKASI -------------------- */}
        <LocationModal
        isOpen={isLocationModalOpen}
        onClose={handleLocationModalClose}
        formik={formik}
        overlay={overlay}
        />
    </>
  )
}