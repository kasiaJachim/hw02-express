const Contact = require("../../models/contact");

const updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (result) {
      res.json(result);
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { updateContact };
