import puppeteer from "puppeteer";

export const renderHTMLToImage = async (html: string): Promise<Buffer> => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 1600 });

    await page.setContent(html, { waitUntil: "load" });

    const screenshotBuffer = await page.screenshot({
      type: "png",
    });

    return Buffer.from(screenshotBuffer);
  } finally {
    await browser.close();
  }
};
