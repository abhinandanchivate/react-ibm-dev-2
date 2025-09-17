import "./App.css";
import Header from "./core/components/layouts/Header";
import Landing from "./core/components/layouts/Landing";
import Footer from "./core/components/layouts/Footer";
import RootRouter from "./RootRouter";

function App() {
  const appName = "IBM-Connector";
  const user = { name: "Abhi", email: "abhi@gmail.com" };
  const handleLogout = () => {
    alert("Logout clicked");
  };
  return (
    <>
      <Header appName={appName} user={user} logOut={handleLogout} />
      <RootRouter />

      <Footer />
    </>
  );
}

export default App;
