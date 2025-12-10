import Parent from "./components/Parent";
import { UserContext } from "./context/UserContext";

export default function App() {
  const userName = "Ultra Violet";

  return (
    <UserContext.Provider value={userName}>
      <div>
        <h1>App Component</h1>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}
