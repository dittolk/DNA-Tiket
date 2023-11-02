"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import loginimage from "../asset/tugas1.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";

function RegisterUser() {
  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match") // Validasi konfirmasi password
      .required("Confirm Password is required"),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toast = useToast();
  
  const handleSubmitRegister = async (data) => {
    console.log(data);
    
    try {
      const response = await axios.post("http://localhost:2000/user/register-user", data);
      toast({
        title: "Akun Telah Dibuat",
        description: "Anda sekarang dapat menggunakan akun Anda.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack w={"200vw"} spacing={8} mx={"auto"} maxW={"lg"}>
          <Stack align={"center"}>
          <Link to={'/'}><Image src={loginimage} w="100px" h="50x" alt="Logo DNA Tiket"/></Link>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Daftar
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Silahkan bikin akun disini 😁😮
            </Text>
          </Stack>

          <Formik
            initialValues={{ name: "", username: "", email: "", password: "" }}
            validationSchema={RegisterSchema}
            onSubmit={(values, action) => {
              handleSubmitRegister(values);
              action.resetForm();
            }}
          >
            {(props) => {
              return (
                <Form>
                  <Box
                    rounded={"lg"}
                    // bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                  >
                    <Stack spacing={4}>
                      <Box>
                        <FormControl id="firstName" isRequired>
                          <FormLabel>Nama Lengkap</FormLabel>
                          <Field name="name">
                            {({ field }) => (
                              <Input
                                {...field}
                                type="text"
                                placeholder="Nama Lengkap"
                                autoComplete="off"
                              />
                            )}
                          </Field>
                          <ErrorMessage
                            name="name"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="userName" isRequired>
                          <FormLabel>Username</FormLabel>
                          <Field name="username">
                            {({ field }) => (
                              <Input
                                {...field}
                                type="text"
                                placeholder="Username"
                                autoComplete="off"
                              />
                            )}
                          </Field>
                          <ErrorMessage
                            name="username"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </FormControl>
                      </Box>

                      <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Field name="email">
                          {({ field }) => (
                            <Input
                              {...field}
                              type="email"
                              placeholder="Email"
                              autoComplete="off"
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name="email"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </FormControl>
                      <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Field name="password">
                            {({ field }) => (
                              <Input
                                {...field}
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="off"
                              />
                            )}
                          </Field>
                          <InputRightElement h={"full"}>
                            <Button
                              variant={"ghost"}
                              onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                              }
                            >
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ color: "red" }}
                      />
                      <FormControl id="confirmPassword" isRequired>
                        <FormLabel>Konfirmasi Password</FormLabel>
                        <InputGroup>
                          <Field name="confirmPassword">
                            {({ field }) => (
                              <Input
                                {...field}
                                placeholder="Konfirmasi Password"
                                type={showConfirmPassword ? "text" : "password"}
                                autoComplete="off"
                              />
                            )}
                          </Field>
                          <InputRightElement h={"full"}>
                            <Button
                              variant={"ghost"}
                              onClick={() =>
                                setShowConfirmPassword(
                                  (showConfirmPassword) => !showConfirmPassword
                                )
                              }
                            >
                              {showConfirmPassword ? (
                                <ViewIcon />
                              ) : (
                                <ViewOffIcon />
                              )}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        style={{ color: "red" }}
                      />

                      <Box>
                        <FormControl id="Kode Referral">
                          <FormLabel>Kode Referral</FormLabel>
                          <Field name="kode_Referral">
                            {({ field }) => (
                              <Input
                                {...field}
                                type="text"
                                placeholder="Kode Referral"
                                autoComplete="off"
                              />
                            )}
                          </Field>
                        </FormControl>
                      </Box>

                      <Stack spacing={10} pt={2}>
                        <Button
                          type="submit"
                          bgGradient="linear(to-r, #000000, rgb(16, 69, 181))"
                          loadingText="Submitting"
                          size="lg"
                          color={"white"}
                          _hover={{}}
                        >
                          Daftar
                        </Button>
                      </Stack>
                      <Stack pt={6}>
                        <Text align={"center"}>
                          Apakah sudah punya Akun?{" "}
                          <Text as={Link} to="/login_user" color={"blue.400"}>Masuk</Text>
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Stack>
      </Flex>
    </>
  );
}

export default RegisterUser;
