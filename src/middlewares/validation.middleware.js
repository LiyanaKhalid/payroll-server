const validatePayload = (schema) => {
  return (req, res, next) => {
    const options = { abortEarly: false, stripUnknown: true };
    const { error, value } = schema.validate(req.body, options);

    if (error) {
      const errors = error.details.reduce((acc, detail) => {
        const field = detail.context.key;
        if (!acc[field]) acc[field] = [];
        acc[field].push(detail.message);
        return acc;
      }, {});

      return res.status(400).json({
        error: "Invalid request payload",
        details: errors,
      });
    }

    // Replace the request body with the validated data
    req.body = value;
    next();
  };
};

module.exports = { validatePayload };
