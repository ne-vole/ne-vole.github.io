const documents = {
  D1: {
    title: "Průběh projednávání sněmovního tisku 231",
    url: "https://www.psp.cz/sqw/historie.sqw?o=10&t=231",
    description: "Oficiální sněmovní evidence návrhu. Základní dokument pro většinu občanských stanovisek."
  },
  D2: {
    title: "Předložený návrh zákona, tisk 231/0",
    url: "https://www.psp.cz/sqw/text/tiskt.sqw?CT=231&CT1=0&O=10",
    description: "Stránka původního návrhu a souborů příslušného sněmovního tisku."
  },
  D3: {
    title: "Listina základních práv a svobod",
    url: "https://www.psp.cz/docs/laws/listina.html",
    description: "Zejména článek 17 – svoboda projevu, článek 18 – právo obracet se na státní orgány, článek 21 – účast občanů na správě veřejných věcí."
  },
  D4: {
    title: "Jednací řád Poslanecké sněmovny",
    url: "https://www.psp.cz/docs/laws/1995/90.html",
    description: "Zákon č. 90/1995 Sb., zejména § 53 o časech jednání a hlasování a příslušných výjimkách."
  },
  D5: {
    title: "European Media Freedom Act",
    url: "https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX:32024R1083",
    description: "Nařízení EU 2024/1083, článek 5: nezávislost médií veřejné služby, jmenování a odvolávání vedení, dostatečné a předvídatelné financování a nezávislé monitorování."
  },
  D6: {
    title: "Protokol č. 29 ke smlouvám EU",
    url: "https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX:12016M/PRO/29",
    description: "Právo členských států zvolit způsob financování veřejnoprávního vysílání za příslušných podmínek."
  },
  D7: {
    title: "Evropská vysílací unie: společné prohlášení z 23. října 2026",
    url: "https://www.ebu.ch/news/2026/10/concern-over-fast-tracked-debate-on-czech-public-service-media-funding",
    description: "Odborné stanovisko upozorňující na obavy z rychlého projednávání a dopadů na financování."
  },
  D8: {
    title: "Iveta Kvardová: analýza článku 5 EMFA",
    url: "https://www.jurisprudence.cz/cz/casopis/mezi-evropskym-narizenim-a-ceskou-realitou-analyza-cl-5-european-media-freedom-act-a-jeho-adaptace-do-ceskeho-pravniho-radu.m-1051.html",
    description: "Odborná publikace v časopise Jurisprudence 4/2026 o českých zárukách nezávislosti a otázce nezávislého monitorování podle EMFA. Jde o odborný názor, nikoliv o rozhodnutí soudu."
  },
  D9: {
    title: "Zákon o České televizi",
    url: "https://e-sbirka.gov.cz/sb/1991/483",
    description: ""
  },
  D10: {
    title: "Zákon o Českém rozhlasu",
    url: "https://e-sbirka.gov.cz/sb/1991/484",
    description: ""
  },
  D11: {
    title: "Zákon o rozhlasových a televizních poplatcích",
    url: "https://e-sbirka.gov.cz/sb/2005/348",
    description: ""
  }
};

