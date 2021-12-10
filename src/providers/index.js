import { MyGroupsProvider } from "./mygroups";
import { UserProvider } from "./user";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <MyGroupsProvider>{children}</MyGroupsProvider>
    </UserProvider>
  );
};

export default Providers;
