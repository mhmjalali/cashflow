import Budget from "./budget/budget";
import FinantialSnapShot from "./FinantialSnapShot";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <FinantialSnapShot />
      <Budget />
    </div>
  );
};

export default Home;
