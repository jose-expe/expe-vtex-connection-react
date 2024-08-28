import { useEffect } from "react";
import GoogleButton from "vtex-google-pay-btn";

function App() {
  const initSesssion = async () => {};

  useEffect(() => {
    initSesssion();
  }, []);

  return (
    <section>
      <h1>VTEX react connection</h1>
      <GoogleButton
        propsButton={{
          buttonSizeMode: "fill",
          buttonRadius: 50,
          className: "btn-google-pay",
          buttonColor: "default",
          environment: "PRODUCTION",
          style: {
            width: "100%",
            paddingTop: 15,
            height: 50,
            fontSize: 22.4,
          },
        }}
      />
    </section>
  );
}

export default App;
