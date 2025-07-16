(function () {
  function insertKununuButtonsStepstone() {
    const companyWrappers = document.querySelectorAll("[data-at='job-item-company-name']");

    companyWrappers.forEach((wrapper, index) => {
      // Firmenname aus innerem span extrahieren
      const innerTextSpan = wrapper.querySelector("span span");
      if (!innerTextSpan) return;

      const companyName = innerTextSpan.textContent.trim();
      if (!companyName) return;

      // Verhindere doppelte Buttons
      if (wrapper.querySelector(".kununu-button")) return;

      const button = document.createElement("button");
      button.className = "kununu-button";
      button.textContent = "🔍 Kununu";

      button.addEventListener("click", () => {
        const query = encodeURIComponent(companyName);
        window.open(`https://www.kununu.com/de/search?q=${query}`, "_blank");
      });

      wrapper.appendChild(button);
    });
  }

  function insertKununuButtonsLinkedIn() {
    const subtitleWrappers = document.querySelectorAll("div.artdeco-entity-lockup__subtitle");

    subtitleWrappers.forEach((wrapper) => {
      const span = wrapper.querySelector("span");
      if (!span) {
        return;
      }

      const companyName = span.textContent.trim();
      if (!companyName) {
        return;
      }

      if (wrapper.querySelector(".kununu-button")) {
        return;
      }

      const button = document.createElement("button");
      button.className = "kununu-button";
      button.textContent = "🔍 Kununu";

      button.addEventListener("click", () => {
        const query = encodeURIComponent(companyName);
        window.open(`https://www.kununu.com/de/search?q=${query}`, "_blank");
      });

      wrapper.appendChild(button);
    });
  }

  // Beobachte DOM-Veränderungen (für Lazy-Loading auf StepStone!)
  const observer = new MutationObserver(() => {
    insertKununuButtonsStepstone();
    insertKununuButtonsLinkedIn();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  window.addEventListener("load", () => {
    setTimeout(()=> {
      insertKununuButtonsStepstone();
      insertKununuButtonsLinkedIn();
    }, 1000);
    });
})();


const style = document.createElement("style");
style.textContent = `
    .kununu-button {
      margin-left: 8px;
      padding: 4px 10px;
      font-size: 12px;
      font-weight: 500;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      background-color: #00a47c;
      color: white;
      transition: background-color 0.2s ease, transform 0.1s ease;
    }
    .kununu-button:hover {
      background-color: #008866;
      transform: translateY(-1px);
    }
`;
document.head.appendChild(style);
