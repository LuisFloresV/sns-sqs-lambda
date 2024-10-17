exports.handler = async (event) => {
    console.log("Received SQS message:", JSON.stringify(event, null, 2));

    for (const record of event.Records) {
        const messageBody = record.body;
        console.log("Processing message:", messageBody);

        // Add your message processing logic here
    }

    return { statusCode: 200 };
};
