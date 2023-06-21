const express = require('express');

const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;
// Enable CORS for your frontend domain
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend domain
};

app.use(express.json());
// Use the CORS middleware
app.use(cors(corsOptions));
// Endpoint to handle form submissions
app.post('/submitForm', (req, res) => {

    const { walAddress, projectUrl } = req.body;

    console.log(req.body.walAddress)
    // Append the form data to the JSON file
    const data = {
        projectUrl,
        imageUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
        walAddress
    };
    // console.log(data)
    // Path to your JSON file
    const filePath = '../collections1.json';

    fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err) {
            console.error('Error reading data from the file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        let jsonData = [];
        try {
            jsonData = JSON.parse(fileData);
            // console.log(jsonData)
        } catch (parseError) {
            console.error('Error parsing JSON file:', parseError);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        jsonData.push(data);
        const updatedData = JSON.stringify(jsonData, null, 2);

        fs.writeFile(filePath, updatedData, 'utf8', (writeError) => {
            if (writeError) {
                console.error('Error writing data to the file:', writeError);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            res.status(200).json({ message: 'Data appended to the file successfully' });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
