import Parent from "./components/Parent";
import { userContext } from "./context/UserContext";

export default function App() {
  const userName = "Ultra Violet";

  return (
    <userContext.Provider value={userName}>
      <div>
        <h1>App Component</h1>
        <Parent />
      </div>
    </userContext.Provider>
  );
}
