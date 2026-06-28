import Budget from "./budget/budget";
import FinantialSnapShot from "./finantial-snap-shot";
import QuickActions from "./quick-actions";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <FinantialSnapShot />
      <QuickActions />
      <Budget />
    </div>
  );
};

export default Home;
