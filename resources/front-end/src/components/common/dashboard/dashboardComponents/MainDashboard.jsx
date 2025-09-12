import React from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
} from "recharts";

const data = [
    { month: "Jan", income: 4000, expense: 2400 },
    { month: "Feb", income: 3000, expense: 1398 },
    { month: "Mar", income: 2000, expense: 9800 },
    { month: "Apr", income: 2780, expense: 3908 },
    { month: "May", income: 1890, expense: 4800 },
    { month: "Jun", income: 2390, expense: 3800 },
    { month: "Jul", income: 3490, expense: 4300 },
];

const MainDashboard = () => {
    return (
        <div className="p-4 sm:ml-64">
            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="block p-6 bg-gray-200 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Monthly Income
                    </h5>
                    <p className="font-bold text-gray-700 dark:text-gray-400">
                        Rs. 20,000
                    </p>
                </div>
                <div className="block p-6 bg-gray-200 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Monthly Expense
                    </h5>
                    <p className="font-bold text-gray-700 dark:text-gray-400">
                        Rs. 20,000
                    </p>
                </div>
                <div className="block p-6 bg-gray-200 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Monthly Income
                    </h5>
                    <p className="font-bold text-gray-700 dark:text-gray-400">
                        Rs. 20,000
                    </p>
                </div>
                <div className="block p-6 bg-gray-200 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Monthly Expense
                    </h5>
                    <p className="font-bold text-gray-700 dark:text-gray-400">
                        Rs. 20,000
                    </p>
                </div>
            </div>

            {/* Chart Section */}
            <div className="max-w-full w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-2">
                <h3 className="text-xl flex justify-center font-bold mb-4 text-gray-900 dark:text-white">
                    Monthly Income vs Expense
                </h3>
                <div className="flex justify-center">
                    <ResponsiveContainer
                        width="80%"
                        height={350}
                        barCategoryGap="10%"
                    >
                        <BarChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" stroke="#8884d8" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="income" fill="#4CAF50" barSize={30} />
                            <Bar
                                dataKey="expense"
                                fill="#F44336"
                                barSize={30}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;
