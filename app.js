const sections = [
  {
    "grade": "9",
    "title": "9. Sınıf Biyoloji",
    "items": [
      {
        "title": "Hücresel Yapı ve Organizasyon",
        "url": "https://synletsoft.github.io/hucresel-yapi-ve-organizasyon/",
        "slug": "hucresel-yapi-ve-organizasyon"
      },
      {
        "title": "Ökaryotik Canlıların Sınıflandırılması",
        "url": "https://synletsoft.github.io/okaryotik-canlilarin-siniflandirilmasi/",
        "slug": "okaryotik-canlilarin-siniflandirilmasi"
      },
      {
        "title": "Minerallerin Görevleri",
        "url": "https://synletsoft.github.io/inorganik-molekuller-mineraller/",
        "slug": "inorganik-molekuller-mineraller"
      },
      {
        "title": "Organik Moleküllerin Ayıraçları",
        "url": "https://synletsoft.github.io/organik-molekullerin-ayiraclari/",
        "slug": "organik-molekullerin-ayiraclari"
      },
      {
        "title": "Hücrelerin Yapısal Bileşenleri",
        "url": "https://synletsoft.github.io/hucrelerin-yapisal-bilesenleri/",
        "slug": "hucrelerin-yapisal-bilesenleri"
      },
      {
        "title": "Hücre Zarı ve Madde Geçişleri",
        "url": "https://synletsoft.github.io/hucre-zari-ve-madde-gecisleri/",
        "slug": "hucre-zari-ve-madde-gecisleri"
      },
      {
        "title": "Mikroskop Hücre Deneyi",
        "url": "https://synletsoft.github.io/mikroskop-hucre-deneyi/",
        "slug": "mikroskop-hucre-deneyi"
      },
      {
        "title": "Biyolojinin Dönüm Noktalarının İnsan Hayatına Katkısı",
        "url": "https://synletsoft.github.io/biyolojinin-donum-noktalarinin-insan-hayatina-katkisi/",
        "slug": "biyolojinin-donum-noktalarinin-insan-hayatina-katkisi"
      }
    ]
  },
  {
    "grade": "10",
    "title": "10. Sınıf Biyoloji",
    "items": [
      {
        "title": "Fotosentez",
        "url": "https://synletsoft.github.io/fotosentez/",
        "slug": "fotosentez"
      },
      {
        "title": "Sindirim Sistemi 3B",
        "url": "https://synletsoft.github.io/sindirim-sistemi/",
        "slug": "sindirim-sistemi"
      },
      {
        "title": "Canlılarda Sindirim Çeşitleri ve Yapıları",
        "url": "https://synletsoft.github.io/canlilarda-sindirim-cesitleri-ve-yapilar/",
        "slug": "canlilarda-sindirim-cesitleri-ve-yapilar"
      },
      {
        "title": "Fermantasyon",
        "url": "https://synletsoft.github.io/fermantasyon/",
        "slug": "fermantasyon"
      },
      {
        "title": "Komünite ve Popülasyonlar",
        "url": "https://synletsoft.github.io/populasyon-ve-komunite/",
        "slug": "populasyon-ve-komunite"
      }
    ]
  },
  {
    "grade": "11",
    "title": "11. Sınıf Biyoloji",
    "items": [
      {
        "title": "Bitkisel Hormonların Etkileri",
        "url": "https://synletsoft.github.io/bitkisel-hormanlarin-etkileri/",
        "slug": "bitkisel-hormanlarin-etkileri"
      },
      {
        "title": "Bitkilerde Yönelme Hareketleri",
        "url": "https://synletsoft.github.io/bitkilerde-yonelme-hareketi/",
        "slug": "bitkilerde-yonelme-hareketi"
      },
      {
        "title": "Hayvanlarda Sinir Sistemi Farklılıkları",
        "url": "https://synletsoft.github.io/hayvanlarda-sinir-sistemi-farkliliklari/",
        "slug": "hayvanlarda-sinir-sistemi-farkliliklari"
      },
      {
        "title": "Nöronun Yapısı 3B",
        "url": "https://synletsoft.github.io/noronun-yapisi/",
        "slug": "noronun-yapisi"
      },
      {
        "title": "Destek ve Hareket Sistemi 3B",
        "url": "https://synletsoft.github.io/destek-ve-hareket-sistemi/",
        "slug": "destek-ve-hareket-sistemi"
      },
      {
        "title": "Sinir Sistemi 3B",
        "url": "https://synletsoft.github.io/sinir-sistemi/",
        "slug": "sinir-sistemi"
      }
    ]
  }
];

