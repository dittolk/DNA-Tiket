import React from 'react';
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';

export const Invoice = ({ invoiceData }) => {
  return (
    <Box p="4" borderWidth="1px" borderRadius="lg">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Detail Pembayaran
      </Text>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Detail Pembayaran</TableCaption>
        <Thead>
          <Tr>
            <Th>Jumlah yang harus dibayar</Th>
            <Th>Order ID</Th>
            <Th>Harga Tiket</Th>
            <Th>Discount</Th>
            <Th>Admin</Th>
          </Tr>
        </Thead>
        <Tbody>
          {invoiceData.items.map((item, index) => (
            <Tr key={index}>
              <Td>{item.name}</Td>
              <Td>{item.quantity}</Td>
              <Td>${item.price}</Td>
              <Td>${item.quantity * item.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box mt="4">
        <Text fontSize="lg" fontWeight="bold">
          Total: ${invoiceData.total}
        </Text>
      </Box>
    </Box>
  );
};


