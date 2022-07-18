import ResponsiveAppBar from "./navbar";
import logo from "./Assets/LandingPageIcon.svg";

const LandingPage = () => {
  return (
    <div className="App">
      <ResponsiveAppBar loginVisivility={true} logoutVisivility={false} />
      <div
        style={{
          height: "calc(100vh - 70px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              alignSelf: "center",
              fontSize: "90px",
              fontWeight: "300",
            }}
          >
            ¡Bienvenido
            <br /> a tu web <br />
            de entrenamiento
            <br /> personal!
          </h1>
        </div>
        <div style={{ width: "50%", alignSelf: "center" }}>
          <img src={logo} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
