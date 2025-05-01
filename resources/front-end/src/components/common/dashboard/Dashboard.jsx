import {Route, Routes} from "react-router";
import MainDashboard from "./dashboardComponents/MainDashboard.jsx";
import AddExpense from "./dashboardComponents/transactionManagement/AddExpense.jsx";
import AddIncome from "./dashboardComponents/transactionManagement/Income/AddIncome.jsx";

const Dashboard = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainDashboard/>}/>
                <Route path="/add-expenses" element={<AddExpense/>}/>
                <Route path="/add-incomes" element={<AddIncome/>}/>
            </Routes>
        </div>
    );
};

export default Dashboard;