const sectionsRoot = document.querySelector("#sections");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const clearSearch = document.querySelector("#clearSearch");
const filterButtons = [...document.querySelectorAll(".filter-button")];
let activeFilter = "all";

function setNewTabLink(link, url, label) {
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", label);
}

function createCard(section, item, index) {
  const card = document.createElement("article");
  card.className = "activity-card";

  const imageWrap = document.createElement("a");
  imageWrap.className = "card-image-wrap";
  setNewTabLink(imageWrap, item.url, `${item.title} uygulamasını aç`);

  const image = document.createElement("img");
  image.className = "card-image";
  image.src = `./covers/${item.slug}.jpg`;
  image.alt = `${item.title} uygulamasından ekran görüntüsü`;
  image.loading = "lazy";
  imageWrap.append(image);

  const badge = document.createElement("span");
  badge.className = "class-badge";
  badge.textContent = `${section.grade}. sınıf`;
  imageWrap.append(badge);

  const content = document.createElement("div");
  content.className = "card-content";
  const number = document.createElement("p");
  number.className = "card-number";
  number.textContent = `Etkinlik ${String(index + 1).padStart(2, "0")}`;
  const heading = document.createElement("h3");
  heading.className = "card-title";
  heading.textContent = item.title;

  const actions = document.createElement("div");
  actions.className = "card-actions";
  const action = document.createElement("a");
  action.className = "card-action";
  action.innerHTML = '<span>Uygulamayı aç</span><span aria-hidden="true">↗</span>';
  setNewTabLink(action, item.url, `${item.title} uygulamasını aç`);
  actions.append(action);
  content.append(number, heading, actions);
  card.append(imageWrap, content);
  return card;
}

function getVisibleItems(section) {
  const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
  if (activeFilter !== "all" && section.grade !== activeFilter) return [];
  return section.items.filter((item) => item.title.toLocaleLowerCase("tr-TR").includes(query));
}

function render() {
  sectionsRoot.replaceChildren();
  let visibleTotal = 0;
  for (const section of sections) {
    const items = getVisibleItems(section);
    if (!items.length) continue;
    visibleTotal += items.length;
    const sectionElement = document.createElement("section");
    sectionElement.className = "section";
    sectionElement.dataset.grade = section.grade;
    const heading = document.createElement("div");
    heading.className = "section-heading";
    const title = document.createElement("h2");
    title.textContent = section.title;
    const count = document.createElement("p");
    count.textContent = `${items.length} uygulama`;
    heading.append(title, count);
    const grid = document.createElement("div");
    grid.className = "card-grid";
    items.forEach((item) => grid.append(createCard(section, item, section.items.indexOf(item))));
    sectionElement.append(heading, grid);
    sectionsRoot.append(sectionElement);
  }
  const total = sections.reduce((sum, section) => sum + section.items.length, 0);
  resultCount.textContent = `${visibleTotal} / ${total} uygulama gösteriliyor`;
  emptyState.hidden = visibleTotal !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });
});
searchInput.addEventListener("input", render);
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  activeFilter = "all";
  filterButtons.forEach((item) => item.classList.toggle("is-active", item.dataset.filter === "all"));
  render();
  searchInput.focus();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});
render();
