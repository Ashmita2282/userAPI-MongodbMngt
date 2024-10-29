const validateUser = (req, res, next) => {
  try {
    const { firstName, lastName,email, hobby } = req.body;

    if (!firstName || !lastName || !email || !hobby) {
      return res.status(400).json({
        message: "All fields (firstName, lastName, email, hobby) are required",
      });
    }

    next();
  } catch (err) {
    console.error("Error in validation middleware:", err);
    res.status(500).json({
      success: false,
      message: "Error in validation",
      error: err.message,
    });
  }
};

export default validateUser;
