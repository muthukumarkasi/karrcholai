var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

  //Get the button
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
      scrollFunction();
  };

  function scrollFunction() {
      if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
      ) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }

  document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';

    document.getElementById('flip-card-btn-turn-to-back').onclick = function() {
        document.getElementById('flip-card').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-front').onclick = function() {
        document.getElementById('flip-card').classList.toggle('do-flip');
    };
});


  
const textContent = {
  english: {
    feature1Title: "Customer-Centric Approach",
    feature1Text: "Provide personalized services and responsive support to ensure client satisfaction and strong relationships.",
    feature2Title: "Sustainable Building Practices",
    feature2Text: "Implementing eco-friendly materials and energy-efficient designs to minimize environmental impact.",
    feature3Title: "Quality Craftsmanship",
    feature3Text: "Ensuring high standards of construction quality and attention to detail in every project.",
    feature4Title: "Innovative Design Solutions",
    feature4Text: "Offering unique and creative architectural designs that blend aesthetics with functionality."
  },
  tamil: {
    feature1Title: "வாடிக்கையாளர் மையமாக கொண்ட அணுகுமுறை",
    feature1Text: "வாடிக்கையாளர் திருப்தி மற்றும் வலுவான உறவுகளை உறுதிப்படுத்த தனிப்பட்ட சேவைகள் மற்றும் பதிலளிக்கும் ஆதரவை வழங்கவும்.",
    feature2Title: "திடப்படுத்தப்பட்ட கட்டுமான நடைமுறைகள்",
    feature2Text: "சுற்றுச்சூழல் தாக்கத்தை குறைக்க வறட்சியை எதிர்க்கும் பொருட்கள் மற்றும் ஆற்றல் திறன் கொண்ட வடிவங்களை அமல்படுத்துதல்.",
    feature3Title: "தரம் உயர்ந்த வேலைப்பாடு",
    feature3Text: "ஒவ்வொரு திட்டத்திலும் கட்டுமான தரத்தை உறுதிப்படுத்தி மற்றும் விவரங்களை கவனத்தில் கொண்டு செயல்படுத்துதல்.",
    feature4Title: "புதிய வடிவமைப்பு தீர்வுகள்",
    feature4Text: "அழகியல் மற்றும் செயல்திறனுடன் சேர்க்கப்படும் தனித்துவமான மற்றும் படைப்பாற்றல் கொண்ட கட்டிட வடிவங்களை வழங்குதல்."
  }
};

let currentLanguage = "english";

document.getElementById('toggleTextButton').addEventListener('click', function () {
  currentLanguage = currentLanguage === "english" ? "tamil" : "english";
  const selectedContent = textContent[currentLanguage];

  document.getElementById('feature1Title').innerText = selectedContent.feature1Title;
  document.getElementById('feature1Text').innerText = selectedContent.feature1Text;
  document.getElementById('feature2Title').innerText = selectedContent.feature2Title;
  document.getElementById('feature2Text').innerText = selectedContent.feature2Text;
  document.getElementById('feature3Title').innerText = selectedContent.feature3Title;
  document.getElementById('feature3Text').innerText = selectedContent.feature3Text;
  document.getElementById('feature4Title').innerText = selectedContent.feature4Title;
  document.getElementById('feature4Text').innerText = selectedContent.feature4Text;
});


