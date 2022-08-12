import { Header, TableCustomer } from "./components";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function App() {
  const dataCustomerWA = [
    {
      name: "John Doe",
      order: "Whatsapp",
      numberPhone: 81282821282,
      email: "johndoe@gmail.com",
      bread: 2,
      description: "Coklat Semua",
    },
    {
      name: "Doe",
      order: "Whatsapp",
      numberPhone: 81282821282,
      email: "doe@gmail.com",
      bread: 3,
      description: "Coklat Semua",
    },
    {
      name: "Alexander",
      order: "Whatsapp",
      numberPhone: 81282821282,
      email: "alex@gmail.com",
      bread: 3,
      description: "Coklat Semua",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const renderData = () => {
  //   if(chooseData === "WhatsApp") {
  //     return (
  //       <TableCustomer data={dataCustomerWA} />
  //     )
  //    } else if(chooseData === "Gmail") {
  //     return (
  //       <TableCustomer data={dataCustomerEmail} />
  //     )
  //    } else if (chooseData === "Call") {
  //     return (
  //       <TableCustomer data={dataCustomerCall} />
  //     )
  //    }
  // }
  const [sumber, SetSumber] = useState("");
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [jmlRoti, setJmlRoti] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [email, setEmail] = useState("")

  const submit = (e) => {
    e.preventDefault();
    const newData = dataCustomerWA
    const newDataCustomer = {
      name: nama,
      order: sumber,
      numberPhone: noHp,
      email: email,
      bread: jmlRoti,
      description: keterangan,
    }
    newData.push(newDataCustomer)
    setShow(false)
  }

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          marginTop: "50px",
        }}
      >
        <div>
          <FaWhatsapp size={20} />
          <FaGoogle size={20} style={{ marginLeft: "15px" }} />
          <BsFillTelephoneFill size={20} style={{ marginLeft: "15px" }} />
        </div>
        <div>
          <Button variant="primary" onClick={handleShow}>
            Add New
          </Button>
        </div>
      </div>
      <TableCustomer data={dataCustomerWA} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pemesanan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Sumber Pemesanan</div>
          <Form.Select
            aria-label="Default select example"
            value={sumber}
            onChange={(e) => SetSumber(e.target.value)}
          >
            <option value="WhatsApp">WhatsApp</option>
            <option value="call">Call</option>
            <option value="Email">Email</option>
          </Form.Select>
          <div>Nama</div>
          <Form.Control
            aria-describedby="basic-addon1"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <div>Nomor HP</div>
          <Form.Control
            value={noHp}
            onChange={(e) => setNoHp(e.target.value)}
            aria-describedby="basic-addon1"
          />
          <div>Jumlah Roti</div>
          <Form.Control
            value={jmlRoti}
            onChange={(e) => setJmlRoti(e.target.value)}
            aria-describedby="basic-addon1"
          />
            <div>Email</div>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="basic-addon1"
          />
          <div>Keterangan</div>
          <Form.Control
            as="textarea"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            style={{ height: "100px" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={submit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
