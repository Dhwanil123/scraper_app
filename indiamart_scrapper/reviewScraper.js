// // const puppeteer = require("puppeteer");

// // async function scrapeReviews() {
// //     const browser = await puppeteer.launch({ headless: true });
// //     const page = await browser.newPage();

// //     await page.goto("https://www.indiamart.com/triveni-world/testimonial.html", { waitUntil: "networkidle2" });

// //     for (let i = 0; i < 3; i++) {
// //         const loadMoreButton = await page.$("#rat_more");
// //         if (!loadMoreButton) break;
// //         await loadMoreButton.click();
// //     }

// //     const reviews = await page.evaluate(() => {
// //         const reviewElements = document.querySelectorAll(".FM_rvwC.FM_w3");
// //         let reviewData = [];

// //         reviewElements.forEach(review => {
// //             let name = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:first-child")?.innerText.trim() || "N/A";
// //             let location = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:nth-child(3)")?.innerText.trim() || "N/A";
// //             let date = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:first-child")?.innerText.trim() || "N/A";
// //             let product = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:nth-child(3)")?.innerText.replace("Product Name : ", "").trim() || "N/A";
// //             let reviewText = review.querySelector(".FM_m15.FM_C0.FM_f16.FM_mtn25.FM_wrd")?.innerText.trim() || "N/A";

// //             let ratingElement = review.querySelector(".FM_flsRt.FM_pa");
// //             let rating = ratingElement ? (parseInt(ratingElement.style.width) / 20) : "N/A";

// //             reviewData.push({ name, location, date, product, rating, reviewText });
// //         });

// //         return reviewData;
// //     });

// //     await browser.close();
// //     return reviews;
// // }

// // module.exports = scrapeReviews;


// // const puppeteer = require("puppeteer");

// // async function scrapeReviews(url) {
// //     if (!url) {
// //         throw new Error("URL is required");
// //     }

// //     const browser = await puppeteer.launch({ headless: true });
// //     const page = await browser.newPage();

// //     try {
// //         await page.goto(url, { waitUntil: "networkidle2" });

// //         for (let i = 0; i < 3; i++) {
// //             const loadMoreButton = await page.$("#rat_more");
// //             if (!loadMoreButton) break;
// //             await loadMoreButton.click();
// //         }

// //         const reviews = await page.evaluate(() => {
// //             const reviewElements = document.querySelectorAll(".FM_rvwC.FM_w3");
// //             let reviewData = [];

// //             reviewElements.forEach(review => {
// //                 let name = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:first-child")?.innerText.trim() || "N/A";
// //                 let location = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:nth-child(3)")?.innerText.trim() || "N/A";
// //                 let date = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:first-child")?.innerText.trim() || "N/A";
// //                 let product = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:nth-child(3)")?.innerText.replace("Product Name : ", "").trim() || "N/A";
// //                 let reviewText = review.querySelector(".FM_m15.FM_C0.FM_f16.FM_mtn25.FM_wrd")?.innerText.trim() || "N/A";

// //                 let ratingElement = review.querySelector(".FM_flsRt.FM_pa");
// //                 let rating = ratingElement ? (parseInt(ratingElement.style.width) / 20) : "N/A";

// //                 reviewData.push({ name, location, date, product, rating, reviewText });
// //             });

// //             return reviewData;
// //         });

// //         return reviews;
// //     } catch (error) {
// //         throw new Error("Error scraping the page: " + error.message);
// //     } finally {
// //         await browser.close();
// //     }
// // }

// // module.exports = scrapeReviews;



// const puppeteer = require("puppeteer");

// async function scrapeReviews(url) {
//     if (!url) {
//         throw new Error("URL is required");
//     }

//     const browser = await puppeteer.launch({
//         headless: true,
//         executablePath: 'C:/path-to-chromium/chrome.exe', // Update this path
//         args: ['--no-sandbox', '--disable-setuid-sandbox']
//     });

//     const page = await browser.newPage();

//     try {
//         await page.goto(url, { waitUntil: "networkidle2" });

//         for (let i = 0; i < 3; i++) {
//             const loadMoreButton = await page.$("#rat_more");
//             if (!loadMoreButton) break;
//             await loadMoreButton.click();
//         }

//         const reviews = await page.evaluate(() => {
//             const reviewElements = document.querySelectorAll(".FM_rvwC.FM_w3");
//             let reviewData = [];

//             reviewElements.forEach(review => {
//                 let name = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:first-child")?.innerText.trim() || "N/A";
//                 let location = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:nth-child(3)")?.innerText.trim() || "N/A";
//                 let date = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:first-child")?.innerText.trim() || "N/A";
//                 let product = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:nth-child(3)")?.innerText.replace("Product Name : ", "").trim() || "N/A";
//                 let reviewText = review.querySelector(".FM_m15.FM_C0.FM_f16.FM_mtn25.FM_wrd")?.innerText.trim() || "N/A";