const templates = {
  A: {
    name: "Poslanecká sněmovna",
    recipient: "posta@psp.cz",
    contactUrl: "https://www.psp.cz/sqw/hp.sqw?k=670",
    mode: "email",
    delivery: "E-mail do podatelny Poslanecké sněmovny",
    subject: "Občanské vyjádření obav k projednávání změn financování ČT a ČRo",
    opening: "Vážené paní poslankyně, vážení páni poslanci,",
    body: [
      "obracím se na Vás jako člověk, kterému není lhostejné, jak se rozhoduje o budoucnosti České televize a Českého rozhlasu.",
      "Znepokojuje mě způsob, jakým ve dnech 23. a 24. října 2026 proběhlo první čtení návrhu změny jejich financování. Po nočním jednání návrh prvním čtením prošel a pokračuje do dalšího projednávání. Zákon však dosud přijat nebyl a současné rozhlasové a televizní poplatky zůstávají v platnosti.",
      "Chápu, že vláda a parlamentní většina mají právo prosazovat své návrhy. Mám však pochybnosti, zda tak významné rozhodnutí dostalo dostatek prostoru k veřejné a odborné diskusi.",
      "Veřejnoprávní média mají sloužit celé společnosti, nikoliv kterékoliv současné či budoucí vládě.",
      "Nejde mi o podporu opozice ani o odmítání konkrétní politické strany. Chtěl bych především vědět, zda byly skutečně zváženy různé možnosti řešení a jak bude dlouhodobě chráněna nezávislost těchto institucí.",
      "Prosím, aby se při dalším projednávání braly vážně také tyto občanské obavy.",
      "Nežádám výjimečné zacházení. Jen důkladné, otevřené a odpovědné rozhodování."
    ].join("\n\n"),
    closing: "S pozdravem",
    defaults: ["D1", "D7"]
  },
  B: {
    name: "Výbor pro média a kulturu Poslanecké sněmovny",
    recipient: "posta@psp.cz",
    contactUrl: "https://www.psp.cz/sqw/hp.sqw?k=670",
    mode: "email",
    delivery: "E-mail do podatelny Poslanecké sněmovny, označený k rukám výboru",
    subject: "Občanská žádost o důkladné posouzení změn financování ČT a ČRo",
    opening: "K rukám Výboru pro média a kulturu Poslanecké sněmovny.\n\nVážené členky, vážení členové Výboru pro média a kulturu,",
    body: [
      "obracím se na Vás s obavou o budoucnost veřejnoprávních médií v České republice.",
      "Rozumím tomu, že jejich financování může být předmětem změn. Neumím však posoudit, zda navrhované řešení poskytne České televizi a Českému rozhlasu dlouhodobou stabilitu a skutečnou nezávislost.",
      "Návrh prošel 24. října 2026 prvním čtením a nyní míří k projednávání ve výborech. Výbor pro média a kulturu byl navržen jako garanční. Druhé ani třetí čtení dosud neproběhlo a zákon nebyl přijat.",
      "Právě proto se obracím na výbor, který byl navržen jako garanční pro další projednávání návrhu.",
      "Rád bych věděl, zda jsou dostatečně posouzeny ekonomické důsledky navržené změny a jak bude do budoucna zajištěno, aby financování médií nezáviselo na momentálních politických zájmech.",
      "Zajímají mě také pravidla pro nezávislé sledování dodržování evropských záruk pro veřejnoprávní média.",
      "Prosím o důkladné projednání těchto otázek, včetně případných alternativ.",
      "Jde mi o řešení, které bude fungovat i tehdy, když se politické poměry změní."
    ].join("\n\n"),
    closing: "S pozdravem",
    defaults: ["D1", "D5"]
  },
  C: {
    name: "Ministerstvo kultury",
    recipient: "epodatelna@mk.gov.cz",
    contactUrl: "https://www.mk.gov.cz/podatelna-cs-2819",
    mode: "email",
    delivery: "E-mail do elektronické podatelny Ministerstva kultury",
    subject: "Občanský dotaz k návrhu financování České televize a Českého rozhlasu",
    opening: "Vážené dámy, vážení pánové,",
    body: [
      "obracím se na Vás jako občan se zájmem o připravovanou změnu financování České televize a Českého rozhlasu.",
      "Návrh prošel 24. října 2026 prvním čtením a nyní míří k projednávání ve výborech. Druhé ani třetí čtení dosud neproběhlo, zákon nebyl přijat a dosavadní rozhlasové a televizní poplatky zůstávají v platnosti.",
      "Neodmítám možnost hledat jiné způsoby financování. Rád bych ale porozuměl tomu, proč bylo vybráno právě předložené řešení.",
      "Zajímá mě, zda existuje srozumitelné porovnání různých možností financování, včetně jejich dlouhodobých dopadů.",
      "Mám rovněž obavu, aby převod financování na státní rozpočet v budoucnu nevytvářel možnost nepřiměřeného politického tlaku.",
      "Prosím proto o vysvětlení, jaké konkrétní záruky mají zabránit tomu, aby některá ze současných či budoucích vlád využívala financování k ovlivňování veřejnoprávních médií.",
      "Ocenil bych také informaci, kde lze najít dostupné odborné a ekonomické podklady, z nichž návrh vychází.",
      "Jde mi o věcné vysvětlení, nikoliv o politickou polemiku."
    ].join("\n\n"),
    closing: "S pozdravem",
    defaults: ["D2", "D5"]
  },
  D: {
    name: "Senát Parlamentu ČR",
    recipient: "epodatelna@senat.cz",
    contactUrl: "https://www.senat.cz/kancelar/kontakty/",
    mode: "email",
    delivery: "E-mail do elektronické podatelny Senátu",
    subject: "Občanské stanovisko k připravované změně financování ČT a ČRo",
    opening: "Vážené paní senátorky, vážení páni senátoři,",
    body: [
      "obracím se na Vás s obavou ohledně připravovaných změn financování České televize a Českého rozhlasu.",
      "Návrh prošel 24. října 2026 prvním čtením a nyní míří k projednávání ve výborech Poslanecké sněmovny. Druhé ani třetí čtení dosud neproběhlo, zákon nebyl přijat a Senátu zatím předložen nebyl.",
      "Považuji za důležité, aby tak zásadní změny byly projednávány bez zbytečného spěchu a s dostatečným prostorem pro odborné názory.",
      "Veřejnoprávní média musí být schopná plnit svou úlohu nezávisle na tom, kdo právě vládne.",
      "Prosím proto, aby Senát v případě, že mu bude návrh zákona postoupen, věnoval zvláštní pozornost dlouhodobé nezávislosti a stabilitě těchto institucí.",
      "Uvítal bych také veřejnou odbornou diskusi o různých možnostech jejich financování.",
      "Nepřeji si, aby o budoucnosti veřejnoprávních médií rozhodoval krátkodobý politický zájem kterékoliv strany.",
      "Děkuji, že tyto občanské obavy vezmete při své práci v úvahu."
    ].join("\n\n"),
    closing: "S pozdravem",
    defaults: ["D1", "D5"]
  },
  E: {
    name: "Rada pro rozhlasové a televizní vysílání",
    recipient: "podatelna@rrtv.gov.cz",
    contactUrl: "https://rrtv.gov.cz/cz/static/rada-on-line/e-podatelna/index.htm",
    mode: "email",
    delivery: "E-mail do podatelny RRTV",
    subject: "Občanský dotaz k nezávislé ochraně veřejnoprávních médií",
    opening: "Vážené členky, vážení členové Rady,",
    body: [
      "obracím se na Vás s dotazem týkajícím se ochrany nezávislosti veřejnoprávních médií.",
      "Návrh změny financování prošel 24. října 2026 prvním čtením Poslanecké sněmovny a pokračuje do dalšího projednávání. Druhé ani třetí čtení dosud neproběhlo a zákon nebyl přijat.",
      "V souvislosti s projednávanými změnami financování České televize a Českého rozhlasu jsem se seznámil s evropským nařízením o svobodě médií, zejména s jeho článkem 5.",
      "Rád bych porozuměl tomu, kdo v České republice nezávisle sleduje dodržování pravidel, která mají chránit veřejnoprávní média před nepřiměřeným politickým vlivem.",
      "Zajímá mě, jaká je v této oblasti úloha RRTV a které další instituce jsou případně příslušné.",
      "Nežádám Radu o zásah do legislativního procesu. Jde mi o srozumitelné vysvětlení systému ochrany nezávislosti veřejnoprávních médií.",
      "Pokud tato otázka nespadá do Vaší působnosti, uvítám informaci, na kterou instituci se mohu obrátit."
    ].join("\n\n"),
    closing: "S pozdravem",
    defaults: ["D5", "D8"]
  },
  F: {
    name: "Zastoupení Evropské komise v ČR",
    recipient: "comm-rep-cz@ec.europa.eu",
    contactUrl: "https://czechia.representation.ec.europa.eu/o-nas/kontakt_cs",
    mode: "email",
    delivery: "E-mail Zastoupení Evropské komise v České republice",
    subject: "Občanský dotaz k evropským zárukám nezávislosti veřejnoprávních médií v ČR",
    opening: "Vážené dámy, vážení pánové,",
    body: [
      "obracím se na Vás jako občan se zájmem o ochranu nezávislosti veřejnoprávních médií v České republice.",
      "V českém Parlamentu se projednává návrh změny financování České televize a Českého rozhlasu. Dne 24. října 2026 prošel prvním čtením Poslanecké sněmovny a nyní míří k projednávání ve výborech. Druhé ani třetí čtení dosud neproběhlo a zákon nebyl přijat. Znepokojuje mě zejména otázka, zda může nový způsob financování v budoucnu vytvořit větší závislost těchto institucí na politických rozhodnutích.",
      "Vím, že Evropská unie ponechává členským státům možnost zvolit si vlastní model financování. Současně však evropské nařízení o svobodě médií stanoví pravidla pro ochranu jejich nezávislosti.",
      "Rád bych proto věděl, jakým způsobem se kontroluje dodržování těchto pravidel a na který příslušný útvar Evropské komise se může občan obrátit s podloženými pochybnostmi.",
      "Nežádám Evropskou komisi, aby nahrazovala český Parlament. Zajímá mě, jaké záruky poskytuje evropské právo.",
      "Děkuji za případné nasměrování."
    ].join("\n\n"),
    closing: "S pozdravem",
    defaults: ["D1", "D5"]
  },
  G: {
    name: "Evropská komise – podnět k posouzení možného nesouladu s právem EU",
    recipientLabel: "Evropská komise · oficiální formulář",
    mode: "form",
    officialUrl: "https://commission.europa.eu/about/contact/problems-and-complaints/complaints-about-breaches-eu-law-member-states/report-breach-eu-law-eu-country_cs",
    delivery: "Zkopírování textu a ruční vložení do oficiálního formuláře Evropské komise",
    notice: "Pouhý návrh zákona nemusí sám o sobě zakládat porušení práva EU. Evropská komise sama rozhoduje o dalším postupu.",
    subject: "Podnět k posouzení záruk nezávislosti veřejnoprávních médií v České republice",
    opening: "Vážené dámy, vážení pánové,",
    body: [
      "obracím se na Evropskou komisi s žádostí o posouzení otázky, zda český systém ochrany veřejnoprávních médií dostatečně odpovídá požadavkům článku 5 nařízení (EU) 2024/1083.",
      "V České republice se projednává návrh změny financování České televize a Českého rozhlasu, sněmovní tisk č. 231. Dne 24. října 2026 prošel prvním čtením Poslanecké sněmovny a nyní míří k projednávání ve výborech. Druhé ani třetí čtení dosud neproběhlo a zákon nebyl přijat.",
      "Samotnou změnu způsobu financování nepovažuji automaticky za porušení práva EU.",
      "Mám však pochybnosti, zda jsou dostatečně právně zajištěny dlouhodobá předvídatelnost financování, institucionální nezávislost a nezávislé monitorování podle článku 5 uvedeného nařízení.",
      "Na možné nedostatky české úpravy upozorňuje také zveřejněná odborná právní analýza.",
      "Žádám proto o posouzení, zda v této oblasti existují systémové nedostatky relevantní z hlediska uplatňování unijního práva.",
      "Jsem si vědom, že Evropská komise neposkytuje občanům individuální právní zastoupení a sama rozhoduje o dalším postupu."
    ].join("\n\n"),
    closing: "S pozdravem",
    defaults: ["D1", "D5", "D8"]
  },
  H: {
    name: "European Broadcasting Union (EBU)",
    recipientLabel: "European Broadcasting Union · official contact form",
    mode: "form",
    officialUrl: "https://www.ebu.ch/about/contact-us",
    delivery: "Copy the text and paste it manually into the official EBU contact form",
    subject: "Citizen concern regarding public service media independence in Czechia",
    opening: "Dear EBU Team,",
    body: [
      "I am writing as a citizen concerned about the future independence of public service media in the Czech Republic.",
      "I have read your statement of 23 October 2026 concerning the proposed changes to the funding of Czech Television and Czech Radio.",
      "On 24 October 2026, following an overnight debate, the bill passed its first reading in the Czech Chamber of Deputies and is proceeding to committee consideration. It has not been adopted as law, and the existing radio and television licence fees remain in force.",
      "I appreciate that your organisation has already drawn attention to the importance of sufficient public debate and safeguards for media independence.",
      "My concern is not about supporting one political party against another. I believe public service media should remain independent of any present or future government.",
      "I would welcome continued expert attention to the proposed legislation, particularly its long-term financial implications and the safeguards required under Article 5 of the European Media Freedom Act.",
      "I understand that your organisation cannot intervene directly in the Czech legislative process.",
      "Thank you for your work and for considering this citizen perspective."
    ].join("\n\n"),
    closing: "Kind regards,",
    defaults: ["D1", "D5", "D7"]
  },
  I: {
    name: "European Centre for Press and Media Freedom (ECPMF)",
    recipient: "info@ecpmf.eu",
    contactUrl: "https://www.ecpmf.eu/contact/",
    mode: "email",
    delivery: "E-mail to the European Centre for Press and Media Freedom",
    subject: "Citizen concern about public service media safeguards in Czechia",
    opening: "Dear ECPMF Team,",
    body: [
      "I am writing to express my concerns about the proposed changes to the funding of Czech Television and Czech Radio.",
      "On 24 October 2026, following an overnight debate, the relevant bill passed its first reading in the Czech Chamber of Deputies and is proceeding to committee consideration. It has not been adopted as law, and the existing radio and television licence fees remain in force.",
      "I recognise the right of elected representatives to change legislation. However, I am concerned that a reform of this importance requires sufficient public discussion and careful assessment of its long-term consequences.",
      "My main concern is whether adequate safeguards will prevent future governments from exercising undue influence over public service media through funding decisions.",
      "I would welcome your expert attention to this issue, particularly to the guarantees set out in Article 5 of the European Media Freedom Act.",
      "I am writing as an individual citizen, not on behalf of a political party or organisation.",
      "Thank you for considering my concerns."
    ].join("\n\n"),
    closing: "Kind regards,",
    defaults: ["D1", "D7"]
  },
  J: {
    name: "Poslanec Evropského parlamentu",
    mode: "mep",
    delivery: "E-mail konkrétnímu europoslanci po ručním doplnění ověřené adresy",
    notice: "Žádná osobní e-mailová adresa není předvyplněna. Jméno, oslovení a adresu ověřte v oficiálním seznamu Evropského parlamentu.",
    subject: "Občanský dotaz k uplatňování evropských záruk nezávislosti médií v ČR",
    opening: "",
    body: [
      "obracím se na Vás jako občan se zájmem o ochranu nezávislosti veřejnoprávních médií.",
      "V České republice se projednává návrh změny financování České televize a Českého rozhlasu, který 24. října 2026 prošel prvním čtením Poslanecké sněmovny a nyní míří k projednávání ve výborech. Druhé ani třetí čtení dosud neproběhlo a zákon nebyl přijat. Návrh vyvolává otázky ohledně dlouhodobé stability a možného politického vlivu.",
      "Vím, že konkrétní způsob financování je v zásadě rozhodnutím členského státu. Zajímá mě však, jak se v praxi ověřuje dodržování ochranných pravidel evropského nařízení o svobodě médií.",
      "Rád bych se proto zeptal, zda se příslušné orgány Evropského parlamentu těmito otázkami zabývají a jak mohou občané upozornit na případné nedostatky.",
      "Nežádám zásah do českého legislativního procesu, ale informaci o možnostech evropské kontroly.",
      "Děkuji Vám za pozornost."
    ].join("\n\n"),
    closing: "S pozdravem",
    defaults: ["D1", "D5", "D8"]
  }
};

