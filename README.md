<!-- prettier-ignore-start -->

# OXIDO_AI_test

## Opis projektu

OXIDO_AI_test to aplikacja demonstracyjna wykorzystująca OpenAI API do przekształcania treści tekstowych w kod HTML. Aplikacja została zaprojektowana w celu pokazania możliwości generowania treści HTML w oparciu o dane wejściowe i jest przygotowana z myślą o testowaniu, wizualizacji oraz dalszym rozwoju.

## Wymagania

Przed uruchomieniem projektu należy upewnić się, że spełniasz poniższe wymagania:

1. Node.js w wersji 12 lub nowszej.
2. Klucz API do korzystania z OpenAI.

## Instalacja

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/Anatolii-Stoliarenko/OXIDO_AI_test.git
   cd OXIDO_AI_test
   ```

2. Zainstaluj zależności:

   ```bash
   npm install
   ```

3. Utwórz plik `.env` w katalogu głównym projektu i dodaj do niego swój klucz API OpenAI:

   ```env
   OPENAI_API_KEY="Twój_klucz_API_tutaj"
   ```

## Struktura projektu

```plaintext
OXIDO_AI_test/
├── data/                # Katalog z danymi wejściowymi (np. prompt.txt, article.txt)
├── result/              # Katalog wyjściowy z generowanymi plikami (artykul.html, podglad.html)
├── src/                 # Moduły źródłowe aplikacji
│   ├── api.js           # Moduł do komunikacji z OpenAI API
│   ├── config.js        # Plik konfiguracyjny ścieżek projektu
│   ├── generateHTML.js  # Moduł do generowania plików wyjściowych HTML
│   └── utils.js         # Funkcje pomocnicze (np. do odczytu/zapisu plików)
├── templates/           # Szablony HTML/CSS
│   ├── szablon.html     # Szablon HTML do generowania podglądu
│   └── styles.css       # Plik CSS dla szablonu
├── .gitignore           # Plik konfiguracji ignorowanych plików przez Git
├── .env                 # Plik z kluczem API (nie dołączony do repozytorium)
├── package.json         # Plik konfiguracyjny projektu
├── package-lock.json    # Plik konfiguracyjny projektu
└── index.js             # Główny plik aplikacji
```

## Użycie

1. Wprowadź dane wejściowe do plików znajdujących się w katalogu `data/`, np. `article.txt` oraz `prompt.txt`.
2. Uruchom aplikację za pomocą komendy:

    ```bash
    npm start
    ```

3. Wygenerowane pliki `artykul.html` oraz `podglad.html` znajdziesz w katalogu `result/`.

---

## Konfiguracja OpenAI API

Plik `.env` musi zawierać klucz API OpenAI, aby umożliwić komunikację z serwisem. Oto jak skonfigurować `.env`:

1. Otwórz plik `.env` w głównym katalogu projektu.
2. Dodaj swój klucz API w następującej formie:

    ```env
    OPENAI_API_KEY=Twój_klucz_API_tutaj
    ```

Bez poprawnie skonfigurowanego klucza aplikacja nie będzie mogła korzystać z funkcji OpenAI.

---

## Ważne informacje

1. Plik `.env` nie jest dodawany do repozytorium, co zapewnia bezpieczeństwo klucza API.
2. Projekt jest przeznaczony do demonstracji i testów. Zaleca się, aby używać klucza API w bezpiecznym środowisku.

---

## Wsparcie

Jeśli masz jakiekolwiek pytania dotyczące projektu lub jego konfiguracji, skontaktuj się poprzez:

1. **Email**: [anatolii.stoliarenko@gmail.com](mailto:anatolii.stoliarenko@gmail.com)
2. **Strona**: [https://anatolii-stoliarenko.webflow.io/](https://anatolii-stoliarenko.webflow.io/)

<!-- prettier-ignore-end -->
