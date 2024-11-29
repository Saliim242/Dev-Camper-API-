const Bootcamp = require("../models/Bootcam.model");
// @Desc  : Get All BootCamps
// @Route : GET /api/v1/bootCamps
// @access : public
exports.getBootCamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, msg: "Get All Bootcamps" , data: bootcamps});
    
  } catch (error) {

    res.status(400).json({success: false , msg:error.message})
    
  }
};

// @Desc  : Get Single BootCamps
// @Route : GET /api/v1/bootCamps/:id
// @access : public
exports.getBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get Single  Bootcamp for ${req.params.id}`,
  });
};

// @Desc  :   Create BootCamps
// @Route : POST /api/v1/bootCamps
// @access : private
exports.createBootCamp = async (req, res, next) => {
  try {
    const { name } = req.body;
    const nameExists = await Bootcamp.findOne({ name: name });
    if (nameExists) {
      return res
        .status(400)
        .json({
          success: false,
          msg: "Bootcam with this name already exists.",
        });
    }
    const bootcamp = await Bootcamp.create(req.body);

    res
      .status(201)
      .json({ success: true, msg: "Create New Bootcamp", data: bootcamp });
  } catch (error) {
    console.error("Creating Bootcam Error" + error.message);
    res.status(500).send({ success: false, msg: "Server Error" });
  }
};

// @Desc  : Update BootCamp
// @Route : PUT /api/v1/bootCamps/:id
// @access : private
exports.updateBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update Bootcamp ${req.params.id}` });
};

// @Desc  : Delete   BootCamps
// @Route : Delete /api/v1/bootCamps/:id
// @access : private
exports.deleteBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete Bootcamp ${req.params.id}` });
};
