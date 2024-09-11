// JavaScript for toggle functionality
const toggleButton = document.getElementById("toggle-button");
const navItems = document.getElementById("nav-items");
const languageSelect = document.getElementById("languageSelect");
const newsSection = document.getElementById("news-section");
const countryNames = document.getElementById("country-names");

toggleButton.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

// Language translations
const translations = {
  en: {
    news1: "FAQs about the PRESS Act",
    news2:
      "Indian government, faced with massive data breach, targets journalists",
    news3: "PRESS Act passes the House",
    country1: "India",
    country1Desc:
      "India is the seventh-largest country by land area, and the most populous country in the world.",
    country2: "Japan",
    country2Desc:
      "Japan is an island country in East Asia, located in the northwest Pacific Ocean.",
  },
  hi: {
    news1: "PRESS अधिनियम के बारे में अक्सर पूछे जाने वाले प्रश्न",
    news2:
      "भारतीय सरकार, बड़े पैमाने पर डेटा उल्लंघन का सामना कर रही है, पत्रकारों को निशाना बना रही है",
    news3: "PRESS अधिनियम हाउस से पारित",
    country1: "भारत",
    country1Desc:
      "भारत भूमि क्षेत्र के हिसाब से सातवां सबसे बड़ा देश है, और दुनिया में सबसे अधिक आबादी वाला देश है।",
    country2: "जापान",
    country2Desc:
      "जापान पूर्वी एशिया में एक द्वीपीय देश है, जो उत्तर पश्चिमी प्रशांत महासागर में स्थित है।",
  },
  mr: {
    news1: "PRESS कायद्यासंबंधी वारंवार विचारले जाणारे प्रश्न",
    news2:
      "भारतीय सरकार, मोठ्या प्रमाणात डेटा उल्लंघनामुळे पत्रकारांना लक्ष्य करीत आहे",
    news3: "PRESS कायदा हाउसवर पास झाला",
    country1: "भारत",
    country1Desc:
      "भारत भौगोलिक क्षेत्रफळानुसार सातवे मोठे राष्ट्र आहे आणि जगातील सर्वात जास्त लोकसंख्या असलेला देश आहे.",
    country2: "जपान",
    country2Desc:
      "जपान हा पूर्व आशियातील एक बेट देश आहे, जो उत्तर पश्चिम पॅसिफिक महासागरात स्थित आहे.",
  },
};

// Function to update news section and country names/descriptions
function updateContent(language) {
  const content = translations[language];

  // Update news section
  newsSection.innerHTML = `
        <div class="news-article">
            <img src="https://images.indianexpress.com/2024/09/CHESS-OLYMPIAD-feature.jpg?w=430" alt="News Image" class="news-image">
            <div class="news-text">
                <h3>${content.news1}</h3>
                <p>Here’s everything you need to know about the PRESS Act...</p>
            </div>
        </div>
        <div class="news-article">
            <img src="https://images.indianexpress.com/2024/09/Tech-feature-images64.jpg?w=430" alt="News Image" class="news-image">
            <div class="news-text">
                <h3>${content.news2}</h3>
                <p>The Indian government has recently been involved in massive data breaches...</p>
            </div>
        </div>
        <div class="news-article">
            <img src="https://images.indianexpress.com/2023/04/scheme.jpg?w=430" alt="News Image" class="news-image">
            <div class="news-text">
                <h3>${content.news3}</h3>
                <p>The PRESS Act has officially passed the House...</p>
            </div>
        </div>
         <div class="news-article">
            <img src="https://images.indianexpress.com/2024/09/Tech-feature-images64.jpg?w=430" alt="News Image" class="news-image">
            <div class="news-text">
                <h3>${content.news2}</h3>
                <p>The Indian government has recently been involved in massive data breaches...</p>
            </div>
        </div>
        <div class="news-article">
            <img src="https://images.indianexpress.com/2024/09/CHESS-OLYMPIAD-feature.jpg?w=430" alt="News Image" class="news-image">
            <div class="news-text">
                <h3>${content.news1}</h3>
                <p>Here’s everything you need to know about the PRESS Act...</p>
            </div>
        </div>
        <div class="news-article">
            <img src="https://images.indianexpress.com/2024/09/Tech-feature-images64.jpg?w=430" alt="News Image" class="news-image">
            <div class="news-text">
                <h3>${content.news2}</h3>
                <p>The Indian government has recently been involved in massive data breaches...</p>
            </div>
        </div>
        <div class="news-article">
            <img src="https://images.indianexpress.com/2023/04/scheme.jpg?w=430" alt="News Image" class="news-image">
            <div class="news-text">
                <h3>${content.news3}</h3>
                <p>The PRESS Act has officially passed the House...</p>
            </div>
        </div>
         <div class="news-article">
            <img src="https://images.indianexpress.com/2024/09/Tech-feature-images64.jpg?w=430" alt="News Image" class="news-image">
            <div class="news-text">
                <h3>${content.news2}</h3>
                <p>The Indian government has recently been involved in massive data breaches...</p>
            </div>
        </div>
    `;

  // Update country names and descriptions
  countryNames.innerHTML = `
        <div class="country">
            <h4>${content.country1}</h4>
            <p>${content.country1Desc}</p>
            <a href="#">Read more</a>
        </div>
        <div class="country">
            <h4>${content.country2}</h4>
            <p>${content.country2Desc}</p>
            <a href="#">Read more</a>
        </div>
        <div class="country">
            <h4>${content.country2}</h4>
            <p>${content.country2Desc}</p>
            <a href="#">Read more</a>
        </div>
        <div class="country">
            <h4>${content.country2}</h4>
            <p>${content.country2Desc}</p>
            <a href="#">Read more</a>
        </div>
    `;
}

// Update content based on selected language
languageSelect.addEventListener("change", () => {
  const selectedLanguage = languageSelect.value;
  updateContent(selectedLanguage);
});

// Initial content load in English
updateContent("en");
