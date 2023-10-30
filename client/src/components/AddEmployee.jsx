import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addEmp } from "../store/actions/employees";

export default function AddEmployee() {
  const tribes = useSelector((state) => state.tribes.tribesList)

  const dispatch = useDispatch();


  const formik = useFormik({
    initialValues: {
      name: '',
      title: '',
      tribe: '',
  
    },
    validate: (values) => {

      const errors = {};

      if (!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.title) {
        errors.title = 'Title is required';
      }
      if (!values.tribe) {
        errors.tribe = 'Tribe is required';
      }
      if (values.tribe === "Select tribe") {
        errors.tribe = 'Tribe must be selec';
      }


      return errors;
    },
    onSubmit: async (values, { resetForm }) => {

      try {

        dispatch(addEmp(values));
        handleClose();
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const listTribes = tribes.map((tribe) => (
    <option key={tribe.id} value={tribe.id}>{tribe.name}</option>
));



  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false); formik.resetForm();}
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="container-fluid my-4">
        <Button variant="primary" onClick={handleShow}>
          Add
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add employees</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                autoFocus
                onChange={formik.handleChange} 
                value={formik.values.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="title"
                placeholder="Title"
                onChange={formik.handleChange} 
                value={formik.values.title}
              />
            </Form.Group>
            <Form.Select name="tribe" onChange={formik.handleChange} value={formik.values.tribe} aria-label="Default select example">
            <option>Select tribe</option>
              {listTribes}
    </Form.Select>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={() => formik.handleSubmit()} disabled={Object.keys(formik.errors).length > 0 || !formik.dirty}>
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
