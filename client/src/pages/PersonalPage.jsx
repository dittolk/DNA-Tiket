import React, { useState } from "react";
import { Box, Button, ButtonGroup, Flex, Progress, useToast } from "@chakra-ui/react";
import { Personal } from "../components/personal/personal";
import { MetodePembayaran } from "../components/personal/metodePembayaran";
import { Invoice } from "../components/personal/invoice";

export const PersonalPage = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [formData, setFormData] = useState({});
  const [selectedPayment, setSelectedPayment] = useState({});
  const invoiceData = {
    items: [
      { name: "Product A", quantity: 2, price: 50 },
      { name: "Product B", quantity: 1, price: 30 },
      { name: "Product C", quantity: 3, price: 20 },
    ],
    total: 230,
  };

  const PageDisplay = () => {
    if (step === 1) {
      return <Personal formData={formData} setFormData={setFormData} />;
    } else if (step === 2) {
      return <MetodePembayaran selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />;
    } else {
      return <Invoice invoiceData={invoiceData} />;
    }
  };

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
              isDisabled={step === 3}
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
                console.log(formData, selectedPayment);
                toast({
                  title: "Account created.",
                  description: "We've created your account for you.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
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
