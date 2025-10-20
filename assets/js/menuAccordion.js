document.addEventListener("DOMContentLoaded", function () {
  const mainTriggers = document.querySelectorAll('[data-bs-toggle="collapse"][data-bs-target^="#collapse"]');

  mainTriggers.forEach(trigger => {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();

      const targetSelector = trigger.getAttribute('data-bs-target');
      const target = document.querySelector(targetSelector);

      // Se il target è già visibile (aperto), lo chiudo manualmente
      if (target.classList.contains('show')) {
        new bootstrap.Collapse(target, { toggle: true }).hide();
      } else {
        // Chiudo tutti gli altri (solo primo livello)
        document.querySelectorAll('.collapse.show[id^="collapse"]').forEach(openCollapse => {
          if (openCollapse !== target) {
            new bootstrap.Collapse(openCollapse, { toggle: true }).hide();
          }
        });

        // Apro il target cliccato
        new bootstrap.Collapse(target, { toggle: true }).show();
      }
    });
  });
});
