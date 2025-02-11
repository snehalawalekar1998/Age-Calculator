const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Function to calculate age from birth year
function calculateAge(year) {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
}

app.get("/age", (req, res) => {
    const year = parseInt(req.query.year);

    if (isNaN(year) || year <= 0 || year > new Date().getFullYear()) {
        return res.status(400).json({ error: "Invalid birth year" });
    }

    res.json({ age: calculateAge(year) });
});

// Start server on 192.168.100.6:5002
app.listen(5002, "192.168.100.6", () => {
    console.log("📅 Age Calculator API running on http://192.168.100.6:5002");
})
