import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from "../store/actions/employees";
import { fetchTheTribes } from "../store/actions/tribes";
import AddEmployee from "./AddEmployee";
import Employee from "./Employee";

export default function EmployeesTable() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employeesList)
  const loading = useSelector((state) => state.employees.loading)


  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      dispatch(fetch());
      dispatch(fetchTheTribes())
    }
    return () => {
      ignore = true;
    };
  }, [dispatch]);



  const listEmployees = employees.map((employee) => (
    <Employee
      key={employee.id}
      employee={employee}
    ></Employee>
  ));
  if (!loading) {
    return (
      <>
        <AddEmployee></AddEmployee>
        <div className="container-fluid main-employees p-10 align-items-center">
          <table className="table table-hover shadow p-3 mb-5 bg-body rounded my-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Tribe</th>
                <th scope="col">Start date</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>{listEmployees}</tbody>
          </table>
        </div>
      </>
    );
  } else {
    return (
  
<div className="d-flex justify-content-center align-items-center vh-100">
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
</div>
    );
  }
}
