
import ComA from "./ComA";
import { StatusProvider } from "./context/ContextStatus";

const App = () => {
  return (
    <>
      <StatusProvider>
        <ComA />
      </StatusProvider>
    </>
  );
};
export default App;
