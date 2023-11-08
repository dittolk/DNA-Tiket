import { FormControl, FormLabel, Input, FormHelperText, InputGroup, Heading, InputLeftElement } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

export const Personal = ({ formData, setFormData, setIsDataValid, setIsDataValid2, setIsDataValid3 }) => {
  return (
    <form>
      <Heading as="center" marginBottom="1em">
        Informasi Pribadi
      </Heading>
      <FormControl>
        <FormLabel htmlFor="namalengkap" fontWeight="normal">
          Nama Lengkap
        </FormLabel>
        <Input
          id="namalengkap"
          type="text"
          variant="flushed"
          size="md"
          value={formData.namalengkap}
          onChange={(event) => {
            setFormData({ ...formData, namalengkap: event.target.value });
            if (event.target.value) {
              setIsDataValid(true);
            } else {
              setIsDataValid(false);
            }
          }}
        />
      </FormControl>

      <FormControl mt="3%">
        <FormLabel htmlFor="email" fontWeight="normal">
          Email address
        </FormLabel>
        <Input id="email" type="email" variant="flushed" size="md" value={formData.email} 
        onChange={(event) => {
          setFormData({ ...formData, email: event.target.value });
          if (event.target.value) {
            setIsDataValid2(true);
          } else {
            setIsDataValid2(false);
          }
        }}/>
        <FormHelperText>Example: John_Doe@gmail.com</FormHelperText>
      </FormControl>

      <FormControl mt="3%">
        <FormLabel htmlFor="tel" fontWeight="normal">
          No Ponsel
        </FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.300" />
          </InputLeftElement>
          <Input id="tel" type="tel" placeholder="phone number" variant="flushed" size="md" value={formData.tel}
          onChange={(event) => {
            setFormData({ ...formData, tel: event.target.value });
            if (event.target.value) {
              setIsDataValid3(true);
            } else {
              setIsDataValid3(false);
            }
          }} />
        </InputGroup>
      </FormControl>
    </form>
  );
};