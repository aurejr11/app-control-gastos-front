import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EditExpense from "../pages/EditExpense";
import CreateExpense from "../pages/CreateExpense";
export let routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/expenses",
    element: <Expenses />,
  },
  {
    path: "/edit-expense/:id",
    element: <EditExpense />,
  },
  {
    path: "/create-expense",
    element: <CreateExpense />
  }
];