const form = document.querySelector("#emailForm");
const route = document.querySelector("#route");
const allowedRouteKeys = new Set(["A", "B", "C", "D", "E", "F", "I"]);
const routeCard = document.querySelector("#routeCard");
const routeName = document.querySelector("#routeName");
const routeDelivery = document.querySelector("#routeDelivery");
const routeDefaults = document.querySelector("#routeDefaults");
const routeContact = document.querySelector("#routeContact");
const routeNotice = document.querySelector("#routeNotice");
const fixedRecipientField = document.querySelector("#fixedRecipientField");
const recipientDisplay = document.querySelector("#recipientDisplay");
const subjectInput = document.querySelector("#subjectInput");
const greetingInput = document.querySelector("#greetingInput");
const messageBody = document.querySelector("#messageBody");
const closingInput = document.querySelector("#closingInput");
const signatureInput = document.querySelector("#signatureInput");
const defaultDocumentList = document.querySelector("#defaultDocumentList");
const otherDocumentList = document.querySelector("#otherDocumentList");
const moreDocuments = document.querySelector("#moreDocuments");
const copyEmail = document.querySelector("#copyEmail");
const copyEmailDialog = document.querySelector("#copyEmailDialog");
const copyDialogCloseButtons = [...copyEmailDialog.querySelectorAll("[data-copy-dialog-close]")];
const copyDialogRecipient = document.querySelector("#copyDialogRecipient");
const copyDialogSubject = document.querySelector("#copyDialogSubject");
const copyDialogBody = document.querySelector("#copyDialogBody");
const copyDialogRecipientButton = document.querySelector("#copyDialogRecipientButton");
const copyDialogSubjectButton = document.querySelector("#copyDialogSubjectButton");
const copyDialogBodyButton = document.querySelector("#copyDialogBodyButton");
const copyDialogRecipientStatus = document.querySelector("#copyDialogRecipientStatus");
const copyDialogSubjectStatus = document.querySelector("#copyDialogSubjectStatus");
const copyDialogBodyStatus = document.querySelector("#copyDialogBodyStatus");
const openOutlook = document.querySelector("#openOutlook");
const openWorkOutlook = document.querySelector("#openWorkOutlook");
const retryCopyBody = document.querySelector("#retryCopyBody");
const copyRecipient = document.querySelector("#copyRecipient");
const copySubject = document.querySelector("#copySubject");
const shareTop = document.querySelector("#shareTop");
const shareForm = document.querySelector("#shareForm");
const shareStatus = document.querySelector("#shareStatus");
const shareDialog = document.querySelector("#shareDialog");
const closeShareDialog = document.querySelector("#closeShareDialog");
const shareDialogStatus = document.querySelector("#shareDialogStatus");
const shareLocalWarning = document.querySelector("#shareLocalWarning");
const copyShareLink = document.querySelector("#copyShareLink");
const systemShare = document.querySelector("#systemShare");
const shareNetworkLinks = [...document.querySelectorAll("[data-share-network]")];
const formStatus = document.querySelector("#formStatus");
const previewTo = document.querySelector("#previewTo");
const previewSubject = document.querySelector("#previewSubject");
const previewDelivery = document.querySelector("#previewDelivery");
const previewBody = document.querySelector("#previewBody");
const previewLength = document.querySelector("#previewLength");
const previewTitle = document.querySelector("#preview-title");
const lengthWarning = document.querySelector("#lengthWarning");

