📘 **1. Opis**
Projekt: Prosta aplikacja webowa z kilkoma podstronami (Home, O nas, Usługi, Kontakt), używana głównie do testów E2E.
----------------------------
📂 **2. Struktura katalogów**
my-e2e-app/
├── public/
│   ├── index.html        # Strona główna
│   ├── about.html        # O nas
│   ├── services.html     # Usługi
│   ├── contact.html      # Kontakt
│   ├── styles.css        # Styl aplikacji
│   ├── script.js         # Skrypty JS
│   └── background.jpg    # Tło do załadowania i testów
├── cypress/
│   └── e2e/
│       └── app_spec.cy.js  # Testy Cypress
├── tests/
│   └── background.spec.js  # Testy Playwright
├── cypress.config.js
├── playwright.config.js
├── package.json
└── README.md 
----------------------------
🧪 **4. Testy E2E**
🔹 Cypress
- Testuje załadowanie wszystkich stron (specjalnie strona Kontakt nie została zaimplementowana aby pokazać *błąd* testu)
- Interakcyjne testy:
  * pojawienie się formularza po naciśnięciu przycisku
  * wypełnienie formularza poprzez wprowadzenie symulowanych danych
  * wysłanie formularza poprzez naciśnięcie przyciku 
  * sprawdzenie czy wyskoczył alert o prawidłowym wysłaniu
Testów w Cypress łącznie: 7
_____________________________
🔹 Playwright
- Został wdrożony na potrzebę testu czy po załadowaniu strony pojawia się tło w postaci obrazu
----------------------------
✨ Autorzy projektu: 
- Jakub Łochowski
- Marek Bulczak
- Marcin Pawelski
