import express from "express";

export const test2Controller = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = request.body;
    console.log(receivedData);
    response.status(200).json({ _: "" });
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
    response.status(500).json({ message: error });
  }
};
