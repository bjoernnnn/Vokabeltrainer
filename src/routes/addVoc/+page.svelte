<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vokabeln hinzufügen</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
    <script defer src="data.js"></script> <!-- Dein JavaScript/TypeScript-File -->
</head>
<body>
    <div class="mdl-layout mdl-js-layout mt-0 pt-0">
        <header class="mdl-layout__header mdl-layout__header--scroll">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">Vokabeln hinzufügen</span>
                <div class="mdl-layout-spacer"></div>
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" href="/">Home</a>
                    <a class="mdl-navigation__link" href="src/routes/vocTest/+page.svelte">Vokabel-Test</a>
                </nav>
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Vokabeln hinzufügen</span>
            <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
            </nav>
        </div>
        <main class="mdl-layout__content justify-center text-center item-center align-middle">
            <div class="">
                <!-- Simple Textfield -->
                <form onsubmit="addVocabulary(event);">
                    <div class="mdl-textfield mdl-js-textfield">
                        <input class="mdl-textfield__input" type="text" id="germanText" />
                        <label class="mdl-textfield__label" for="germanText">Deutsch</label>
                    </div>
                    <!-- Simple Textfield -->
                    <div class="mdl-textfield mdl-js-textfield">
                        <input class="mdl-textfield__input" type="text" id="farsiText" />
                        <label class="mdl-textfield__label" for="farsiText">Farsi</label>
                    </div>
                    <!-- Submit-Button -->
                    <button type="submit" class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                        <i class="material-icons">add</i>
                    </button>
                </form>
            </div>
        </main>
    </div>
</body>
</html>
