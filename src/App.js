import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "khalid el mati",
    location: "Agadir, Morocco",
    email: "khalidgara8@gmail.com",
    availability: "Open for work",
    brand:
      "I graduated with a fundamental license at FP Ouarzazate in Mathematics and Computer Science. " +
      "Currently, I am following a training course at Orange Digitale center within the Web development department." +
      "I'm open to a new opportunity as a full-stack developer whether it's internship, freelance or work.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
