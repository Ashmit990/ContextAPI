import { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function GrandChild() {
  const userName = useContext(userContext);

  return (
    <p>GrandChild: Hello {userName}</p>
  );
}
