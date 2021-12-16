import { MyGroupsProvider } from "./mygroups";
import { UserProvider } from "./user";
import { MyHabitsProvider } from "./myHabits";
import { SearchGroupsProvider } from "./searchGroups";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <MyHabitsProvider>
        <SearchGroupsProvider>
          <MyGroupsProvider>{children}</MyGroupsProvider>
        </SearchGroupsProvider>
      </MyHabitsProvider>
    </UserProvider>
  );
};

export default Providers;
