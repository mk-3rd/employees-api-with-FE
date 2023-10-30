import { useFormik } from "formik";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from 'react-redux';
import { updateEmp } from "../store/actions/employees";

export default function UpdateEmployee({ employee }) {
  const dispatch = useDispatch();
  
  const tribes = useSelector((state) => state.tribes.tribesList)

  let tribe = 1;
  if (tribes.length !== 0) {
    tribe = (tribes.filter((tribe) => tribe.name === employee.tribe)[0].id)
  }

  const formik = useFormik({
    initialValues: {
      id: employee.id,
      name: employee.name,
      title: employee.title,
      tribe: tribe,
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.title) {
        errors.title = "Title is required";
      }
      if (!values.tribe) {
        errors.tribe = "Tribe is required";
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        dispatch(updateEmp(values))
        handleClose();
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    formik.values.tribe = tribe
    setShow(true);
  }
  
 const listTribes = tribes.map((tribe) => (
     <option key={tribe.id} value={tribe.id}>{tribe.name}</option>
));

  return (
    <>
      <div className="container-fluid my-4">
        <Button id='updatebtn' variant="primary" onClick={handleShow}>
          Update
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update employee</Modal.Title>
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
            <Form.Select
              name="tribe"
              onChange={formik.handleChange}
              value={formik.values.tribe}
              aria-label="Default select example"
            >
              {listTribes}
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={() => formik.handleSubmit()}
            disabled={Object.keys(formik.errors).length > 0}
          >
            Update Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
