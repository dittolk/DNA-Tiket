import React from "react";
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";

export const Invoice = ({ transaksi }) => {
  return (
    <Box p="4" borderWidth="1px" borderRadius="lg">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Detail Pembayaran
      </Text>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Detail Pembayaran</TableCaption>
        <Thead>
          <Tr>
            <Th>Nama Lengkap</Th>
            <Th>Email</Th>
            <Th>Harga Tiket</Th>
            <Th>Discount</Th>
            <Th>Admin</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{transaksi.nama_lengkap}</Td>
            <Td>{transaksi.email}</Td>
            <Td>{transaksi.total_harga_tiket.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}</Td>
            <Td>{transaksi.diskon.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}</Td>
            <Td>{transaksi.biaya_layanan.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}</Td>
          </Tr>
        </Tbody>
      </Table>
      <Box mt="4">
        <Text fontSize="lg" fontWeight="bold">
          Total: {transaksi.total_bayar.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          Metode Pembayaran: {transaksi.metode_pembayaran}
        </Text>
      </Box>
    </Box>
  );
};
