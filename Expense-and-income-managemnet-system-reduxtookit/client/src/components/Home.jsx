import { useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { CiExport } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import ModalAddExpense from "./ModalAddExpense";
import store from "../ReduxStore/store";
import {
  deleteExpenses,
  getExpenses,
} from "../ReduxStore/feature/ExpensesActions.js";
import * as XLSX from "xlsx";

const Home = () => {
  const auth = useSelector(state => state.auth.user)
  const user = auth?auth._id:''
  const getStartDate = useRef(null);
  const getEndDate = useRef(null);
  const [filteredData, setFilteredData] = useState(null);
  const [search, setSearch] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const expensesData = useSelector((state) => state.expenses.expenses);
  const expensesData_t = expensesData.map((expense) => ({
    ...expense,
    date: new Date(expense.date).toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
    description: expense.description,
    income: expense.income,
    expense: expense.expense,
  }));

  let finalData = expensesData_t;

  const HandleOnFilter = () => {
    const startDate = new Date(getStartDate.current.value);
    const endDate = new Date(getEndDate.current.value);

    const filter = expensesData_t.filter((expense) => {
      const expenseDate = new Date(expense.date);
      
      return expenseDate >= startDate && expenseDate <= endDate;
    });
    setFilteredData(filter);
    setSearch(null);
  };

  if (filteredData) {
    finalData = filteredData;
  }

  const HandleOnchange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filter = expensesData_t.filter((expense) => {
      return expense.description.toLowerCase().includes(searchValue);
    });
    setFilteredData(null);
    setSearch(filter);
  };

  if (search) {
    finalData = search;
  }

  // Handle "Select All" checkbox
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);

    const updatedCheckedItems = {};
    finalData.forEach((expense) => {
      updatedCheckedItems[expense._id] = isChecked;
    });
    setCheckedItems(updatedCheckedItems);
  };

  const handleCheckboxSingleChange = (e, id) => {
    const checked = e.target.checked;
    setCheckedItems((prev) => ({
      ...prev,
      [id]: checked,
    }));

    if (!checked) {
      setIsChecked(false);
    } else if (
      Object.values({ ...checkedItems, [id]: checked }).every((v) => v)
    ) {
      setIsChecked(true);
    }
  };
  let ids = [];
    Object.entries(checkedItems).forEach(([key, value]) => {
      if (value) {
        ids.push(key);
      }
    });

  const HandleOnDelete = () => {
    store.dispatch(deleteExpenses({ids}));
    store.dispatch(getExpenses());
  };

  useEffect(() => {
    store.dispatch(getExpenses({user}));
  }, []);

  // Export to Excel
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(finalData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");
    XLSX.writeFile(workbook, "Expenses.xlsx");
  };

  const [invisible, setInvisible] = useState(false);
  const HandleOnAdd = () => {
    setInvisible(true);
  };

  return (
    <div className="overflow-x-auto mb-14">
      <div className="h-[100px] flex items-center justify-between mr-10 mt-6">
        <p className="ml-10 text-2xl font-semibold text-slate-700">
          TRANSACTIONS ACTIVITY
        </p>
        <div className="flex items-center justify-center gap-5 px-10">
          <input
            onChange={HandleOnchange}
            className="shadaow-md w-[500px] h-[50px] px-4 text-xl ml-4 border border-shadow-800 rounded-md outline-none text-gray-500"
            type="search"
            placeholder="Search"
          ></input>
          <IoMdAdd
            onClick={HandleOnAdd}
            className="cursor-pointer w-[100px] h-[50px] px-4 text-xl border border-gray-400 rounded-md outline-none bg-slate-300 text-slate"
            type="button"
          />
          <CiExport
            onClick={handleExport}
            className="h-8 w-8 cursor-pointer font-bold"
          />
        </div>
      </div>

      <div className="h-[100px] flex items-center justify-between mr-24">
        <div className="flex items-center justify-center gap-5 px-10">
          <input
            ref={getStartDate}
            className="cursor-pointer w-[220px] h-[50px] px-4 text-xl border border-shadow-400 rounded-md outline-none text-gray-500"
            type="date"
          ></input>
          <p>To</p>
          <input
            ref={getEndDate}
            className="cursor-pointer w-[220px] h-[50px] px-4 text-xl border border-shadow-400 rounded-md outline-none text-gray-500"
            type="date"
          ></input>
          <button
            onClick={HandleOnFilter}
            className="cursor-pointer w-[100px] h-[50px] px-4 text-xl border border-gray-400 rounded-md outline-none bg-slate-300 text-slate-700"
            type="button"
          >
            Filter
          </button>
        </div>
        <button
          onClick={HandleOnDelete}
          className="cursor-pointer w-[100px] h-[50px] px-4 text-xl border border-gray-400 rounded-md outline-none bg-slate-300 text-slate-700"
          type="button"
        >
          Delete
        </button>
        <ModalAddExpense invisible={invisible} setInvisible={setInvisible} />
      </div>

      <table className="min-w-full mt-6 divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-10 py-4 text-left text-normal font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th className="px-10 py-4 text-left text-normal font-medium text-gray-500 uppercase tracking-wider">
              DATE
            </th>
            <th className="px-10 py-4 text-left text-normal font-medium text-gray-500 uppercase tracking-wider">
              DESCRIPTION
            </th>
            <th className="px-10 py-4 text-left text-normal font-medium text-gray-500 uppercase tracking-wider">
              EXPENSE/INCOME
            </th>
            <th className="px-10 py-4 text-left text-normal font-medium text-gray-500 uppercase tracking-wider">
              <input
                onChange={handleCheckboxChange}
                checked={isChecked}
                className="h-[20px] w-[20px] cursor-pointer"
                type="checkbox"
              ></input>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {finalData.map((line, index) => (
            <tr key={index}>
              <td className="px-10 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-10 py-4 whitespace-nowrap">{line.date}</td>
              <td className="px-10 py-4 whitespace-nowrap">
                {line.description}
              </td>
              <td className="px-10 py-4 whitespace-nowrap">
                {line.income > 0 ? line.income : line.expense}
              </td>
              <td className="px-10 py-4 whitespace-nowrap text-sm font-medium">
                <input
                  onChange={(e) => handleCheckboxSingleChange(e, line._id)}
                  className="h-[20px] w-[20px] cursor-pointer"
                  type="checkbox"
                  checked={checkedItems[line._id] || false}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
