import "./App.css";
import { Captcha, Form, FormCompletion } from "./components";
import { useCaptcha } from "./context/captcha-context";
function App() {
  const {
    captcha: { submitted },
  } = useCaptcha();
  return (
    <main className="h-screen flex justify-center items-center">
      {!submitted ? <Form /> : <FormCompletion />}
    </main>
  );
}
export default App;
