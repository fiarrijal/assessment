exports.index = (req, res, next) => {
  try {
    return res.status(200).json({ status: "success", data: "Hello Youtube" });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