//                 let ratingElement = review.querySelector(".FM_flsRt.FM_pa");
//                 let rating = ratingElement ? (parseInt(ratingElement.style.width) / 20) : "N/A";

//                 reviewData.push({ name, location, date, product, rating, reviewText });
//             });

//             return reviewData;
//         });

//         return reviews;
//     } catch (error) {
//         throw new Error("Error scraping the page: " + error.message);
//     } finally {
//         await browser.close();
//     }
// }

// module.exports = scrapeReviews;




// const puppeteer = require("puppeteer");

// async function scrapeReviews(url) {
//     if (!url) {
//         throw new Error("URL is required");
//     }

//     let browser;
//     try {
//         // Launch the browser and handle executablePath error
//         browser = await puppeteer.launch({
//             headless: true,
//             executablePath: 'C:/path-to-chromium/chrome.exe', // Ensure this path is correct
//             args: ['--no-sandbox', '--disable-setuid-sandbox']
//         });

//         const page = await browser.newPage();
//         await page.goto(url, { waitUntil: "networkidle2" });

//         for (let i = 0; i < 3; i++) {
//             const loadMoreButton = await page.$("#rat_more");
//             if (!loadMoreButton) break;
//             await loadMoreButton.click();
//         }

//         const reviews = await page.evaluate(() => {
//             const reviewElements = document.querySelectorAll(".FM_rvwC.FM_w3");
//             let reviewData = [];

//             reviewElements.forEach(review => {
//                 let name = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:first-child")?.innerText.trim() || "N/A";
//                 let location = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:nth-child(3)")?.innerText.trim() || "N/A";
//                 let date = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:first-child")?.innerText.trim() || "N/A";
//                 let product = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:nth-child(3)")?.innerText.replace("Product Name : ", "").trim() || "N/A";
//                 let reviewText = review.querySelector(".FM_m15.FM_C0.FM_f16.FM_mtn25.FM_wrd")?.innerText.trim() || "N/A";

//                 let ratingElement = review.querySelector(".FM_flsRt.FM_pa");
//                 let rating = ratingElement ? (parseInt(ratingElement.style.width) / 20) : "N/A";

//                 reviewData.push({ name, location, date, product, rating, reviewText });
//             });

//             return reviewData;
//         });

//         return reviews;
//     } catch (error) {
//         throw new Error("Error scraping the page: " + error.message);
//     } finally {
//         if (browser) {
//             await browser.close();
//         }
//     }
// }

// module.exports = scrapeReviews;






// const puppeteer = require("puppeteer");

// async function scrapeReviews(url) {
//     if (!url) {
//         throw new Error("URL is required");
//     }

    
// const browser = await puppeteer.launch({
//     executablePath: 'C:/Users/Dhruval Mehta/.cache/puppeteer/chrome/win64-132.0.6834.110/chrome-win64/chrome.exe',
//     headless: true

//   });
//         const page = await browser.newPage();

//     try {
//         await page.goto(url, { waitUntil: "networkidle2" });

//         for (let i = 0; i < 3; i++) {
//             const loadMoreButton = await page.$("#rat_more");
//             if (!loadMoreButton) break;
//             await loadMoreButton.click();
//         }

//         const reviews = await page.evaluate(() => {
//             const reviewElements = document.querySelectorAll(".FM_rvwC.FM_w3");
//             let reviewData = [];

//             reviewElements.forEach(review => {
//                 let name = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:first-child")?.innerText.trim() || "N/A";
//                 let location = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:nth-child(3)")?.innerText.trim() || "N/A";
//                 let date = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:first-child")?.innerText.trim() || "N/A";
//                 let product = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:nth-child(3)")?.innerText.replace("Product Name : ", "").trim() || "N/A";
//                 let reviewText = review.querySelector(".FM_m15.FM_C0.FM_f16.FM_mtn25.FM_wrd")?.innerText.trim() || "N/A";

//                 let ratingElement = review.querySelector(".FM_flsRt.FM_pa");
//                 let rating = ratingElement ? (parseInt(ratingElement.style.width) / 20) : "N/A";

//                 reviewData.push({ name, location, date, product, rating, reviewText });
//             });

//             return reviewData;
//         });

//         return reviews;
//     } catch (error) {
//         throw new Error("Error scraping the page: " + error.message);
//     } finally {
//         await browser.close();
//     }
// }

// module.exports = scrapeReviews;




// const puppeteer = require("puppeteer");

// async function scrapeReviews(url) {
//     if (!url) {
//         throw new Error("URL is required");
//     }

//     let browser;
//     try {
//         // Launch browser without specifying executable path
//         browser = await puppeteer.launch({
//             executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/google-chrome-stable',

