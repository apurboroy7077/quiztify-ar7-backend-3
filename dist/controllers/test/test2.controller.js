export const test2Controller = async (request, response) => {
    try {
        const receivedData = request.body;
        console.log(receivedData);
        response.status(200).json({ _: "" });
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error });
    }
};
//# sourceMappingURL=test2.controller.js.map