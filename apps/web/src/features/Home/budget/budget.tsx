import BudgetOverview from "./budget-overview";
import BudgetList from "./budget-list";

const Budget = () => {
  return (
    <div className="flex flex-col gap-4">
      <BudgetOverview />
      <BudgetList />
    </div>
  );
};

export default Budget;
