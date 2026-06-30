import Paid from "./paid";
import Received from "./received";
import Saving from "./saving";

const FinanceActions = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-2"
      dir="rtl"
    >
      <div className="flex items-center justify-between gap-4">
        <Paid />
        <Received />
      </div>
      <Saving />
    </div>
  );
};

export default FinanceActions;
