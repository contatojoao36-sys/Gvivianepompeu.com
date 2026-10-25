(function () {
  var cfg = window.NAY;

  // Links de WhatsApp
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    var texto = encodeURIComponent(cfg.mensagens[a.dataset.wa] || "");
    a.href = "https://wa.me/" + cfg.whatsapp + "?text=" + texto;
  });

  // Lista de meditações com um único player ativo por vez
  var lista = document.getElementById("lista");
  var atual = null;

  cfg.meditacoes.forEach(function (m, i) {
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = "med-" + (i + 1);
    btn.setAttribute("aria-pressed", "false");
    btn.setAttribute("aria-label", "Ouvir " + m.titulo);
    btn.textContent = "▶";

    var info = document.createElement("div");
    info.className = "t";
    info.innerHTML = "<b></b><small></small>";
    info.querySelector("b").textContent = m.titulo;
    info.querySelector("small").textContent = m.descricao;

    var lado = document.createElement(m.arquivo ? "time" : "span");
    lado.className = m.arquivo ? "" : "soon";
    lado.textContent = m.arquivo ? m.duracao : "em breve";

    li.append(btn, info, lado);
    lista.appendChild(li);

    if (!m.arquivo) {
      btn.disabled = true;
      return;
    }

    var audio = new Audio();
    audio.preload = "none";
    audio.src = "/audio/" + m.arquivo;
    audio.addEventListener("ended", function () { marcar(btn, false); });

    btn.addEventListener("click", function () {
      if (atual && atual.audio !== audio) {
        atual.audio.pause();
        marcar(atual.btn, false);
      }
      if (audio.paused) {
        audio.play();
        marcar(btn, true);
        atual = { audio: audio, btn: btn };
      } else {
        audio.pause();
        marcar(btn, false);
      }
    });
  });

  function marcar(btn, tocando) {
    btn.setAttribute("aria-pressed", String(tocando));
    btn.textContent = tocando ? "❚❚" : "▶";
  }
})();
