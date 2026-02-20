const create = async (Model, req, res) => {
  try {
    req.body.removed = false;
    const result = await new Model({
      ...req.body,
    }).save();

    return res.status(200).json({
      success: true,
      result,
      message: 'Successfully Created',
    });
  } catch (error) {
    // THIS LINE IS THE KEY: It will print the exact error to your terminal
    console.error("!!! DATABASE VALIDATION ERROR !!!", error);
    
    return res.status(400).json({
      success: false,
      message: error.message,
      stack: error
    });
  }
};
