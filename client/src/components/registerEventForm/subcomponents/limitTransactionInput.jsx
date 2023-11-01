import { Button, FormControl, FormLabel, HStack, Stack, Text, useToast } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

function LimitTransactionInput({ value, onChange }) {
    const toast = useToast()
    const id = "toast";
    const handleIncrement = () => {
        if(value < 5){
            onChange(value + 1);
        }else{
            if (!toast.isActive(id)) {
                toast({
                    id,
                    title: 'Ooops!',
                    description: "Maks. 5",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                })
            }
        }
    };
  
    const handleDecrement = () => {
      if (value > 1) {
        onChange(value - 1);
      }else{
        if (!toast.isActive(id)) {
            toast({
                id,
                title: 'Ooops!',
                description: "Min. 1",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        }
      }
    };
  
    return (
      <div>
        <FormControl>
            <FormLabel>Pengaturan Tambahan</FormLabel>
            <Stack direction={'column'}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Text>Jumlah maks. tiket per transaksi</Text>
                <Stack direction={'row'} spacing={3} alignItems={'center'}>
                    <HStack>
                        <Button size={'sm'} border={'1px solid grey'} variant={'outline'} onClick={handleDecrement}>
                        <MinusIcon />
                        </Button>
                        <Text fontSize={'md'}>{value}</Text>
                        <Button size={'sm'} border={'1px solid grey'} variant={'outline'} onClick={handleIncrement}>
                        <AddIcon />
                        </Button>
                    </HStack>
                </Stack>
                </Stack>
            </Stack>
        </FormControl>
      </div>
    );
  }
  
  export default LimitTransactionInput;