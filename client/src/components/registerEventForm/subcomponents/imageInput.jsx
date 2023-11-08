import { Button, FormControl, Img, Input, Stack } from "@chakra-ui/react";

const ImageInput = ({ onChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      onChange(file);
    }
  };

  return (
    <Stack mt={3}>
        <label>
        <Input type="file" display="none" onChange={handleFileChange}/>
            <Button as="span" h={'auto'} w={'auto'} bgColor={'white'} _hover={{}}>
                <Img rounded={'lg'}
                    src="https://pastorjess.com/uploads/8/0/0/0/80007388/shutterstock-300283754_1_orig.jpg"
                    alt="Select Image"
                    style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    }}
                />
            </Button>
        </label>
    </Stack>
  );
};

export default ImageInput;