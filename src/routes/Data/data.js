// Wörterbuch wird beim Laden aus localStorage wiederhergestellt
let dictionary: { [key: string]: string } = JSON.parse(localStorage.getItem('dictionary') || '{}');

function addVocabulary(event: Event): boolean {
  event.preventDefault();  // Verhindert das Neuladen der Seite

  // Cast to HTMLInputElement to access .value
  const germanInput = document.getElementById('germanText') as HTMLInputElement;
  const farsiInput = document.getElementById('farsiText') as HTMLInputElement;

  const germanText = germanInput.value;
  const farsiText = farsiInput.value;

  if (germanText && farsiText) {
      dictionary[germanText] = farsiText;
      console.log("Wort hinzugefügt:", germanText, "->", farsiText);
      console.log("Aktuelles Wörterbuch:", dictionary);

      // Save updated dictionary to localStorage
      localStorage.setItem('dictionary', JSON.stringify(dictionary));
  } else {
      console.log("Bitte beide Felder ausfüllen.");
  }

  return false;  // Verhindert das Standard-Submit-Verhalten
}
