// import { Container } from './styles';
import { useState } from "react";

import DashboardMenu from "../../components/Menu";
import ConfModal from "../../components/ConfModal";

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
    </div>
  );
};

export default Dashboard;
