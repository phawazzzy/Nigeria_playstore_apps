const googlePlay = require("google-play-scraper");
const fs = require("fs")

async function getAllNigeriaApp() {
    const nigeriaApps = await googlePlay.search({
        term: "panda",
        country: "NG",
        // throttle: 5
    });
    console.log(nigeriaApps)

    const jsonContent = JSON.stringify(nigeriaApps)

    fs.writeFile("nigeriaApp.json", jsonContent, "utf-8", err => {
        if (err) {
            console.log(err)
            return
        }
        console.log("File written successfully")
    })
}

getAllNigeriaApp()