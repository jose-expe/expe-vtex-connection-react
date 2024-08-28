export const getOrderForm = async () => {
  try {
    const response = await fetch(
      "/api/checkout/pub/orderForm/4dcb0544ec114d758af1021101bf3028",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();

    return result;
  } catch (error) {
    console.error({ error });
  }
};
