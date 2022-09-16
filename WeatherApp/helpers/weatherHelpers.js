export const getImages = (value) => {
  const partialClouds = [801, 802, 803];
  const snowy = [600, 601, 602, 610];
  const rainy = [300, 301, 302, 500, 501, 502, 511, 520, 521, 522];
  const thunderRain = [200, 201, 202, 230, 231, 232, 233];

  if (value === 800) {
    return require("../assets/images/weatherIcons/sunny.png");
  }
  if (value === 804) {
    return require("../assets/images/weatherIcons/cloudy.png");
  }
  if (partialClouds.includes(value)) {
    return require("../assets/images/weatherIcons/partialCloud.png");
  }
  if (snowy.includes(value)) {
    return require("../assets/images/weatherIcons/snowy.png");
  }
  if (rainy.includes(value)) {
    return require("../assets/images/weatherIcons/rainy.png");
  }
  if (thunderRain.includes(value)) {
    return require("../assets/images/weatherIcons/heavyRain.png");
  }
};

export const monthNames = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

export const dayNames = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

export const getBackground = (city) => {
  if (city === "Ankara") {
    return require("../assets/images/landmarks/AnkaraLandmarks.jpg");
  } else if (city === "Bursa") {
    return require("../assets/images/landmarks/BursaLandmark.jpg");
  } else if (city === "Istanbul") {
    return require("../assets/images/landmarks/IstanbulLandmark.jpg");
  } else if (city === "Adana") {
    return require("../assets/images/landmarks/AdanaLandmark.jpg");
  } else if (city === "Izmir") {
    return require("../assets/images/landmarks/IzmırLandmark.jpg");
  } else {
    return require("../assets/images/landmarks/ArkaPlan.jpg");
  }
};
