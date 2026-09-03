const image = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

const destinations = [
  { id: "angat-dam", municipality: "Angat", name: "Angat Dam View Deck", description: "A hillside viewpoint with panoramic, sweeping vistas over the massive lake and surrounding forest mountains.", location: "Angat Watershed Forest Reserve", category: "Landscape", tag: "Wide open", image: image(1461974), time: "Best at 5:30 AM" },
  { id: "angat-rainforest", municipality: "Angat", name: "Angat Rainforest Eco-Park", description: "A sprawling eco-reserve geared toward trekking, bird watching, and environmental conservation.", location: "Gen. A. Santos Highway, Pugpog", category: "Adventure", tag: "For the curious", image: image(1671325), time: "Half-day wander" },
  { id: "balagtas-monument", municipality: "Balagtas", name: "Francisco Balagtas Monument", description: "A historical stone monument honoring the author of the masterpiece Florante at Laura.", location: "Panginay", category: "Heritage", tag: "A literary stop", image: image(2088170), time: "30 minute visit" },
  { id: "balagtas-sayton", municipality: "Balagtas", name: "Our Lady of Sayton Parish", description: "A classic Catholic church featuring a distinct, peaceful courtyard popular with local churchgoers.", location: "MacArthur Highway, Wawa", category: "Sacred", tag: "Quiet corners", image: image(1618531), time: "Pair with merienda" },
  { id: "bocaue-arena", municipality: "Bocaue", name: "Philippine Arena", description: "The world’s largest indoor domed arena, used for mega-concerts, international sporting meets, and conventions.", location: "Ciudad de Victoria", category: "Culture", tag: "Big scale", image: image(109669), time: "Check event days" },
  { id: "bocaue-shrine", municipality: "Bocaue", name: "St. Andrew Kim Tae-gon Shrine", description: "A serene, highly unique Korean-style Catholic shrine complex honoring the first native Korean Catholic priest and saint.", location: "Barangay Lolomboy", category: "Sacred", tag: "Unexpected Bulacan", image: image(208512), time: "Slow afternoon" },
  { id: "bulakan-del-pilar", municipality: "Bulakan", name: "Marcelo H. del Pilar National Shrine", description: "The birthplace and museum dedicated to the famous Filipino propagandist, with personal belongings and a library.", location: "Sitio Cupang, Barangay San Nicolas", category: "Heritage", tag: "Read the walls", image: image(157811), time: "1 hour visit" },
  { id: "bulakan-assumption", municipality: "Bulakan", name: "Our Lady of Assumption Parish Church", description: "A centuries-old, massive stone cathedral holding immense historical and colonial value.", location: "Barangay San Jose", category: "Sacred", tag: "Old stone", image: image(1603986), time: "Go before noon" },
  { id: "bustos-dam", municipality: "Bustos", name: "Bustos Dam Eco-Park", description: "A family picnic and viewing area built adjacent to one of Asia’s largest rubber gate dams.", location: "Barangay Tibagan", category: "Landscape", tag: "Picnic weather", image: image(2101187), time: "Easy morning" },
  { id: "bustos-mercado", municipality: "Bustos", name: "Mercado Ancestral House", description: "A preserved Spanish-era home displaying ornate architecture and artifacts from old Bulacan families.", location: "Poblacion", category: "Heritage", tag: "A house with a past", image: image(1647962), time: "Ask before entering" },
  { id: "calumpit-church", municipality: "Calumpit", name: "San Juan Bautista Church", description: "Established in 1572, this is known as the historic “Mother Church” of Bulacan.", location: "Poblacion Road", category: "Sacred", tag: "Since 1572", image: image(356844), time: "Golden hour" },
  { id: "calumpit-meyto", municipality: "Calumpit", name: "Meyto Shrine", description: "A historic marker honoring the riverbank where the very first Catholic mass in Bulacan was celebrated.", location: "Barangay Meyto", category: "Heritage", tag: "Stand where it began", image: image(1530259), time: "20 minute stop" },
  { id: "drt-kabayunan", municipality: "Doña Remedios Trinidad", name: "Kabayunan View Deck", description: "A highland camping site widely visited for its breathtaking sea of clouds during sunrise.", location: "Barangay Kabayunan", category: "Landscape", tag: "Above the weather", image: image(417074), time: "Sunrise mission" },
  { id: "drt-verdivia", municipality: "Doña Remedios Trinidad", name: "Verdivia Falls", description: "A crystal-clear, multi-tiered natural waterfall tucked away inside lush mountain trails.", location: "Barangay Talbak", category: "Water", tag: "Bring a dry bag", image: image(1450353), time: "Full-day hike" },
  { id: "guiguinto-gardens", municipality: "Guiguinto", name: "Guiguinto Garden City", description: "A highway stretch packed with garden centers selling flowers, landscaping trees, and garden decor.", location: "Tabang & Ilang-Ilang, MacArthur Highway", category: "Culture", tag: "A living market", image: image(1458694), time: "Browse slowly" },
  { id: "guiguinto-klir", municipality: "Guiguinto", name: "Klir Waterpark Resort", description: "A family-centric leisure resort boasting vast swimming areas and a large wave pool generator.", location: "Kabilang Bakood", category: "Family", tag: "Make a splash", image: image(261327), time: "Book a day pass" },
  { id: "hagonoy-anne", municipality: "Hagonoy", name: "National Shrine of St. Anne", description: "A French-Renaissance styled minor basilica housing a centuries-old statue of Saint Anne.", location: "Barangay Santo Niño", category: "Sacred", tag: "Look up", image: image(1043474), time: "Quiet mornings" },
  { id: "hagonoy-park", municipality: "Hagonoy", name: "Hagonoy Eco-Green Park", description: "A serene municipal riverside park offering nature walks and scenic boat rides for families.", location: "Barangay San Sebastian", category: "Water", tag: "River rhythm", image: image(1557238), time: "Late afternoon" },
  { id: "marilao-mercy", municipality: "Marilao", name: "National Shrine of the Divine Mercy", description: "A massive religious pilgrimage center boasting a colossal, 100-foot-tall statue of Jesus Christ.", location: "Divine Mercy Road, Barangay Marilao", category: "Sacred", tag: "A grand pause", image: image(259588), time: "Give it an hour" },
  { id: "marilao-simbahan", municipality: "Marilao", name: "Simbahan ng Marilao", description: "A beautifully preserved Spanish-era brick church showcasing detailed altars and classic wood craftsmanship.", location: "Rizal Street, Poblacion", category: "Heritage", tag: "Brick and light", image: image(1048035), time: "Early evening" },
  { id: "norzagaray-bitbit", municipality: "Norzagaray", name: "Bitbit Bridge & River", description: "A scenic concrete bridge crossing a rushing river valley, frequented by bikers and weekend swimmers.", location: "Barangay San Lorenzo", category: "Water", tag: "Cool your feet", image: image(1582519), time: "Bring a towel" },
  { id: "norzagaray-cave", municipality: "Norzagaray", name: "Pinagrealan Cave", description: "A rugged subterranean karst cave system once used as a hideout during the Philippine revolution.", location: "1562 Curvada Road", category: "Adventure", tag: "Under the surface", image: image(1624496), time: "Guide required" },
  { id: "obando-church", municipality: "Obando", name: "San Pascual Baylon Parish", description: "The home of the famous annual fertility festival dance tradition.", location: "Barangay Pag-asa", category: "Culture", tag: "Dance and devotion", image: image(1416531), time: "Festival season" },
  { id: "obando-plaza", municipality: "Obando", name: "Obando Town Plaza", description: "A public gathering park right outside the historic church and cultural epicenter of local festivities.", location: "J.P. Rizal Street, Poblacion", category: "Culture", tag: "People watching", image: image(1519088), time: "After sunset" },
  { id: "pandi-amana", municipality: "Pandi", name: "Amana Waterpark", description: "A popular resort featuring a massive 3,500-square-meter pool that produces a variety of wave types.", location: "Bagong Barrio, Santisima Street", category: "Family", tag: "Wave day", image: image(1268855), time: "Bring the whole crew" },
  { id: "pandi-kakarong", municipality: "Pandi", name: "Real de Kakarong de Sili Shrine", description: "A solemn monument built on the site of a bloody 1897 battlefield honoring fallen revolutionary heroes.", location: "Barangay Kakarong", category: "Heritage", tag: "Remembering well", image: image(1591447), time: "Read the marker" },
  { id: "paombong-james", municipality: "Paombong", name: "St. James the Apostle Parish", description: "An old stone church serving as the religious heart of the town, with long-standing Holy Week practices.", location: "Poblacion", category: "Sacred", tag: "Stone, still standing", image: image(1105766), time: "Morning light" },
  { id: "paombong-sasa", municipality: "Paombong", name: "Paombong Sasa Palm Farms", description: "Coastal agricultural trails where visitors can see sap-gathering and traditional vinegar fermentation.", location: "Barangay San Roque", category: "Culture", tag: "Taste the coast", image: image(2387873), time: "Ask a local guide" },
  { id: "plaridel-quingua", municipality: "Plaridel", name: "Battle of Quingua Monument", description: "A historic marker and park honoring the site of a fierce 1899 battle during the Philippine-American War.", location: "Gov. Padilla Road", category: "Heritage", tag: "History in plain sight", image: image(258045), time: "20 minute stop" },
  { id: "plaridel-santiago", municipality: "Plaridel", name: "Santiago Apostol Church", description: "An eye-catching brick-walled parish church famous for its relief sculpture of St. James on horseback.", location: "Barangay Poblacion", category: "Sacred", tag: "Find the relief", image: image(1416530), time: "Late afternoon" },
  { id: "pulilan-farm", municipality: "Pulilan", name: "Pulong Kabyawan", description: "An eco-farm property housing cultural items and keeping native agricultural heritage alive.", location: "Barangay Inaon", category: "Culture", tag: "Hands in the soil", image: image(1595104), time: "Call ahead" },
  { id: "pulilan-isidro", municipality: "Pulilan", name: "San Isidro Labrador Parish", description: "The historic church serving as the final destination of the famed kneeling water buffalo parade.", location: "Poblacion Road", category: "Culture", tag: "A town tradition", image: image(235615), time: "May is special" },
  { id: "san-ildefonso-grotto", municipality: "San Ildefonso", name: "Grotto of Our Lady of Lourdes", description: "A tranquil outdoor pilgrimage sanctuary showcasing life-sized religious structures and statues.", location: "Barangay Mahabang Parang", category: "Sacred", tag: "Walk with care", image: image(2362002), time: "Soft morning" },
  { id: "san-ildefonso-bulak", municipality: "San Ildefonso", name: "Bulak Cave", description: "A raw limestone cave system popular with backpackers looking for uncrowded natural formations.", location: "Barangay Bulak", category: "Adventure", tag: "Pack light", image: image(116910), time: "With a local guide" },
  { id: "san-miguel-biak", municipality: "San Miguel", name: "Biak-na-Bato National Park", description: "A legendary environmental park rich with limestone trails, deep riverbeds, and historic caves.", location: "Barangay Biak-na-Bato", category: "Adventure", tag: "Make a day of it", image: image(572897), time: "Early start" },
  { id: "san-miguel-madlum", municipality: "San Miguel", name: "Madlum Cave & River", description: "An adventure playground featuring cave spelunking, clean rivers for swimming, and raw rock faces.", location: "Barangay Sibul", category: "Adventure", tag: "For brave weekends", image: image(15286), time: "Full-day adventure" },
  { id: "san-rafael-malangaan", municipality: "San Rafael", name: "Malangaan Cave and Spring", description: "A destination combining limestone caverns, a cold river stream, and hiking views.", location: "Barangay Coral na Bato", category: "Water", tag: "Cold spring", image: image(2236703), time: "Wear trail shoes" },
  { id: "san-rafael-adventure", municipality: "San Rafael", name: "San Rafael River Adventure", description: "A premium eco-resort known for glass cabins, glamping facilities, and river boating tours.", location: "Barangay Talacsan", category: "Landscape", tag: "Stay awhile", image: image(3225531), time: "Overnight worthy" },
  { id: "santa-maria-purisima", municipality: "Santa Maria", name: "La Purisima Concepcion Parish Church", description: "A picturesque hilltop stone basilica holding a revered miraculous image of the Virgin Mary.", location: "Poblacion", category: "Sacred", tag: "Hilltop hush", image: image(1229042), time: "Before the heat" },
  { id: "santa-maria-huseng", municipality: "Santa Maria", name: "Huseng Batute Monument", description: "A commemorative marker celebrating Jose Corazon de Jesus, the “King of Balagtasan.”", location: "Barangay Jose Corazon de Jesus", category: "Heritage", tag: "Words made local", image: image(1602726), time: "Pair with coffee" }
];

