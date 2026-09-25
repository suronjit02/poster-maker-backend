export const generatePosterHTML = (): string => {
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
      background: linear-gradient(180deg, #0b6623 0%, #d32f2f 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
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
      background: #ccc;
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
  <div class="headline">মহান বিজয় দিবস</div>

  <div class="photos">
    <div class="photo-placeholder"></div>
    <div class="photo-placeholder"></div>
    <div class="photo-placeholder"></div>
  </div>

  <div class="footer">
    <div class="name">তোফায়েল আহমেদ</div>
    <div class="designation">সাধারণ সম্পাদক, ঢাকা মহানগর</div>
  </div>
</body>
</html>
  `;
};