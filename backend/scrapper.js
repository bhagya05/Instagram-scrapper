const puppeteer = require('puppeteer');

async function getPostsUrls(username, password, page) {
    try {
        await page.goto('https://www.instagram.com/', {
            waitUntil: 'networkidle0'
        });
        await page.type('input[name="username"]', username);
        await page.type('input[name="password"]', password);
        await page.click('button[type="submit"]');
        await page.waitForSelector('.Fifk5');
        await page.goto(`https://www.instagram.com/${username}/`, {
            waitUntil: 'networkidle0'
        });
        again2 = await page.$$eval('a[href^="/p/"]', el => el.map(x => x.getAttribute('href')));
        return again2;
    } catch (e) {
        console.log(e + " An error occured");
    }


}

async function getLikes(postUrls, page) {

    try {
        const likes = [];
        for (i = 0; i < postUrls.length; i++) {
            url = 'https://www.instagram.com' + postUrls[i];
            await page.goto(url, {
                waitUntil: 'networkidle0'
            });

            linkSelector = `a[href^="${postUrls[i]}"] > span`
            element = await page.$(linkSelector);
            if (element) {
                like = await page.evaluate(ele => ele.innerHTML, element);
                likes.push(like);
            }


        }
        return likes;

    } catch (e) {
        console.log(e + " An error occured while getting likes")
    }

}


async function start(username, password) {
    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 70,
    });
    try {
        let page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36');

        const postUrls = await getPostsUrls(username, password, page);
        const likes = await getLikes(postUrls, page)
        return likes
    } catch (e) {
        console.log(e + ' Error occured at starting the application');
    } finally {
        browser.close();
    }

};

exports.start = start;

