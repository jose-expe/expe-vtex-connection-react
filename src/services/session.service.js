export const createSession = async () => {
  try {
    const response = await fetch("/api/sessions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        public: {
          variable1: {
            value: "value1",
          },
          variable2: {
            value: "value2",
          },
        },
      }),
      redirect: "follow",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error({ error });
  }
};

export const getSession = async () => {
  try {
    const response = await fetch("/api/sessions?items=*", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error({ error });
  }
};

// fetch(
//   "/api/checkout/pub/orderForm/1b9a1895b8d74ce9a60bf212a6be0c8b/transaction",
//   {
//     method: "POST",
//     body: JSON.stringify({
//       referenceId: "1b9a1895b8d74ce9a60bf212a6be0c8b",
//       value: 100,
//       referenceValue: 100,
//       interestValue: 0,
//       savePersonalData: true,
//       optinNewsLetter: false,
//     }),
//   }
// )
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));
