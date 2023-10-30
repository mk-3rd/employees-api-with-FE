import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
    name: "employees",
    initialState: {
        employeesList: [],
        success: false,
        loading: true,
    },
    reducers: {
        loadEmployees: (state) => {
            state.loading = true;
        },

        fetchEmployees: (state, action) => {
            state.employeesList = action.payload;
            state.loading = false;
        },


        fetchEmployeesError: async (state) => {
            state.employeesList = [];
            state.loading = false;
        },

        createEmployee: async (state, success) => {
            state.success = success.payload;
        },

        deleteEmployee: (state, action) => {
            state.success = action.payload

        },

        addEmployee: (state, action) => {
            state.success = action.payload
        },
        
        updateEmployee (state, action) {
            state.success = action.payload
        }
    }
})

export const { createEmployee, fetchEmployees, fetchEmployeesError, deleteEmployee, addEmployee, updateEmployee, loadEmployees} = employeeSlice.actions;

export default employeeSlice.reducer;