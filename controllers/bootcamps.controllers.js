// @Desc  : Get All BootCamps
// @Route : GET /api/v1/bootCamps
// @access : public
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Get All Bootcamps" });
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
exports.createBootCamp = (req, res, next) => {
  res.status(201).json({ success: true, msg: "Create New Bootcamp" });
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