const editableTemplateFields = [subjectInput, greetingInput, messageBody, closingInput];
let previousRoute = "";
let templateDirty = false;
let loadingTemplate = false;
let activePublicUrl = "";
let lastShareTrigger = null;
let lastCopyEmailTrigger = null;

const OUTLOOK_PERSONAL_URL = "https://outlook.live.com/mail/0/deeplink/compose";
const OUTLOOK_WORK_URL = "https://outlook.office.com/mail/deeplink/compose";
const SAFE_COMPOSE_URL_LENGTH = 1800;
const SHARE_TITLE = "NeVOLE – Veřejná média patří veřejnosti.";
const SHARE_TEXT = "Veřejná média patří veřejnosti. Co si myslíte o navrhovaných změnách financování ČT a ČRo? Přečtěte si podklady, udělejte si vlastní názor a případně se vyjádřete.";

function selectedTemplate() {
  return allowedRouteKeys.has(route.value) ? templates[route.value] : null;
}

function setStatus(message) {
  formStatus.textContent = message;
}

function createDocumentOption(id, checked) {
  const documentData = documents[id];
  const row = document.createElement("div");
  row.className = "document-option";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `document-${id}`;
  checkbox.dataset.documentId = id;
  checkbox.checked = checked;

  const copy = document.createElement("div");
  copy.className = "document-copy";
  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = `${id} – ${documentData.title}`;
  copy.appendChild(label);
  if (documentData.description) {
    const description = document.createElement("p");
    description.textContent = documentData.description;
    copy.appendChild(description);
  }

  const anchor = document.createElement("a");
  anchor.href = documentData.url;
  anchor.target = "_blank";
  anchor.rel = "noopener";
  anchor.textContent = "Otevřít originál";

  checkbox.addEventListener("change", renderPreview);
  row.append(checkbox, copy, anchor);
  return row;
}

