import React, { useState } from "react";
import { Box, Button, ButtonGroup, Flex, Progress, useToast } from "@chakra-ui/react";
import { Personal } from "../components/personal/personal";
import { MetodePembayaran } from "../components/personal/metodePembayaran";
import { Invoice } from "../components/personal/invoice";
import { useSelector } from "react-redux";
import axios from "axios";


export const PersonalPage = () => {
  const toast = useToast();
  const token = localStorage.getItem('token')

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [formData, setFormData] = useState({});
  const [selectedPayment, setSelectedPayment] = useState({});
  const [isDataValid, setIsDataValid] = useState(false)
  const [isDataValid2, setIsDataValid2] = useState(false)
  const [isDataValid3, setIsDataValid3] = useState(false)
  
  const data = useSelector((state) => state.transaksi.value);
  const user = useSelector((state) => state.user.value )

  const transaksi = {
    EventId: data.EventId,
    total_harga_tiket: data.total_harga_tiket,
    biaya_layanan: data.biaya_layanan,
    diskon: data.diskon,
    total_bayar: data.total_bayar,
    nama_lengkap: formData.namalengkap,
    email: formData.email,
    telp: formData.tel,
    metode_pembayaran: selectedPayment,
  };

  const handlePostTransaksi = async (data) => {
    data.UserId = user.id
    try{
      const response = await axios.post("http://localhost:2000/transaction/add-transaction", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast({
        title: "Success",
        description: "Transaksi berhasil dibuat",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }catch(err){
      console.log(err);
    }
  }

  console.log(transaksi);

  const PageDisplay = () => {
    if (step === 1) {
      return <Personal formData={formData} setFormData={setFormData} setIsDataValid={setIsDataValid} setIsDataValid2={setIsDataValid2} setIsDataValid3={setIsDataValid3} />;
    } else if (step === 2) {
      return <MetodePembayaran selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />;
    } else {
      return <Invoice transaksi={transaksi} />;
    }
  };

  console.log(isDataValid);

  return (
    <Box borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" maxWidth={800} p={6} m="10px auto" as="form">
      <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
      {PageDisplay()}
      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Button
              onClick={() => {
                setStep(step - 1);
                setProgress(progress - 33.33);
              }}
              isDisabled={step === 1}
              colorScheme="blue"
              variant="outline"
              w="7rem"
              mr="5%"
            >
              Back
            </Button>
            <Button
              w="7rem"
              isDisabled={(step === 3) || (isDataValid && isDataValid2 && isDataValid3) === false?true:false} 
              onClick={() => {
                setStep(step + 1);
                if (step === 3) {
                  setProgress(100);
                } else {
                  setProgress(progress + 33.33);
                }
              }}
              colorScheme="blue"
              variant="outline"
            >
              Next
            </Button>
          </Flex>
          {step === 3 ? (
            <Button
              w="7rem"
              colorScheme="blue"
              variant="solid"
              onClick={() => {
                console.log(transaksi);
                handlePostTransaksi(transaksi);
              }}
            >
              Submit
            </Button>
          ) : null}
        </Flex>
      </ButtonGroup>
    </Box>
  );
};