const municipalities = ["All municipalities", ...new Set(destinations.map((place) => place.municipality))];
const categories = ["All moods", ...new Set(destinations.map((place) => place.category))];
const state = {
  query: "",
  municipality: municipalities[0],
  category: categories[0],
  showSaved: false,
  favorites: readFavorites(),
  selected: null
};

const elements = {
  grid: document.querySelector("#destination-grid"),
  empty: document.querySelector("#empty-state"),
  search: document.querySelector("#search-input"),
  municipality: document.querySelector("#municipality-select"),
  category: document.querySelector("#category-select"),
  chips: document.querySelector("#category-chips"),
  savedFilter: document.querySelector("#saved-filter"),
  clear: document.querySelector("#clear-filters"),
  results: document.querySelector("#results-count"),
  modal: document.querySelector("#detail-modal"),
  modalImage: document.querySelector("#modal-image"),
  modalKicker: document.querySelector("#modal-kicker"),
  modalTitle: document.querySelector("#modal-title"),
  modalMunicipality: document.querySelector("#modal-municipality"),
  modalDescription: document.querySelector("#modal-description"),
  modalLocation: document.querySelector("#modal-location"),
  modalTime: document.querySelector("#modal-time"),
  modalFavorite: document.querySelector("#modal-favorite"),
  modalShare: document.querySelector("#modal-share"),
  shareLabel: document.querySelector("#share-label")
};

