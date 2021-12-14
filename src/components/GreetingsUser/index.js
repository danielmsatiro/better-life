import { MdWavingHand } from "react-icons/md";

import { useContext } from "react";
import { UserContext } from "../../providers/user";

import { GreetingStyle } from "./styles";

function Greetings() {
  const { userName } = useContext(UserContext);

  return (
    <GreetingStyle>
      <h1>Hello, {userName}</h1>
      <span>👋</span>
    </GreetingStyle>
  );
}
export default Greetings;
