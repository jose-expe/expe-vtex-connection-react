export const placeOrderFromCart = async (orderFormId) => {
  try {
    const response = await fetch(
      `/api/checkout/pub/orderForm/${orderFormId}/transaction`,
      {
        method: "POST",
        body: JSON.stringify({
          referenceId: orderFormId,
          value: 100,
          referenceValue: 100,
          interestValue: 0,
          savePersonalData: true,
        }),
      }
    );

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};
