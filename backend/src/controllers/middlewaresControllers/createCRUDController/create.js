const create = async (Model, req, res) => {
  console.log("🚀 CREATE REQUEST RECEIVED FOR MODEL:", Model.modelName);
  console.log("📦 BODY DATA:", req.body);

  try {
    const result = await new Model(req.body).save();
    console.log("✅ SAVE SUCCESSFUL");
    return res.status(200).json({
      success: true,
      result,
      message: 'Successfully Created',
    });
  } catch (err) {
    console.error("❌ DATABASE SAVE ERROR:", err.message); // THIS IS THE LINE WE NEED
    return res.status(500).json({
      success: false,
      result: null,
      message: 'Oops there is an Error',
      error: err.message,
    });
  }
};

module.exports = create;
