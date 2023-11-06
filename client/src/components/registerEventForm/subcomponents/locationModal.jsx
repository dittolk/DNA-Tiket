import {
    Button,
    FormControl,
    FormLabel,
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    useToast,
    VStack,
    Text,
  } from '@chakra-ui/react'
import { useState } from 'react'

function LocationModal({isOpen, onClose, formik, overlay}) {
    const toast = useToast();
    
    const indonesianCities = [
        'Jakarta',
        'Surabaya',
        'Bandung',
        'Medan',
        'Semarang',
        'Makassar',
        'Tangerang',
        'Bekasi',
        'Depok',
        'Palembang',
        'Padang',
        'Bandar Lampung',
        'Bogor',
        'Malang',
        'Yogyakarta',
        'Batam',
        'Pekanbaru',
        'Banjarmasin',
        'Samarinda',
        'Denpasar',
        'Manado',
        'Balikpapan',
        'Purwokerto',
        'Cirebon',
        'Purwakarta',
        'Sukabumi',
        'Tasikmalaya',
        'Cimahi',
        'Salatiga',
        'Magelang',
        'Probolinggo',
        'Pontianak',
        'Jambi',
        'Mataram',
        'Kupang',
        'Palu',
        'Cilegon',
        'Sorong',
        'Ambon',
        'Lhokseumawe',
        'Banda Aceh',
        'Pangkal Pinang',
        'Jayapura',
        'Nabire',
        'Manokwari',
        'Sorong',
        'Bau-Bau',
      ];

    //local state untuk menyimpan value lokasi
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [filteredCitySuggestions, setFilteredCitySuggestions] = useState([]);
    const [clickedSuggestion, setClickedSuggestion] = useState(false);
    const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
    const id = "id-toast"

    // Event handler for input change and suggestion filtering for Kota (city)
  const handleCityInputChange = (e) => {
    const userInput = e.target.value;

    setCity(userInput);

    const filteredSuggestions = indonesianCities.filter((suggestion) =>
      suggestion.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredCitySuggestions(filteredSuggestions);
    setIsSuggestionsVisible(!!userInput); // Show suggestions when there's input
    setClickedSuggestion(false);
  };

  // Event handler for selecting a suggestion for Kota (city)
  const handleCitySuggestionClick = (suggestion) => {
    formik.setFieldValue("kota", suggestion);
    setCity(suggestion);
    setIsSuggestionsVisible(false); // Hide the suggestions
    setClickedSuggestion(true)
  };

  const handleSimpanAddress = () => {
    // console.log("filtered", filteredCitySuggestions);
    // console.log("city", city);
    // console.log("clicked", clickedSuggestion);

    if(address && clickedSuggestion && filteredCitySuggestions.length === 1){
      const str = `${address}, Kota ${filteredCitySuggestions[0]}`
      formik.handleChange('kota')(filteredCitySuggestions[0]);
      onClose(str)
    }else if(address && clickedSuggestion && filteredCitySuggestions.length > 1){
      const str = `${address}, Kota ${city}`
      formik.handleChange('kota')(city);
      onClose(str)
    }else if(address && !clickedSuggestion && filteredCitySuggestions.length === 1){
      const str = `${address}, Kota ${filteredCitySuggestions}`
      formik.handleChange('kota')(filteredCitySuggestions[0]);
      onClose(str)
    }else if(address && clickedSuggestion === false && filteredCitySuggestions.length > 1){
      const str = `${address}, Kota ${filteredCitySuggestions[0]}`
      formik.handleChange('kota')(filteredCitySuggestions[0]);
      onClose(str)
    }else{
      if(!address){
        if (!toast.isActive(id)) {
          toast({
            id,
            title: 'Ooops!',
            description: "Alamat tidak valid",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }
      }else{
        if (!toast.isActive(id)) {
          toast({
            id,
            title: 'Ooops!',
            description: "Kota tidak valid",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }
      }
    }
  }

    return(
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        {overlay}
          <ModalContent>
            <ModalHeader>Lokasi Event</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Alamat Lengkap</FormLabel>
                <Input onChange={(e) => {formik.setFieldValue("alamat", e.target.value); setAddress(e.target.value)}} value={formik.values.alamat} placeholder='Alamat Event' type='text' name='alamat' autoComplete='off'></Input>
                {formik.touched.alamat && formik.errors.alamat ?(
                  <Text style={{color: 'red'}}>{formik.errors.alamat}</Text>
                ) : null}
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Kota</FormLabel>
                <Input onChange={handleCityInputChange} value={city} placeholder='Kota Event' type='text' autoComplete='off' name='kota'></Input>
                {isSuggestionsVisible && (
                    <VStack mt={3} rounded={'md'} border={'1px solid black'} p={5} maxHeight={'20vh'} overflowY={'auto'} alignItems={'flex-start'}>
                      {filteredCitySuggestions.map((suggestion, index) => (
                        <Button p={5} onClick={() => handleCitySuggestionClick(suggestion)}>{suggestion}</Button>
                      ))}
                  </VStack>
                  )}
                  {formik.touched.kota && formik.errors.kota ?(
                  <Text style={{color: 'red'}}>{formik.errors.kota}</Text>
                ) : null}
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type='submit' onClick={()=>{handleSimpanAddress()}} w={'100%'} bgColor={'rgb(16, 69, 181)'} color={'white'} 
              _hover={{
                background: 'rgb(22, 97, 255)',
                color: "white",
              }}>
                Simpan
              </Button>
            </ModalFooter>
          </ModalContent>

      </Modal>
    )
}

export default LocationModal;