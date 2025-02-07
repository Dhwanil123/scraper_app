const express = require("express");
const { join } = require("path");
const Review = require("./db");  // Import MongoDB model
const scrapeReviews = require("./indiamart_scrapper/reviewScraper");


await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
process.env.PUPPETEER_CACHE_DIR = join(__dirname, ".cache", "puppeteer");

const app = express();
app.use(express.json());


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!", details: err.message });
});

app.get("/reviews", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Error fetching reviews" });
    }
});

// Route to scrape and store reviews
// app.get("/scrape", async (req, res) => {
//     try {
//         const reviews = await scrapeReviews();
//         await Review.insertMany(reviews);
//         res.json({ message: "Scraping and storing completed", data: reviews });
//     } catch (error) {
//         res.status(500).json({ error: "Error scraping data" });
//     }
// });


// app.get("/scrape", async (req, res) => {
//     console.log("Scrape API called"); // Debugging
//     try {
//         const reviews = await scrapeReviews();
//         console.log("Scraped data:", reviews); // Debugging
//         await Review.insertMany(reviews);
//         res.json({ message: "Scraping and storing completed", data: reviews });
//     } catch (error) {
//         console.error("Scraping Error:", error);
//         res.status(500).json({ error: "Error scraping data" });
//     }
// });



app.post("/scrape", async (req, res) => {
    const { url } = req.body; // Get URL from request body

    if (!url || !url.startsWith("https://www.indiamart.com/")) {
        return res.status(400).json({ 
            error: "Invalid or missing URL.",
            message: "Please provide a valid IndiaMART URL." 
        });
    }

    try {
        console.log(`Scraping URL: ${url}`);
        const reviews = await scrapeReviews(url);
        if (reviews.length === 0) {
            return res.status(404).json({ 
                message: "No reviews found", 
                details: "The specified page might not have any reviews" 
            });
        }
        await Review.insertMany(reviews);
        res.json({ message: "Scraping and storing completed", data: reviews });
    } catch (error) {
        console.error("Scraping Error:", error);
        res.status(500).json({ error: "Error scraping data" });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
