import { Box, Center, Grid, Heading, Img, useRadio, useRadioGroup } from "@chakra-ui/react";
import logobca from "../../asset/image/BCA.jpg";
import logobni from "../../asset/image/BNI.jpg";
import logobri from "../../asset/image/BRI.png";
import logoalfamart from "../../asset/image/Alfamart.png";
import logoindomart from "../../asset/image/Indomaret.png";
import logodana from "../../asset/image/DANA.jpg";

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={5}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const MetodePembayaran = ({ selectedPayment, setSelectedPayment }) => {
  const options = [
    { value: "bca", label: "BCA", image: logobca },
    { value: "bni", label: "BNI", image: logobni },
    { value: "bri", label: "BRI", image: logobri },
    { value: "dana", label: "DANA", image: logodana },
    { value: "alfamart", label: "Alfamart", image: logoalfamart },
    { value: "indomaret", label: "Indomaret", image: logoindomart },
  ];

  const handleChange = (value) => {
    setSelectedPayment(`${value}`);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    onChange: handleChange,
  });

  const group = getRootProps();

  return (
    <Box>
      <Heading mb="1em">
        <Center>Metode Pembayaran</Center>
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap="10px" alignItems="center" {...group}>
        {options.map((option) => {
          const radio = getRadioProps({ value: option.value });
          return (
            <RadioCard key={option.value} {...radio}>
              <Img src={option.image} alt={option.label} />
            </RadioCard>
          );
        })}
      </Grid>
    </Box>
  );
};
