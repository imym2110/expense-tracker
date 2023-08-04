import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    expenseList: [],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      // console.log("---->", action);
      currentSlice.expenseList.push(action.payload);
    },
    setIncomeAction: (currentSlice, action) => {
      console.log("--->");
      currentSlice.income = action.payload;
    },
  },
});

export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;
