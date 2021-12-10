// import { Container } from './styles';
import { useState } from "react";

import ConfModal from "../../components/ConfModal";

import LastActivities from "../../components/LastActivities";
import DashboardMenu from "../../components/Menu";

const Dashboard = () => {
  const [delHabit, setDelHabit] = useState(false);

  const handleDelHabit = () => {
    setDelHabit(!delHabit);
  };

  return (
    <div>
      <DashboardMenu />
      <ConfModal isOpen={delHabit} setIsOpen={handleDelHabit} />
      <button onClick={() => setDelHabit(true)}>Open Modal</button>
      <LastActivities />
    </div>
  );
};

export default Dashboard;