function readFavorites() {
  try {
    return JSON.parse(localStorage.getItem("travelbuddies-favorites") || "[]");
  } catch {
    return [];
  }
}

function writeFavorites() {
  localStorage.setItem("travelbuddies-favorites", JSON.stringify(state.favorites));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[character]));
}

function populateFilters() {
  elements.municipality.innerHTML = municipalities.map((town) => `<option>${escapeHtml(town)}</option>`).join("");
  elements.category.innerHTML = categories.map((item) => `<option>${escapeHtml(item)}</option>`).join("");
  elements.chips.innerHTML = categories.slice(1).map((item) => `<button class="filter-chip ${state.category === item ? "is-active" : ""}" type="button" data-category="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("");
}

function getVisibleDestinations() {
  const normalized = state.query.trim().toLowerCase();
  return destinations.filter((place) => {
    const matchesQuery = !normalized || [place.name, place.municipality, place.description, place.category].join(" ").toLowerCase().includes(normalized);
    const matchesMunicipality = state.municipality === municipalities[0] || place.municipality === state.municipality;
    const matchesCategory = state.category === categories[0] || place.category === state.category;
    const matchesSaved = !state.showSaved || state.favorites.includes(place.id);
    return matchesQuery && matchesMunicipality && matchesCategory && matchesSaved;
  });
}

function imageMarkup(place, detail = false) {
  return `<div class="${detail ? "detail-image" : "card-media"} image-frame"><img src="${place.image}" alt="${escapeHtml(place.name)} in ${escapeHtml(place.municipality)}" loading="${detail ? "eager" : "lazy"}" /><span class="image-fallback" aria-hidden="true">◉</span></div>`;
}

function renderCards() {
  const visible = getVisibleDestinations();
  elements.grid.innerHTML = visible.map((place, index) => {
    const isFavorite = state.favorites.includes(place.id);
    return `<article class="destination-card" style="animation-delay:${Math.min(index * .035, .45)}s">
      ${imageMarkup(place)}
      <div class="card-content">
        <div class="card-top">
          <span class="category-label">${escapeHtml(place.category)}</span>
          <button class="favorite-button ${isFavorite ? "is-favorite" : ""}" type="button" data-favorite="${place.id}" aria-label="${isFavorite ? "Remove" : "Save"} ${escapeHtml(place.name)}">${isFavorite ? "♥" : "♡"}</button>
        </div>
        <div class="card-copy">
          <div class="place-municipality"><span aria-hidden="true">⌖</span> ${escapeHtml(place.municipality)}</div>
          <button class="read-note" type="button" data-open="${place.id}">
            <span><h3>${escapeHtml(place.name)}</h3><p>${escapeHtml(place.description)}</p></span><span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>`;
  }).join("");
  elements.empty.classList.toggle("hidden", visible.length > 0);
  elements.grid.classList.toggle("hidden", visible.length === 0);
  const locationLabel = state.showSaved ? "your saved places" : state.municipality === municipalities[0] ? "all municipalities" : state.municipality;
  elements.results.textContent = `${String(visible.length).padStart(2, "0")} entries / ${locationLabel}`;
  elements.savedFilter.classList.toggle("is-active", state.showSaved);
  elements.clear.classList.toggle("hidden", !(state.query || state.municipality !== municipalities[0] || state.category !== categories[0] || state.showSaved));
  elements.chips.querySelectorAll("[data-category]").forEach((chip) => chip.classList.toggle("is-active", chip.dataset.category === state.category));
  updateCounts();
  wireImageFallbacks();
}

function wireImageFallbacks() {
  document.querySelectorAll(".image-frame img").forEach((img) => {
    img.addEventListener("error", () => {
      img.parentElement.classList.add("has-failed");
    }, { once: true });
  });
}

function updateCounts() {
  const count = state.favorites.length;
  document.querySelector("#nav-saved-count").textContent = count;
  document.querySelector("#mobile-saved-count").textContent = count;
}

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id) ? state.favorites.filter((item) => item !== id) : [...state.favorites, id];
  writeFavorites();
  renderCards();
  if (state.selected && state.selected.id === id) renderModal(state.selected);
}

function clearFilters() {
  state.query = "";
  state.municipality = municipalities[0];
  state.category = categories[0];
  state.showSaved = false;
  elements.search.value = "";
  elements.municipality.value = state.municipality;
  elements.category.value = state.category;
  populateFilters();
  renderCards();
}

function renderModal(place) {
  state.selected = place;
  elements.modalImage.src = place.image;
  elements.modalImage.alt = `${place.name} in ${place.municipality}`;
  elements.modalKicker.textContent = `${place.category} / ${place.tag}`;
  elements.modalTitle.textContent = place.name;
  elements.modalMunicipality.textContent = place.municipality;
  elements.modalDescription.textContent = place.description;
  elements.modalLocation.textContent = `${place.location}, ${place.municipality}`;
  elements.modalTime.textContent = place.time;
  const isFavorite = state.favorites.includes(place.id);
  elements.modalFavorite.innerHTML = `${isFavorite ? "✓" : "♡"} ${isFavorite ? "Saved to your route" : "Save this place"}`;
  elements.shareLabel.textContent = "Share the note";
  elements.modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  elements.modalImage.parentElement.classList.remove("has-failed");
  elements.modalImage.addEventListener("error", () => elements.modalImage.parentElement.classList.add("has-failed"), { once: true });
}

function closeModal() {
  state.selected = null;
  elements.modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function sharePlace(place) {
  const shareText = `${place.name} in ${place.municipality} — TravelBuddies Bulacan`;
  const finish = () => {
    elements.shareLabel.textContent = "Copied to clipboard";
    window.setTimeout(() => {
      if (!state.selected) return;
      elements.shareLabel.textContent = "Share the note";
    }, 2200);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareText).then(finish).catch(finish);
  } else {
    finish();
  }
}

elements.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCards();
});
elements.municipality.addEventListener("change", (event) => {
  state.municipality = event.target.value;
  renderCards();
});
elements.category.addEventListener("change", (event) => {
  state.category = event.target.value;
  populateFilters();
  elements.municipality.value = state.municipality;
  elements.category.value = state.category;
  renderCards();
});
elements.chips.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-category]");
  if (!chip) return;
  state.category = state.category === chip.dataset.category ? categories[0] : chip.dataset.category;
  elements.category.value = state.category;
  populateFilters();
  elements.municipality.value = state.municipality;
  elements.category.value = state.category;
  renderCards();
});
elements.savedFilter.addEventListener("click", () => {
  state.showSaved = !state.showSaved;
  renderCards();
});
document.querySelector("#nav-saved").addEventListener("click", () => {
  state.showSaved = !state.showSaved;
  document.querySelector("#places").scrollIntoView({ behavior: "smooth" });
  renderCards();
});
document.querySelector("#mobile-saved").addEventListener("click", () => {
  state.showSaved = !state.showSaved;
  document.querySelector("#places").scrollIntoView({ behavior: "smooth" });
  renderCards();
});
elements.clear.addEventListener("click", clearFilters);
document.querySelector("#empty-clear").addEventListener("click", clearFilters);
document.querySelector("#brand-home").addEventListener("click", clearFilters);
elements.grid.addEventListener("click", (event) => {
  const favorite = event.target.closest("[data-favorite]");
  const opener = event.target.closest("[data-open]");
  if (favorite) toggleFavorite(favorite.dataset.favorite);
  if (opener) renderModal(destinations.find((place) => place.id === opener.dataset.open));
});
document.querySelector("#close-modal").addEventListener("click", closeModal);
elements.modal.addEventListener("mousedown", (event) => {
  if (event.target === elements.modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.modal.classList.contains("hidden")) closeModal();
});
elements.modalFavorite.addEventListener("click", () => {
  if (state.selected) toggleFavorite(state.selected.id);
});
elements.modalShare.addEventListener("click", () => {
  if (state.selected) sharePlace(state.selected);
});
document.querySelector("#hero-image").addEventListener("error", (event) => {
  event.target.parentElement.classList.add("has-failed");
});

populateFilters();
elements.municipality.value = state.municipality;
elements.category.value = state.category;
renderCards();