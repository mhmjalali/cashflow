import Budget from './budget/budget';
import FinanceActions from './finance-actions';
import FinantialSnapShot from './finantial-snap-shot';

const Home = () => {
  return (
    <div className="flex flex-col gap-3">
      <FinantialSnapShot />
      <FinanceActions />
      <Budget />
    </div>
  );
};

export default Home;
