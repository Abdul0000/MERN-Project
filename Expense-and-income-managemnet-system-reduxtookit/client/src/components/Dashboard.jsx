import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, } from "recharts";
import { getExpenses } from "../ReduxStore/feature/ExpensesActions.js";
import store from "../ReduxStore/store";

const Dashboard = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  useEffect(() => {
    store.dispatch(getExpenses());
  }, []);

  let income = 0;
  let expense = 0;

  expenses.filter((item) => {
    if (item.income) {
      income += item.income;
    } else {
      expense += item.expense;
    }
  });

  const filter = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  const month = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "June",
    7: "July",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const monthData = [{ name: "Jan", income: 1000, expense: 5000 }];
  expenses.filter((item) => {
    const date = new Date(item.date);
    const findData = monthData.find((i) => i.name === month[date.getMonth()]);
    if (!findData) {
      monthData.push({
        name: month[date.getMonth()],
        income: item.income || 0,
        expense: item.expense || 0,
      });
    } else {
      findData["income"] += item.income || 0;
      findData["expense"] += item.expense || 0;
    }
  });

  const COLORS = ["#4CAF50", "#FF5722"];
  const width = "100%";
  const height = 300;

  return (
    <div className="flex items-start justify-between p-8 bg-gray-100 gap-4 overflow-x-auto">
      <div className="w-[33%] min-w-[350px] bg-white shadow-lg rounded-lg p-8">
        <ResponsiveContainer width={width} height={height}>
          <LineChart data={monthData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#4CAF50" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="expense" stroke="#FF5722" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="w-[33%] min-w-[350px] bg-white shadow-lg rounded-lg p-8">
        <ResponsiveContainer width={width} height={height}>
          <PieChart>
            <Pie
              data={filter}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {filter.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-[33%] min-w-[350px] bg-white shadow-lg rounded-lg p-8">
        <ResponsiveContainer width={width} height={height}>
          <BarChart data={monthData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#4CAF50" />
            <Bar dataKey="expense" fill="#FF5722" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;