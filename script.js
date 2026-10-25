(function () {
  var cfg = window.NAY;
  var motion = document.documentElement.classList.contains("motion");

  // Nome letra a letra (leitores de tela continuam lendo a palavra inteira)
  document.querySelectorAll("[data-split]").forEach(function (el) {
    var txt = el.textContent;
    el.setAttribute("aria-label", txt);
    el.textContent = "";
    Array.from(txt).forEach(function (c, i) {
      var s = document.createElement("span");
      s.className = "ch";
      s.setAttribute("aria-hidden", "true");
      s.style.setProperty("--i", i);
      s.textContent = c;
      el.appendChild(s);
    });
  });

  document.querySelectorAll("nav .path").forEach(function (a, i) {
    a.style.setProperty("--i", i);
    a.addEventListener("pointerdown", function (e) {
      if (!motion) return;
      var r = a.getBoundingClientRect();
      var d = Math.max(r.width, r.height) * 2;
      var c = document.createElement("span");
      c.className = "ripple";
      c.style.width = c.style.height = d + "px";
      c.style.left = e.clientX - r.left - d / 2 + "px";
      c.style.top = e.clientY - r.top - d / 2 + "px";
      a.appendChild(c);
      setTimeout(function () { c.remove(); }, 900);
    });
  });

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

    li.style.setProperty("--i", i);
    var dica = document.createElement("span");
    dica.className = "breath";
    dica.setAttribute("aria-hidden", "true");
    info.appendChild(dica);
    var barra = document.createElement("span");
    barra.className = "bar";
    li.append(btn, info, lado, barra);
    lista.appendChild(li);

    if (!m.arquivo) {
      btn.disabled = true;
      return;
    }

    var audio = new Audio();
    audio.preload = "none";
    audio.src = "/audio/" + m.arquivo;
    audio.addEventListener("ended", function () { marcar(btn, false); });
    audio.addEventListener("timeupdate", function () {
      if (audio.duration) barra.style.transform = "scaleX(" + audio.currentTime / audio.duration + ")";
    });

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

  // Entrada: cabeçalho e caminhos começam juntos; o resto aparece ao rolar
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.querySelector("header").classList.add("in");
      document.querySelector("nav").classList.add("in");
    });
  });
  var alvos = document.querySelectorAll("section, footer");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    alvos.forEach(function (el) { io.observe(el); });
  } else {
    alvos.forEach(function (el) { el.classList.add("in"); });
  }

  function marcar(btn, tocando) {
    btn.setAttribute("aria-pressed", String(tocando));
    btn.parentNode.classList.toggle("playing", tocando);
    btn.textContent = tocando ? "❚❚" : "▶";
  }
})();
