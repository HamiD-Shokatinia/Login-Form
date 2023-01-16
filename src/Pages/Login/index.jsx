import { AuthenticationForm } from "../../Components/AuthenticationForm";
import Footer from "../../Components/Footer";
import Slider from "../../Components/slider";

function LoginForm() {
  return (
    <div style={{ display: "flex", width: "100%", minHeight: "100vh" }}>
      <div style={{ backgroundColor: "#f6f6f6", width: "40%" }}>
        <Slider />
      </div>
      <div
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width: "60%",
          position: "relative",
        }}
      >
        <AuthenticationForm></AuthenticationForm>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default LoginForm;
