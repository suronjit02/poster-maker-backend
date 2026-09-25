interface PosterData {
  headlineText: string;
  name: string;
  designation: string;
  photoUrls: string[];
  backgroundColor: string;
  accentColor: string;
  textColor: string;
}

export const generatePosterHTML = (data: PosterData): string => {
  const {
    headlineText,
    name,
    designation,
    photoUrls,
    backgroundColor,
    accentColor,
    textColor,
  } = data;

  const photosHTML = photoUrls
    .map(
      (url) =>
        `<div class="photo-placeholder" style="background-image: url('${url}')"></div>`,
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      width: 1200px;
      height: 1600px;
      font-family: "Noto Sans Bengali", sans-serif;
      background: linear-gradient(180deg, ${backgroundColor} 0%, ${accentColor} 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${textColor};
    }

    .headline {
      font-size: 64px;
      font-weight: bold;
      text-align: center;
      margin-top: 40px;
      text-shadow: 2px 2px 6px rgba(0,0,0,0.5);
    }

    .photos {
      display: flex;
      gap: 20px;
      margin-top: 40px;
    }

    .photo-placeholder {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      background-color: #ccc;
      background-size: cover;
      background-position: center;
      border: 6px solid white;
    }

    .footer {
      margin-top: auto;
      margin-bottom: 60px;
      text-align: center;
      background: rgba(0,0,0,0.4);
      padding: 20px 40px;
      border-radius: 12px;
    }

    .footer .name {
      font-size: 36px;
      font-weight: bold;
    }

    .footer .designation {
      font-size: 24px;
      margin-top: 8px;
    }
  </style>
</head>
<body>
  <div class="headline">${headlineText}</div>

  <div class="photos">
    ${photosHTML}
  </div>

  <div class="footer">
    <div class="name">${name}</div>
    <div class="designation">${designation}</div>
  </div>
</body>
</html>
  `;
};
