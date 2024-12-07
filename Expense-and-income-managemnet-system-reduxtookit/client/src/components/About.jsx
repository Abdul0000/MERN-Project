import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-6 py-10">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-slate-700 mb-4">
          About Expense Management System
        </h1>
        <p className="text-lg leading-7 mb-6">
          The Expense Management System is a robust and user-friendly platform designed to help you track, manage, and analyze your income and expenses effectively. Whether you're an individual managing personal finances or a business monitoring operational costs, our system provides insightful tools to make informed financial decisions.
        </p>
        <p className="text-lg leading-7 mb-6">
          With powerful data visualization tools such as charts and graphs, you can gain a clear understanding of your financial habits. The system allows users to log transactions, view historical data, and generate reports, making financial tracking seamless and efficient.
        </p>
        <p className="text-lg leading-7 mb-6">
          Our mission is to empower users to achieve better financial control and foster smart financial planning with the help of technology.
        </p>
        <p className="text-lg leading-7">
          Thank you for choosing the Expense Management System. We are committed to continuously improving your experience!
        </p>
      </div>
    </div>
  );
};

export default About;
