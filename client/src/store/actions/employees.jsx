import { axiosInstance } from "../../index.js";
import {
  fetchEmployees,
  fetchEmployeesError,
  deleteEmployee,
  addEmployee,
  updateEmployee,
  loadEmployees,
} from "../slices/employeeSlice";

export function fetch() {
  return async (dispatch) => {
    try {
      dispatch(loadEmployees());
      const employeesData = await axiosInstance
        .get("/employees")
        .then((response) => response.data);

        employeesData.forEach((employee) => {
        employee["tribe"] = employee.tribe.name;
      });

      dispatch(fetchEmployees(employeesData))
    } catch (error) {
      dispatch(fetchEmployeesError);
    }
  };
}

export function deleteEmp(employee) {
  return async (dispatch) => {
    try {
      dispatch(loadEmployees());
      const success = await axiosInstance
        .delete(`/employees/${employee.id}`)
        .then((response) => response.data);
      dispatch(deleteEmployee(success));
      dispatch(fetch());
    } catch (error) {
      console.log(error);
    }
  };
}

export function addEmp(employee) {
  return async (dispatch) => {
    try {
      dispatch(loadEmployees());
      const body = {
        name: employee.name,
        title: employee.title,
        tribe_id: employee.tribe,
      };
      const success = await axiosInstance
        .post(`/employees`, body)
        .then((response) => response.data);
      dispatch(addEmployee(success));
      dispatch(fetch());
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateEmp(employee) {
  return async (dispatch) => {
    try {
      dispatch(loadEmployees());
      const body = {
        name: employee.name,
        title: employee.title,
        tribe_id: employee.tribe,
      };

      const success = await axiosInstance
        .put(`/employees/${employee.id}`, body)
        .then((response) => response.data);

      dispatch(updateEmployee(success));
      dispatch(fetch());
    } catch (error) {
      console.log(error);
    }
  };
}