function renderDocuments(defaultIds = []) {
  defaultDocumentList.replaceChildren();
  otherDocumentList.replaceChildren();
  Object.keys(documents).forEach((id) => {
    const isDefault = defaultIds.includes(id);
    const row = createDocumentOption(id, isDefault);
    (isDefault ? defaultDocumentList : otherDocumentList).appendChild(row);
  });
  moreDocuments.open = false;
}

function selectedDocuments() {
  return Object.entries(documents)
    .filter(([id]) => document.querySelector(`#document-${id}`)?.checked)
    .map(([id, documentData]) => ({ id, ...documentData }));
}

function currentRecipient() {
  const template = selectedTemplate();
  return template?.recipient || "";
}

function currentRecipientLabel() {
  const template = selectedTemplate();
  return template?.recipient || "";
}

function buildMessageBody() {
  const selected = selectedDocuments();
  const documentLines = selected
    .map((documentData) => `${documentData.title}\n${documentData.url}`)
    .join("\n\n");
  const documentsSection = documentLines
    ? `Podklady, ze kterých vycházím:\n${documentLines}`
    : "Podklady, ze kterých vycházím:";

  return [
    greetingInput.value.trim(),
    messageBody.value.trim(),
    documentsSection,
    closingInput.value.trim(),
    signatureInput.value.trim()
  ].filter(Boolean).join("\n\n");
}

