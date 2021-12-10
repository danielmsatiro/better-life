import { MyGroupsProvider } from "./mygroups";
import { UserProvider } from "./user";
import { MyHabitsProvider } from "./myHabits";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <MyHabitsProvider>
        <MyGroupsProvider>{children}</MyGroupsProvider>
      </MyHabitsProvider>
    </UserProvider>
  );
};

export default Providers;
