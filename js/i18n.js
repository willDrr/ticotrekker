import enTranslation from '../locales/en.json' with {type: 'json'};
import esTranslation from '../locales/es.json' with {type: 'json'};
import formEsTranslation from '../locales/formes.json' with {type: 'json'};
import formEnTranslation from '../locales/formen.json' with {type: 'json'};

i18next
  // .use(initReactI18next)
  .init({
    resources: {
      en: {
         translation: enTranslation,
      },
      es: {
         translation: esTranslation,
      },
      formes: {
         translation: formEsTranslation,
      },
      formen: {
         translation: formEnTranslation,
      },
    },
    initImmediate: false,
    compatibilityJSON: 'v3',
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
});


// Language switching event listeners
document.getElementById('english').addEventListener('click', () => {
    changeLanguage('en')
});

document.getElementById('englishmob').addEventListener('click', () => {
    changeLanguage('en')
});


// Language switching event listeners
document.getElementById('spanish').addEventListener('click', () => {
    changeLanguage('es')
});

document.getElementById('spanishmob').addEventListener('click', () => {
    changeLanguage('es')
});

// Function to change language
function changeLanguage(lang) {
  i18next.changeLanguage(lang);
}

// Function to update content on language change
function updateContent() {
    document.querySelector('[data-i18n="date"]').textContent = i18next.t('dateform');
    document.querySelector('[data-i18n="adults"]').textContent = i18next.t('adults');
    document.querySelector('[data-i18n="kids"]').textContent = i18next.t('kids');
    
    document.querySelector('[data-i18n="pickup"]').textContent = i18next.t('pickup');
    document.querySelector('[data-i18n="dropoff"]').textContent = i18next.t('dropoff');
    document.querySelector('[data-i18n="roundtrip"]').textContent = i18next.t('roundtrip');
    document.querySelector('[data-i18n="contact"]').textContent = i18next.t('contact');

    document.querySelector('[data-i18n="send"]').textContent = i18next.t('send');

    document.querySelector('[data-i18n="bookshuttle"]').textContent = i18next.t('bookshuttle');
    document.querySelector('[data-i18n="textpresentation"]').textContent = i18next.t('welcome');
    document.querySelector('[data-i18n="ourservice"]').textContent = i18next.t('ourservice');

    document.querySelector('[data-i18n="conviniencestops"]').textContent = i18next.t('conviniencestops');
    document.querySelector('[data-i18n="ict"]').textContent = i18next.t('ict');
    document.querySelector('[data-i18n="allpayments"]').textContent = i18next.t('allpayments');
    document.querySelector('[data-i18n="allcountry"]').textContent = i18next.t('allcountry');
    document.querySelector('[data-i18n="shuttledaypass"]').textContent = i18next.t('shuttledaypass');
    document.querySelector('[data-i18n="textshuttledaypass"]').textContent = i18next.t('textshuttledaypass');


    const rates = document.querySelectorAll('[data-i18n="seerates"]');
    rates.forEach(element => { element.textContent = i18next.t('seerates'); });


    document.querySelector('[data-i18n="shuttledaypassroundtrip"]').textContent = i18next.t('shuttleroundtrip');
    document.querySelector('[data-i18n="textshuttledaypassroundtrip"]').textContent = i18next.t('textshuttleroundtrip');

    document.querySelector('[data-i18n="privateshuttle"]').textContent = i18next.t('privateshuttleandtours');
    document.querySelector('[data-i18n="textprivateshuttle"]').textContent = i18next.t('textprivateshuttleandtours');

    document.querySelector('[data-i18n="offers"]').textContent = i18next.t('offers');
    document.querySelector('[data-i18n="textoffers"]').textContent = i18next.t('textnewsletter');

    document.querySelector('[data-i18n="subscribe"]').textContent = i18next.t('sub');


    document.querySelector('[data-i18n="about"]').textContent = i18next.t('aboutus');
    document.querySelector('[data-i18n="perks"]').textContent = i18next.t('perks');
    document.querySelector('[data-i18n="pdf"]').textContent = i18next.t('pdf');
    document.querySelector('[data-i18n="gallery"]').textContent = i18next.t('gallery');
    document.querySelector('[data-i18n="contactus"]').textContent = i18next.t('contactus');
    document.querySelector('[data-i18n="locatedin"]').textContent = i18next.t('located');


    document.querySelector('[data-i18n="slideperks"]').textContent = i18next.t('slideperks');
    document.querySelector('[data-i18n="slideabout"]').textContent = i18next.t('slideabout');
    document.querySelector('[data-i18n="slidegallery"]').textContent = i18next.t('slidegallery');
    document.querySelector('[data-i18n="slidecontact"]').textContent = i18next.t('slidecontact');
    
    document.querySelector('[data-i18n="policy"]').textContent = i18next.t('policy');
    document.querySelector('[data-i18n="privacy"]').textContent = i18next.t('privacy');
    document.querySelector('[data-i18n="allrights"]').textContent = i18next.t('allrights');
    document.querySelector('[data-i18n="allpaymentsvalid"]').textContent = i18next.t('allpaymentsvalid');
}

// Listen for language change events
i18next.on('languageChanged', () => {
  updateContent();
});

// Initial content update
// updateContent();
