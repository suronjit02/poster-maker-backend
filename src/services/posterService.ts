import { getColorScheme } from "../config/gemini.js";
import { generatePosterHTML } from "../templates/posterTemplate.js";
import { renderHTMLToImage } from "../config/puppeteerRenderer.js";

interface GeneratePosterInput {
  occasionType: string;
  headlineText: string;
  name: string;
  designation: string;
  photoUrls: string[];
}

export const generatePoster = async (input: GeneratePosterInput): Promise<Buffer> => {
  const colors = await getColorScheme(input.occasionType);

  const html = generatePosterHTML({
    headlineText: input.headlineText,
    name: input.name,
    designation: input.designation,
    photoUrls: input.photoUrls,
    backgroundColor: colors.backgroundColor,
    accentColor: colors.accentColor,
    textColor: colors.textColor,
  });

  const imageBuffer = await renderHTMLToImage(html);

  return imageBuffer;
};