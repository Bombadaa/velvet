// JavaScript-Code für die Velvet Landing Page
// Vorerst leer, kann bei Bedarf erweitert werden.

console.log("Script für Velvet Landing Page geladen.");

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText, CustomEase);

  CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1");

  const elementsToAnimate = document.querySelectorAll('[data-split-target]');

  elementsToAnimate.forEach(element => {
    const split = SplitText.create(element, {
      type: "lines, words", // Auf lines und words reduziert, chars nicht zwingend für "per Word" nötig
      linesClass: "line",
      wordsClass: "word"
    });

    // Sicherstellen, dass die Zeilen als Masken fungieren
    // split.lines.forEach(line => { gsap.set(line, { overflow: "hidden" }); }); 
    // Besser ist es dies per CSS zu machen für bessere Trennung von Code und Styling

    gsap.from(split.words, {
      duration: 0.8,
      stagger: 0.1,
      yPercent: 110,
      ease: "osmo-ease"
    });
  });

  console.log("GSAP Text Reveal für Hero Section initialisiert.");
}); 