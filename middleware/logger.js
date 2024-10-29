const logger = (req, res, next) => {
  const originalSend = res.send.bind(res); // Preserve the original send method

  res.send = (body) => {
    try {
      // Log request details
      console.log(`Method: ${req.method}`);
      console.log(`URL: ${req.url}`);
      console.log(`Status: ${res.statusCode}`);
    } catch (err) {
      console.error("Error in logger middleware:", err);
      // Handle error if logging fails
      res.status(500).json({
        success: false,
        message: "Error in request logging",
        error: err.message,
      });
    }

    return originalSend(body); // Call the original send method
  };

  next(); // Proceed to the next middleware/route handler
};

export default logger;