function outlookComposeUrl(baseUrl, includeBody = true) {
  const parameters = [
    `to=${encodeURIComponent(currentRecipient())}`,
    `subject=${encodeURIComponent(subjectInput.value.trim())}`
  ];
  if (includeBody) parameters.push(`body=${encodeURIComponent(buildMessageBody())}`);
  return `${baseUrl}?${parameters.join("&")}`;
}

function updateOutlookLink(link, baseUrl, template) {
  if (!template) {
    link.removeAttribute("href");
    link.setAttribute("aria-disabled", "true");
    link.dataset.long = "false";
    return 0;
  }

  const fullUrl = outlookComposeUrl(baseUrl, true);
  const isLong = fullUrl.length > SAFE_COMPOSE_URL_LENGTH;
  link.href = isLong ? outlookComposeUrl(baseUrl, false) : fullUrl;
  link.setAttribute("aria-disabled", "false");
  link.dataset.long = String(isLong);
  return fullUrl.length;
}

function updateOutlookLinks(template) {
  const personalLength = updateOutlookLink(openOutlook, OUTLOOK_PERSONAL_URL, template);
  const workLength = updateOutlookLink(openWorkOutlook, OUTLOOK_WORK_URL, template);
  return Math.max(personalLength, workLength);
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 650px), (pointer: coarse)").matches;
}

function bodyCopySuccessMessage() {
  return isMobileLayout()
    ? "Hotovo. Otevřete svůj e-mail a vložte zkopírovanou zprávu."
    : "Hotovo. Otevřete svůj e-mail a vložte zprávu pomocí Ctrl+V.";
}

function outlookPasteMessage() {
  return isMobileLayout()
    ? "Text dopisu je zkopírovaný. Vložte jej do Outlooku."
    : "Text dopisu je zkopírovaný. Vložte jej do Outlooku pomocí Ctrl+V.";
}

function loadTemplate(key) {
  const template = allowedRouteKeys.has(key) ? templates[key] : null;
  loadingTemplate = true;
  setStatus("");

  routeCard.hidden = !template;
  fixedRecipientField.hidden = !template;
  openOutlook.hidden = !template;
  openWorkOutlook.hidden = !template;
  retryCopyBody.hidden = true;

  if (!template) {
    recipientDisplay.value = "";
    subjectInput.value = "";
    greetingInput.value = "";
    messageBody.value = "";
    closingInput.value = "";
    defaultDocumentList.replaceChildren();
    otherDocumentList.replaceChildren();
    loadingTemplate = false;
    templateDirty = false;
    renderPreview();
    return;
  }

  routeName.textContent = template.name;
  routeDelivery.textContent = template.delivery;
  routeDefaults.textContent = template.defaults
    .map((id) => documents[id].title)
    .join("; ");
  routeContact.href = template.contactUrl;
  routeNotice.textContent = template.notice || "";
  routeNotice.hidden = !template.notice;
  recipientDisplay.value = template.recipient || template.recipientLabel || "";
  subjectInput.value = template.subject;
  greetingInput.value = template.opening;
  messageBody.value = template.body;
  closingInput.value = template.closing;
  renderDocuments(template.defaults);

  loadingTemplate = false;
  templateDirty = false;
  renderPreview();
}

function renderPreview() {
  const template = selectedTemplate();
  const body = template ? buildMessageBody() : "Po výběru adresáta se zde zobrazí celý připravený dopis.";
  previewTo.textContent = currentRecipientLabel() || "—";
  previewSubject.textContent = subjectInput.value.trim() || "—";
  previewDelivery.textContent = template?.delivery || "—";
  previewBody.textContent = body;
  previewLength.textContent = `${body.length} znaků`;
  previewTitle.textContent = template ? "Hotový dopis můžete upravit." : "Nejprve vyberte adresáta.";
  copyRecipient.disabled = !currentRecipient();
  copySubject.disabled = !subjectInput.value.trim();

  const encodedLength = updateOutlookLinks(template);
  lengthWarning.hidden = !(template && encodedLength > SAFE_COMPOSE_URL_LENGTH);
}

function validateBeforeAction(action) {
  const template = selectedTemplate();
  setStatus("");
  if (!template) {
    setStatus("Nejprve vyberte jednoho adresáta.");
    route.focus();
    return false;
  }
  if (!subjectInput.value.trim()) {
    setStatus("Doplňte předmět zprávy.");
    subjectInput.focus();
    return false;
  }
  if (!messageBody.value.trim()) {
    setStatus("Doplňte text zprávy.");
    messageBody.focus();
    return false;
  }
  if (!signatureInput.value.trim()) {
    setStatus("Doplňte pole PODPIS.");
    signatureInput.focus();
    return false;
  }
  if (action === "outlook" && !currentRecipient()) {
    setStatus("Chybí jeden konkrétní příjemce zprávy.");
    return false;
  }
  return true;
}

async function copyText(text, visibleFallback = null) {
  if (window.isSecureContext && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Pokračujeme kompatibilním záložním způsobem.
    }
  }

  if (visibleFallback) {
    visibleFallback.focus();
    visibleFallback.select();
    visibleFallback.setSelectionRange(0, visibleFallback.value.length);
    try {
      return document.execCommand("copy");
    } catch {
      return false;
    }
  }

  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.left = "-9999px";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();
  helper.setSelectionRange(0, helper.value.length);
  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    helper.remove();
  }
}

