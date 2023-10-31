import { Button, Center, FormControl, FormLabel, Input, Modal, ModalHeader, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Stack, useDisclosure, Image } from "@chakra-ui/react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginimage from "../asset/dnalogin.png"
// import { setData } from "../redux/userSlice";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid email address format"),
  password: Yup.string().min(4, "Minimum 4 Character").required("Password is required"),
});

export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.get(`http://localhost:2000/users?email=${data.email}&password=${data.password}`);

      if (response.data[0]?.id) {
        // dispatch(setData(response.data[0]));
        localStorage.setItem("id", response.data[0]?.id);
        navigate("/beranda");
        window.location.reload();
      } else {
        alert("Account not found");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Masuk
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, action) => {
            //console.log(values)
            handleSubmit(values);
            action.resetForm();
          }}
        >
          {() => {
            return (
              <Form>
                <ModalContent h="500px" w={"200vw"}>
                  <Center marginTop={10}>
                 <Image src={loginimage} w="50px" h="50x" alt="Logo DNA Tiket" />
                  </Center>
                  <ModalHeader textAlign="center" marginTop={2}>MASUK DI DNA TIKET</ModalHeader>
                    
                  <ModalCloseButton />
                  <ModalBody>
                    <Stack spacing="5" marginTop="10px">
                      <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input as={Field} name="email" type="email" autoComplete="off" variant={"flushed"} />
                        
                        <ErrorMessage name="email" component="div" style={{ color: "red" }} />
                      </FormControl>
                      <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input as={Field} name="password" type="password" autoComplete="off" variant={"flushed"}/>
                        <ErrorMessage name="password" component="div" style={{ color: "red" }} />
                      </FormControl>
                    </Stack>
                  </ModalBody>
                  <ModalFooter style={{ display: "flex", justifyContent: "center" }}>
                   <Button
                      width="50vw"
                      bg="blue.400"
                      color="white"
                      _hover={{
                      bg: "blue.500",
                      }}
                     type="submit"
                    >
                       Login
                    </Button>
                    </ModalFooter>

                </ModalContent>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};