//             args: [
//                 '--no-sandbox',
//                 '--disable-setuid-sandbox',
//                 '--disable-dev-shm-usage',
//                 '--disable-accelerated-2d-canvas',
//                 '--no-first-run',
//                 '--no-zygote',
//                 '--single-process', // Recommended for containerized environments
//                 '--headless'
//             ],
//             headless: 'new'
//         });

//         const page = await browser.newPage();
        
//         // Set viewport and user agent
//         await page.setViewport({ width: 1280, height: 800 });
//         await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

//         try {
//             await page.goto(url, { 
//                 waitUntil: "networkidle0", // More robust waiting
//                 timeout: 60000 // Reduced timeout
//             });
//         } catch (navigationError) {
//             console.error('Navigation error:', navigationError);
//             throw new Error(`Failed to navigate to URL: ${navigationError.message}`);
//         }

//         // Wait for review section to be available
//         await page.waitForSelector(".FM_rvwC.FM_w3", { timeout: 30000 });

//         console.log('Page loaded, starting scraping...');
        
//         for (let i = 0; i < 3; i++) {
//             try {
//                 const loadMoreButton = await page.$("#rat_more");
//                 if (!loadMoreButton) break;
                
//                 await Promise.all([
//                     loadMoreButton.click(),
//                     page.waitForTimeout(2000)
//                 ]);
//             } catch (loadMoreError) {
//                 console.log('No more reviews to load or error loading:', loadMoreError);
//                 break;
//             }
//         }

//         const reviews = await page.evaluate(() => {
//             const reviewElements = document.querySelectorAll(".FM_rvwC.FM_w3");
//             let reviewData = [];

//             reviewElements.forEach(review => {
//                 let name = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:first-child")?.innerText.trim() || "N/A";
//                 let location = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:nth-child(3)")?.innerText.trim() || "N/A";
//                 let date = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:first-child")?.innerText.trim() || "N/A";
//                 let product = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:nth-child(3)")?.innerText.replace("Product Name : ", "").trim() || "N/A";
//                 let reviewText = review.querySelector(".FM_m15.FM_C0.FM_f16.FM_mtn25.FM_wrd")?.innerText.trim() || "N/A";

//                 let ratingElement = review.querySelector(".FM_flsRt.FM_pa");
//                 let rating = ratingElement ? (parseInt(ratingElement.style.width) / 20) : "N/A";

//                 reviewData.push({ name, location, date, product, rating, reviewText });
//             });

//             return reviewData;
//         });

//         console.log(`Scraped ${reviews.length} reviews`);
//         return reviews;

//     } catch (error) {
//         console.error('Scraping error:', error);
//         throw new Error(`Error scraping the page: ${error.message}`);
//     } finally {
//         if (browser) {
//             console.log('Closing browser');
//             await browser.close();
//         }
//     }
// }

// module.exports = scrapeReviews;









const puppeteer = require("puppeteer");

async function scrapeReviews(url) {
    if (!url) {
        throw new Error("URL is required");
    }

    let browser;
    try {
        browser = await puppeteer.launch({
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--single-process',
                '--headless=new'
            ],
            headless: true
        });

        const page = await browser.newPage();
        await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

        console.log("Page loaded, scraping reviews...");

        const reviews = await page.evaluate(() => {
            const reviewElements = document.querySelectorAll(".FM_rvwC.FM_w3");
            let reviewData = [];

            reviewElements.forEach(review => {
                let name = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:first-child")?.innerText.trim() || "N/A";
                let location = review.querySelector(".FM_f17.FM_bo.FM_c2.FM_mb10.FM_ds5.FM_ds7 span:nth-child(3)")?.innerText.trim() || "N/A";
                let date = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:first-child")?.innerText.trim() || "N/A";
                let product = review.querySelector(".FM_f16.FM_c7.FM_mb15 span:nth-child(3)")?.innerText.replace("Product Name : ", "").trim() || "N/A";
                let reviewText = review.querySelector(".FM_m15.FM_C0.FM_f16.FM_mtn25.FM_wrd")?.innerText.trim() || "N/A";

                let ratingElement = review.querySelector(".FM_flsRt.FM_pa");
                let rating = ratingElement ? (parseInt(ratingElement.style.width) / 20) : "N/A";

                reviewData.push({ name, location, date, product, rating, reviewText });
            });

            return reviewData;
        });

        console.log(`Scraped ${reviews.length} reviews`);
        return reviews;

    } catch (error) {
        console.error('Scraping error:', error);
        throw new Error(`Error scraping the page: ${error.message}`);
    } finally {
        if (browser) {
            console.log('Closing browser');
            await browser.close();
        }
    }
}

module.exports = scrapeReviews;
