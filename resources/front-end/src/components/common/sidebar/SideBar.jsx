import DashBoardButton from "./sideBarButtons/DashBoardButton.jsx";
import TransactionManagementButton from "./sideBarButtons/TransactionManagementButton.jsx";
import BudgetManagementButton from "./sideBarButtons/BudgetManagementButton.jsx";
import BurgerButton from "./sideBarButtons/BurgerButton.jsx";

const SideBar = () => {
    return (
        <div>
            <BurgerButton/>

            <aside id="cta-button-sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                       <DashBoardButton/>
                        <TransactionManagementButton/>
                        <BudgetManagementButton/>

                    </ul>

                </div>
            </aside>
        </div>
    );
};

export default SideBar;
