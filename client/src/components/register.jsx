import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setData } from '../redux/usersSlice';

function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [showErrorOutline, setShowErrorOutline] = useState(false);
  const [username, setUsername] = useState(""); // State untuk menyimpan nama pengguna
  const [referralCode, setReferralCode] = useState("");
  const data_referral = useRef();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required"),
  });

  const handleSubmitRegister = async (data) => {
    data.referral = referralCode;
    try {
      const response = await axios.post("http://localhost:2000/users", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Register</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={{
              name: "",
              username: "",
              email: "",
              password: "",
              password_confirmation: "",
              bio: "Hey there! I'm using twitter.",
              followers_list: ["Mark Zuckeberg", "Joe Biden"],
              following_list: ["Mark Zuckeberg"],
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values, action) => {
              const { password_confirmation, ...formData } = values;
              if (values.password !== values.password_confirmation) {
                // Passwords don't match, set an error for confirmPassword field
                setShowErrorOutline(true);
                setTimeout(() => {
                  setShowErrorOutline(false);
                }, 2000);
                toast({
                  title: "Error",
                  description: "Please re-type the correct password.",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                  position: "top",
                });
                action.setFieldValue("password", "");
                action.setFieldValue("password_confirmation", "");
              } else {
                // Passwords match, proceed with form submission
                handleSubmitRegister(formData);
                action.resetForm();
                toast({
                  title: "Success",
                  description: "Your account has been created.",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                  position: "top",
                });
                onClose();
              }
            }}
          >
            {(props) => {
              return (
                <Form>
                  <ModalHeader>Buat Akun mu</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Field name="name">
                        {({ field }) => (
                          <Input
                            {...field}
                            type="text"
                            placeholder="Your name"
                            ref={data_referral}
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Username</FormLabel>
                      <Field name="username">
                        {({ field }) => (
                          <Input
                            {...field}
                            type="text"
                            placeholder="Username"
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="username"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Field name="email">
                        {({ field }) => (
                          <Input {...field} type="email" placeholder="Email" />
                        )}
                      </Field>
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Password</FormLabel>
                      <Field name="password">
                        {({ field }) => (
                          <Input
                            {...field}
                            type="password"
                            placeholder="Password"
                            borderColor={
                              showErrorOutline ? "red.500" : undefined
                            }
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Password Confirmation</FormLabel>
                      <Field name="password_confirmation">
                        {({ field }) => (
                          <Input
                            {...field}
                            type="password"
                            placeholder="Re-type password"
                            borderColor={
                              showErrorOutline ? "red.500" : undefined
                            }
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="password_confirmation"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button type="submit" colorScheme="blue" mr={3}>
                      Create Account
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                    {/* <Button onClick={generateReferralCode}>Generate Referral</Button> */}
                  </ModalFooter>
                </Form>
              );
            }}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
