// import "./App.css";
import {
  CTA,
  Definition,
  Footer,
  Header,
  Hero,
  PersonalityGroups,
} from "./components/layout";
import "./index.css";

function App() {
  return (
    <div className="bg-[#FFFBF2] min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <Definition />
      <PersonalityGroups />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
