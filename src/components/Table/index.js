import React from "react";
import Table from "react-bootstrap/Table";

const TableCustomer = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Sumber Pesanan</th>
          <th>Email</th>
          <th>HP</th>
          <th>Jumlah Roti</th>
          <th>Keterangan</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((datas, i) => (
          <tr>
            <td>{datas.name}</td>
            <td>{datas.order}</td>
            <td>{datas.email}</td>
            <td>{datas.numberPhone}</td>
            <td>{datas.bread}</td>
            <td>{datas.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableCustomer;
