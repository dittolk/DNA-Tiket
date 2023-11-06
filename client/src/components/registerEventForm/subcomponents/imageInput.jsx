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
                    src="https://www.bing.com/images/blob?bcid=r6CpiFUOZ0UGdu1v8QYKdEykovIZ.....9g"
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