editableTemplateFields.forEach((field) => {
  field.addEventListener("input", () => {
    if (!loadingTemplate) templateDirty = true;
    renderPreview();
  });
});

signatureInput.addEventListener("input", renderPreview);

route.addEventListener("change", () => {
  const nextRoute = route.value;
  if (previousRoute && nextRoute !== previousRoute && templateDirty) {
    const replace = window.confirm("Upravil/a jste text dopisu. Změna adresáta jej nahradí novou předlohou. Chcete pokračovat?");
    if (!replace) {
      route.value = previousRoute;
      return;
    }
  }
  previousRoute = nextRoute;
  loadTemplate(nextRoute);
});

const copyDialogStatuses = [copyDialogRecipientStatus, copyDialogSubjectStatus, copyDialogBodyStatus];

function clearCopyDialogStatuses() {
  copyDialogStatuses.forEach((status) => {
    status.textContent = "";
  });
}

function fillCopyEmailDialog() {
  copyDialogRecipient.value = currentRecipient();
  copyDialogSubject.value = subjectInput.value.trim();
  copyDialogBody.value = buildMessageBody();
  clearCopyDialogStatuses();
}

function closeCopyEmailChooser() {
  if (typeof copyEmailDialog.close === "function" && copyEmailDialog.open) {
    copyEmailDialog.close();
    return;
  }
  copyEmailDialog.removeAttribute("open");
  copyEmailDialog.removeAttribute("aria-modal");
  lastCopyEmailTrigger?.focus();
}

async function copyDialogValue(field, status) {
  clearCopyDialogStatuses();
  const copied = await copyText(field.value, field);
  if (copied) {
    status.textContent = "Zkopírováno";
    return;
  }
  status.textContent = "Kopírování se nepodařilo. Text můžete označit a zkopírovat ručně.";
  field.focus();
  field.select();
  field.setSelectionRange(0, field.value.length);
}

copyEmail.addEventListener("click", () => {
  if (!validateBeforeAction("copy")) return;
  retryCopyBody.hidden = true;
  lastCopyEmailTrigger = copyEmail;
  fillCopyEmailDialog();
  if (typeof copyEmailDialog.showModal === "function") copyEmailDialog.showModal();
  else {
    copyEmailDialog.setAttribute("open", "");
    copyEmailDialog.setAttribute("aria-modal", "true");
  }
  copyDialogRecipientButton.focus();
});

copyDialogRecipientButton.addEventListener("click", () => copyDialogValue(copyDialogRecipient, copyDialogRecipientStatus));
copyDialogSubjectButton.addEventListener("click", () => copyDialogValue(copyDialogSubject, copyDialogSubjectStatus));
copyDialogBodyButton.addEventListener("click", () => copyDialogValue(copyDialogBody, copyDialogBodyStatus));
copyDialogCloseButtons.forEach((button) => button.addEventListener("click", closeCopyEmailChooser));
copyEmailDialog.addEventListener("close", () => lastCopyEmailTrigger?.focus());
copyEmailDialog.addEventListener("click", (event) => {
  if (event.target === copyEmailDialog) closeCopyEmailChooser();
});
copyEmailDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && typeof copyEmailDialog.showModal !== "function") {
    event.preventDefault();
    closeCopyEmailChooser();
  }
});

retryCopyBody.addEventListener("click", async () => {
  if (!validateBeforeAction("copy")) return;
  const copied = await copyText(buildMessageBody());
  retryCopyBody.hidden = copied;
  setStatus(copied
    ? bodyCopySuccessMessage()
    : "Kopírování se stále nedaří. Označte prosím celý text v náhledu ručně.");
});

copyRecipient.addEventListener("click", async () => {
  const recipient = currentRecipient();
  if (!recipient) return;
  const copied = await copyText(recipient);
  setStatus(copied
    ? "Adresa příjemce je zkopírovaná."
    : "Adresu se nepodařilo zkopírovat. Označte ji prosím v náhledu ručně.");
});

copySubject.addEventListener("click", async () => {
  const subject = subjectInput.value.trim();
  if (!subject) return;
  const copied = await copyText(subject);
  setStatus(copied
    ? "Předmět je zkopírovaný."
    : "Předmět se nepodařilo zkopírovat. Označte jej prosím v náhledu ručně.");
});

function handleOutlookClick(event) {
  const link = event.currentTarget;
  if (link.getAttribute("aria-disabled") === "true" || !validateBeforeAction("outlook")) {
    event.preventDefault();
    return;
  }

  retryCopyBody.hidden = true;
  if (link.dataset.long !== "true") {
    setStatus("Outlook otevírá připravený koncept. Zprávu zkontrolujte a odešlete sami.");
    return;
  }

  setStatus(isMobileLayout()
    ? "Outlook se otevře s příjemcem a předmětem. Celý text dopisu kopíruji do schránky."
    : "Outlook se otevře s příjemcem a předmětem. Celý text dopisu kopíruji do schránky pro vložení pomocí Ctrl+V.");
  copyText(buildMessageBody()).then((copied) => {
    if (copied) {
      setStatus(outlookPasteMessage());
      return;
    }
    retryCopyBody.hidden = false;
    setStatus("Outlook se otevřel bez těla zprávy a kopírování se nepovedlo. Použijte tlačítko pro opakování kopírování.");
  });
}

