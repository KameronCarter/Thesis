const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.put("/change-password", (req, res) => {  // Endpoint for changing user password
    const { email, securityWord, newPassword } = req.body;

    if (!email || !securityWord || !newPassword) {
        return res.status(400).json({ error: "All fields are required." }); //Predefines error message if all fields is missing
    }

    User.findOne({ email }).then(user => {
        if (!user) return res.status(404).json({ error: "User not found" }); //Predefines error message if user is not found within the database

        if (user.securityWord !== securityWord)
            return res.status(400).json({ error: "Security word is incorrect" }); //Predefines error message if the security word is incorrect

        user.password = newPassword;
        return user.save()
            .then(() => res.json({ message: "Password updated successfully!" }))
            .catch(err => {
                console.error("Error saving password:", err);
                res.status(500).json({ error: "Server error" });
            });
    }).catch(err => {
        console.error("Error changing password:", err);
        res.status(500).json({ error: "Server error" });
    });
});


module.exports = router;