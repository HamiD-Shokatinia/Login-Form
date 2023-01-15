import { AuthenticationForm } from "./component/AuthenticationForm";
import Footer from "./component/Footer";

function LoginForm() {
  return (
    <div style={{ display: "flex", width: "100%", minHeight: "100vh" }}>
      <div style={{ backgroundColor: "lightgrey", width: "40%"  }}>hello</div>
      <div
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width: "60%",
          position:'relative'
        }}
      >
        <AuthenticationForm></AuthenticationForm>
       <Footer></Footer>
      </div>
    </div>
  );
}

export default LoginForm;