openOutlook.addEventListener("click", handleOutlookClick);
openWorkOutlook.addEventListener("click", handleOutlookClick);

function isPrivateOrLocalHostname(hostname) {
  const host = hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (!host || host === "localhost" || host === "::1" || host === "0.0.0.0" || host.endsWith(".localhost") || host.endsWith(".local")) return true;
  if (host === "127.0.0.1" || host.startsWith("127.")) return true;
  if (host.startsWith("10.") || host.startsWith("192.168.")) return true;
  const match172 = host.match(/^172\.(\d{1,3})\./);
  return Boolean(match172 && Number(match172[1]) >= 16 && Number(match172[1]) <= 31);
}

function sanitizePublicUrl(rawUrl) {
  if (!rawUrl) return "";
  try {
    const url = new URL(rawUrl, window.location.href);
    if (url.protocol !== "https:" || isPrivateOrLocalHostname(url.hostname)) return "";
    url.search = "";
    url.hash = "";
    return url.toString();
  } catch {
    return "";
  }
}

function publicPageUrl() {
  const configured = document.querySelector('meta[name="nevole-public-url"]')?.content.trim();
  return sanitizePublicUrl(configured) || sanitizePublicUrl(window.location.href);
}

function shareUrlFor(network, pageUrl) {
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedText = encodeURIComponent(SHARE_TEXT);
  if (network === "facebook") return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  if (network === "whatsapp") return `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT}\n\n${pageUrl}`)}`;
  if (network === "x") return `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
  if (network === "telegram") return `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
  if (network === "linkedin") return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  return "";
}

function prepareShareOptions() {
  activePublicUrl = publicPageUrl();
  const hasPublicUrl = Boolean(activePublicUrl);
  shareLocalWarning.hidden = hasPublicUrl;
  copyShareLink.disabled = !hasPublicUrl;
  systemShare.hidden = !(hasPublicUrl && typeof navigator.share === "function");

  shareNetworkLinks.forEach((link) => {
    if (!hasPublicUrl) {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
      return;
    }
    link.href = shareUrlFor(link.dataset.shareNetwork, activePublicUrl);
    link.setAttribute("aria-disabled", "false");
  });

  shareDialogStatus.textContent = hasPublicUrl
    ? "Vyberte službu. Příspěvek nebo zprávu vždy potvrzujete sami."
    : "Lokální adresu nelze bezpečně sdílet. Možnosti se aktivují na veřejné HTTPS adrese.";
}

function openShareChooser(trigger) {
  lastShareTrigger = trigger;
  prepareShareOptions();
  const originStatus = trigger === shareTop ? shareStatus : formStatus;
  originStatus.textContent = "Nabídka sdílení je otevřená. Formulářová data se nesdílejí.";
  if (typeof shareDialog.showModal === "function") shareDialog.showModal();
  else shareDialog.setAttribute("open", "");
}

function closeShareChooser() {
  if (typeof shareDialog.close === "function" && shareDialog.open) shareDialog.close();
  else {
    shareDialog.removeAttribute("open");
    lastShareTrigger?.focus();
  }
}

document.querySelectorAll("[data-share-trigger]").forEach((trigger) => {
  trigger.addEventListener("click", () => openShareChooser(trigger));
});

closeShareDialog.addEventListener("click", closeShareChooser);
shareDialog.addEventListener("close", () => lastShareTrigger?.focus());
shareDialog.addEventListener("click", (event) => {
  if (event.target === shareDialog) closeShareChooser();
});

shareNetworkLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
      return;
    }
    const names = { facebook: "Facebooku", whatsapp: "WhatsAppu", x: "síti X", telegram: "Telegramu", linkedin: "LinkedInu" };
    shareDialogStatus.textContent = `Otevřelo se rozhraní ${names[link.dataset.shareNetwork]} v nové kartě. Sdílení ještě musíte potvrdit.`;
  });
});

copyShareLink.addEventListener("click", async () => {
  if (!activePublicUrl) return;
  const copied = await copyText(activePublicUrl);
  shareDialogStatus.textContent = copied
    ? "Veřejný odkaz je zkopírovaný. Obsah formuláře se nekopíroval."
    : "Odkaz se nepodařilo zkopírovat. Zkuste to prosím znovu.";
});

systemShare.addEventListener("click", async () => {
  if (!activePublicUrl || typeof navigator.share !== "function") return;
  shareDialogStatus.textContent = "Otevírám systémovou nabídku. Sdílení potvrzujete sami.";
  try {
    await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url: activePublicUrl });
    shareDialogStatus.textContent = "Systémová nabídka byla zavřena. Web nic dalšího neodesílá.";
  } catch (error) {
    shareDialogStatus.textContent = error?.name === "AbortError"
      ? "Sdílení bylo zrušeno."
      : "Systémovou nabídku se nepodařilo otevřít. Vyberte jinou možnost.";
  }
});

form.addEventListener("submit", (event) => event.preventDefault());

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#mainNav");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
}));

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
const progressBar = document.querySelector("#progressBar");
function updateProgress() {
  if (!progressBar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });

loadTemplate("");
updateProgress();
