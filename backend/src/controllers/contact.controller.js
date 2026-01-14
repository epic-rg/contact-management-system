import Contact from "../models/contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, interest, message } = req.body;

    // Basic validation
    if (!name || !email || !interest || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      interest,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Create contact error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
