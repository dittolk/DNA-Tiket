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
  Image,
  useToast,
  Toast,
} from "@chakra-ui/react";
import loginimage from "../asset/tugas1.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link} from "react-router-dom";

export default function LoginUser() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required"),
  });

  const toast = useToast();

  const handleSubmitLogin = async (data_input_property) => {
    try {
      // const response = await axios.get(
      //   `http://localhost:2000/users?email=${data_input_property.email}&password=${data_input_property.password}`,
      //   data_input_property
      // );
      // if (response.data.length == 1) {
      //   dispatch(setData(response.data[0]));
      //   localStorage.setItem("id", response.data[0]?.id); //? ngecek ada ga indeks ke 0, kalau ada ambil id
      //   window.location.reload();
      // } else {
      //   toast({
      //     title: "Sorry",
      //     description: "Email or Password is wrong. Please try again.",
      //     status: "error",
      //     duration: 5000,
      //     isClosable: true,
      //     position: "top",
      //   });
      // }

      Toast({
        title: "Behasil Masuk",
        description: "Kamu Berhasil Masuk.",
        status: "sukses",
        duration:5000,
        isClosable: true,
        position: "top",
      });

    } catch (err) {
      console.log(err);

      toast({
        title: "Login Gagal",
        description: "Email atau password salah. Silakan coba lagi.",
        status: "error",
        duration: 5000, 
        isClosable: true,
        position: "top", 
      });

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
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Link to={'/'}><Image src={loginimage} w="200px" h="100px" alt="Logo DNA Tiket" mb="10"/></Link>
            
            <Heading fontSize={"4xl"}>Masuk ke Akun anda</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Rasakan kemudahan dengan semua fitur canggih kami ✨
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values, action) => {
                  handleSubmitLogin(values);
                  action.resetForm();
                }}
              >
                {(props) => {
                  return (
                    <>
                      <Form>
                        <FormControl id="email">
                          <FormLabel>Email</FormLabel>
                          <Field name="email">
                            {({ field }) => (
                              <Input
                                {...field}
                                type="email"
                                placeholder="Email"
                              />
                            )}
                          </Field>
                          <ErrorMessage
                            name="email"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </FormControl>
                        <FormControl id="password">
                          <FormLabel>Password</FormLabel>
                          <Field name="password">
                            {({ field }) => (
                              <Input
                                {...field}
                                type="password"
                                placeholder="Password"
                              />
                            )}
                          </Field>
                          <ErrorMessage
                            name="password"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </FormControl>
                        <Stack spacing={10}>
                          <Stack
                            direction={{ base: "column", sm: "row" }}
                            align={"start"}
                            justify={"space-between"}
                          >
                              <Text align={"center"}>
                          Belum punya akun? {" "}
                          </Text>
                          <Text>
                          <Text as={Link} to="/registerUser" color={"blue.400"}>Daftar</Text>
                        </Text>
                          </Stack>
                          <Button
                            type="submit"
                            bgGradient="linear(to-r, #000000, rgb(16, 69, 181))"
                            color={"white"}
                            _hover={{
                              bg: "blue.500",
                            }}
                          >
                            Masuk
                          </Button>
                        </Stack>
                      </Form>
                    </>
                  );
                }}
              </Formik>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
