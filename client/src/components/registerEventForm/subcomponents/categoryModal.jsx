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
    Box,
    RadioGroup,
    Select,
    useRadio,
    useRadioGroup,
    useToast,
  } from '@chakra-ui/react'
import { useState } from 'react'

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props)
  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box {...checkbox} cursor='pointer' borderWidth='1px' borderRadius='md' boxShadow='md'
        _checked={{
          bg: '#38A169',
          color: 'white',
          borderColor: '#38A169',
        }}
        px={5}
        py={3}
        mt={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}

function CategoryModal({ isOpen, onClose, formik, overlay }) {
    //local state untuk menyimpan value pada modal kategori
  const [category, setCategory] = useState("Pilih kategori event")
  const [topic, setTopic] = useState("Pilih topik event")
  const [radio, setRadio] = useState('Berbayar')
  const toast = useToast()
  const id = "id-toast"

  const options = ['Berbayar', 'Gratis']
  const handleRadioChange = (value) => {
    formik.handleChange('jenisEvent')(value);
    setRadio(value);
  };

  const { getRadioProps } = useRadioGroup({
    name: 'jenisEvent',
    defaultValue: 'Berbayar',
    onChange: handleRadioChange,
  })

  //data dummy sementara untuk kategori
  const eventCategory = [
    'Pertunjukan',
    'Turnamen/Kompetisi',
    'Seminar/Talkshow',
    'Konser',
    'Pameran',
    'Pertemuan/Konferensi',
    'Pesta',
    'Pertandingan Olahraga',
    'Lomba',
    'Festival',
    'Pelatihan/Workshop',
    'Pendakian',
    'Bazaar/Pasar Malam',
    'Film Screening',
    'Lainnya',
  ];
  const eventTopic = [
    'Anak, Keluarga',
    'Bisnis',
    'Desain, Foto, Video',
    'Fashion, Kecantikan',
    'Film, Sinema',
    'Game, E-Sports',
    'Hobi, Kerajinan Tangan',
    'Investasi, Saham',
    'Karir, Pengembangan Diri',
    'Keagamaan',
    'Kesehatan, Kebugaran',
    'Keuangan, Finansial',
    'Lingkungan Hidup',
    'Makanan, Minuman',
    'Marketing',
    'Musik',
    'Olahraga',
    'Otomotif',
    'Sains, Teknologi',
    'Seni, Budaya',
    'Sosial, Hukum, Politik',
    'Standup Comedy',
    'Pendidikan, Beasiswa',
    'Tech, Start-Up',
    'Wisata & Liburan',
    'Lainnya',
  ];

  
  const handleSimpanKategori = () => {
    if(formik.values.topikEvent){
      const categoryValues = `${category} > ${topic} > ${radio === 'Berbayar' ? 'Berbayar' : 'Gratis'}`;
      onClose(categoryValues, radio)
      
    }else{
      if (!toast.isActive(id)) {
        toast({
          id,
          title: 'Ooops!',
          description: "Format/Topik tidak boleh kosong",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      }
    }
  };

    return(
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset='slideInBottom'
        isCentered
      >
        {overlay}
          <ModalContent>
            <ModalHeader>Kategori</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Format</FormLabel>
                  <Select name="formatEvent" value={formik.values.formatEvent} onChange={(e) => {
                    setCategory(e.target.value);
                    formik.setFieldValue("formatEvent", e.target.value);
                    
                  }} defaultValue=''>
                    <option value="" disabled hidden>Pilih kategori event</option>
                    {eventCategory.map((item, index) => (
                      <option key={index} value={item} onch>
                        {item}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Topik</FormLabel>
                  <Select name="topikEvent" value={formik.values.topikEvent} onChange={(e) => {
                      setTopic(e.target.value);
                      formik.setFieldValue("topikEvent", e.target.value);
                    }} defaultValue=''>
                      <option value='' disabled hidden>Pilih topik event</option>
                      {eventTopic.map((item, index) => (
                        <option key={index} value={item} onch>
                          {item}
                        </option>
                      ))}
                    </Select>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Jenis event</FormLabel>
                  <RadioGroup>
                    {options.map((value) => {
                        const radio = getRadioProps({ value })
                        return (
                          <RadioCard key={value} {...radio}>
                            {value}
                          </RadioCard>
                        )
                      })}
                  </RadioGroup>
                </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type='submit' onClick={handleSimpanKategori} w={'100%'} bgColor={'rgb(16, 69, 181)'} color={'white'} 
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

export default CategoryModal;