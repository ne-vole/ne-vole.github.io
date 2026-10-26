# NeVOLE — kompletní nezávislý audit webu

**Datum kontroly:** 26. 10. 2026  
**Auditovaná složka:** `C:\Users\user\Desktop\NeVOLE!\NeVOLE-github-pages`  
**Stav webu:** před zveřejněním  
**Oprava závěrů:** 26. 10. 2026  
**Verdikt k legislativnímu stavu:** **LEG-001 a LEG-002 se stahují; dokončení prvního čtení dne 24. 10. 2026 je doložené. LEG-003 je vyřešen jako bodové ověření k 26. 10. 2026. Ostatní auditní nálezy zůstávají beze změny.**

> **Rozhodující rozlišení:** Návrh prošel prvním čtením. Neznamená to, že byl přijat zákon. Druhé ani třetí čtení dosud neproběhlo a dosavadní rozhlasové a televizní poplatky zůstávají v platnosti.

## 1. Co bylo zkontrolováno

Audit zahrnuje úplný obsah webu, všech deset předloh dopisů v JavaScriptu (sedm aktivních a tři neaktivní), jedenáct nabízených dokumentů, všechny kontakty, právní tvrzení, odkazy, pravopis a styl, funkce formuláře, přístupnost, responsivitu, soukromí, bezpečnost, metadata, README a připravenost pro GitHub Pages.

Kontrola proběhla proti aktuálním primárním zdrojům Poslanecké sněmovny, e‑Sbírky, Ministerstva vnitra, Policie ČR, RRTV, Senátu, Ministerstva kultury, Úřadu vlády, Evropské komise a EUR‑Lex. Sekundární odborné zdroje EBU, ECPMF a Jurisprudence byly hodnoceny jako odborná stanoviska, nikoli jako právní prameny.

### Výslovně vyloučeno

- Existující PDF mimo projekt nebylo otevřeno, přečteno, kopírováno ani změněno.
- Nebyl odeslán žádný e-mail, formulář ani jiné podání.
- Nebyly změněny soubory webu `index.html`, `styles.css`, `script.js`, `README.md`, `favicon.svg` ani `.nojekyll`.
- V projektu nejsou žádná PDF ani lokální kopie externích dokumentů.

## 2. Identifikace auditované verze

| Soubor | Velikost | SHA-256 |
|---|---:|---|
| `.nojekyll` | 1 B | `01BA4719C80B6FE911B091A7C05124B64EEECE964E09C058EF8F9805DACA546B` |
| `favicon.svg` | 380 B | `BD691D1283CA941A1333F01E4641E44248A206CADFB81728412AEA68D14F7164` |
| `index.html` | 22 089 B | `EB05818747BDC392CFC933D9E1E9851508A0680172F5CA94C85CFB28DFCB7A35` |
| `README.md` | 3 063 B | `EEF6BC3ED69B184158E0CC0E06A27DD1F55967BB83AC7BE86BAD096D66FFD76D` |
| `script.js` | 29 567 B | `4906F8615A8F88BE93135C22B75CC24E67838F7088C8F68B72448E61D3ED982A` |
| `styles.css` | 20 125 B | `CE9F9612B8F3173C43CF3CDEBC2086B0F61221F1158FBA45213AABC761EE80B1` |

Tato tabulka zachycuje historický otisk verze při původním auditu. Datovaná oprava legislativních závěrů tento původní otisk nepřepisuje; aktuální soubory webu mají po opravě jiné kontrolní součty.

## 3. Stručný výsledek

### Opravené závěry k legislativnímu stavu

1. **LEG-001 — staženo pro neúplné podklady.** Věta aktivní anglické předlohy ECPMF, že návrh 24. 10. 2026 prošel prvním čtením, je správná. Původní závěr vycházel z průběžné historie tisku, která ještě nezobrazovala doložené dokončení prvního čtení.
2. **LEG-002 — staženo pro neúplné podklady.** Projednávání ve dnech 23. a 24. 10. 2026, včetně nočního pokračování, dokládají oficiální záznamy jednání a hlasování spolu s datovanými zpravodajskými zdroji. Datum 24. 10. 2026 se neodstraňuje.
3. **LEG-003 — vyřešeno.** Datum 26. 10. 2026 je bodovým údajem o posledním ověření, nikoli trvalou zárukou aktuálnosti. Při pozdější aktualizaci webu musí být legislativní stav znovu ověřen.
4. **COPY-001 — zavádějící tlačítko.** `ODESLAT PŘES MŮJ E-MAIL` nic neodesílá; pouze otevře koncept přes `mailto:`. Přesný text je `OTEVŘÍT V E-MAILOVÉ APLIKACI`.
5. **COPY-002 — mužský rod v hotových dopisech.** Česká předloha má být použitelná každým, ale obsahuje například „chtěl bych“, „rád bych“, „jako občan“ a „seznámil“. Doporučeny jsou neutrální věty bez nutnosti ruční opravy.

### Celkové hodnocení

- **Právní a skutkový obsah:** původní legislativní blocker LEG-001 až LEG-003 po doplnění důkazů odpadl; ostatní právní a redakční nálezy tohoto auditu zůstávají beze změny.
- **Kontakty:** všech šest jedinečných aktivních adres je aktuálně správných; u obecné podatelny PSP a Senátu nelze slíbit automatické rozeslání všem zákonodárcům.
- **Jazyk:** text je obecně srozumitelný a civilní; nalezeny byly dvě významné, osm středních a několik redakčních nedostatků.
- **Technika:** žádný technický blocker, žádné chyby syntaxe ani konzole, žádný horizontální přesah na kontrolovaných šířkách 1024, 768, 390 a 320 px.
- **Soukromí:** velmi dobré. Bez backendu, analytiky, cookies, úložišť, automatického odesílání a skrytých příjemců.
- **Přístupnost:** dobrý základ; je třeba doplnit vazby nápověd, anglický jazyk předlohy a zvážit ovladatelnost scrollovacího náhledu.
- **Sdílení a SEO:** základní metadata existují, ale chybí canonical, Open Graph/Twitter metadata a náhledový obrázek.

## 4. Právní a skutková kontrola

| ID | Závažnost | Umístění | Stav | Nález a doporučení |
|---|---|---|---|---|
| LEG-001 | informační | původně `script.js:229` | **withdrawn_incomplete_evidence** | „passed its first reading“ je správně. Oficiální rejstřík jednání a hlasování spolu s datovanými zprávami ČTK a iROZHLAS potvrzují dokončení prvního čtení 24. 10. 2026. |
| LEG-002 | informační | původně `script.js:70` | **withdrawn_incomplete_evidence** | Projednávání ve dnech 23. a 24. 10. 2026 je doloženo. Výsledky „Zamítnuto“ se vztahují k opozičním návrhům na zamítnutí či vrácení, nikoli k zamítnutí vládního návrhu jako celku. |
| LEG-003 | informační | původně `index.html:250` | **resolved_verified_as_of_2026-10-26** | Datum 26. 10. 2026 je správně uvedeno jako bodové ověření; při pozdější aktualizaci musí být stav ověřen znovu. |
| LEG-004 | střední | `index.html:226` | **verified_with_caveat** | Pouhé označení „podle § 42“ lhůtu nevytvoří. Musí obsahově jít o podnět k zahájení řízení z moci úřední a podatel musí požádat o vyrozumění. Potom orgán do 30 dnů sdělí, zda řízení zahájil, neshledal důvody nebo podnět postoupil. |
| LEG-005 | střední | `index.html:229` | **verified_but_incomplete** | Popis stížnosti dle § 175 je správný, ale chybí 60denní lhůta pro vyřízení a zákonná výjimka, pokud nelze zajistit podklady. |
| LEG-006 | nízká | `index.html:194` | **verified_with_caveat** | ePetice není jediná elektronická možnost. Přesnější: „Nejjednodušší státem ověřenou elektronickou cestou je ePetice.“ |
| LEG-007 | střední | `index.html:213` | **potentially_misleading** | Nadpis může budit dojem, že Úřad vlády přezkoumává postup Sněmovny. Přesnější: „Podnět k vládnímu návrhu nebo vládním podkladům.“ |
| LEG-008 | informační | původně `script.js:91` | **superseded_by_confirmed_legislative_progress** | Po dokončeném prvním čtení návrh míří k projednávání ve výborech. Výbor pro média a kulturu je přesně popsán jako výbor navržený coby garanční. |
| LEG-009 | střední | `script.js:237` | **content_mismatch** | Aktivní dopis ECPMF argumentuje článkem 5 EMFA, ale výchozí dokumenty jsou D1 + D7. Vhodnější jsou D1 + D5. |
| LEG-010 | nízká | `index.html:257` | **incomplete_reference** | Hlavní seznam zdrojů uvádí u Listiny jen čl. 17, zatímco D3 správně odkazuje i na čl. 18 a 21. |
| LEG-011 | informační | `script.js:25` | **verified** | Popis čl. 5 EMFA odpovídá nezávislosti, vedení, financování a nezávislému monitorování. |
| LEG-012 | informační | `script.js:30` | **verified_with_caveat** | Protokol č. 29 ponechává státům volbu financování za podmínek veřejné služby a hospodářské soutěže; text „za příslušných podmínek“ je přijatelný. |
| LEG-013 | informační | `script.js:20` | **verified** | § 53 jednacího řádu upravuje časy jednání a hlasování i možnost Sněmovny usnést se jinak. |
| LEG-014 | informační | `index.html:194,227` | **verified** | Petici může podat jednotlivec i více lidí; příslušný orgán do 30 dnů písemně odpoví k obsahu a způsobu vyřízení. |
| LEG-015 | informační | `index.html:228` | **verified** | Žádost dle zákona 106 má základní lhůtu 15 dnů a zákonné prodloužení nejvýše o 10 dnů; nevynucuje vytvoření nové informace. |
| LEG-016 | informační | `index.html:200,230` | **verified** | Trestní oznámení může podat kdokoli policii nebo státnímu zastupitelství; elektronická doporučení odpovídají oficiálnímu postupu Policie ČR. |
| LEG-017 | informační | `index.html:214`, šablona E | **verified_with_caveat** | Působnost RRTV je popsána správně. Není však doloženo, že RRTV je určeným monitorem dle čl. 5 odst. 4 EMFA; dopis se na to správně pouze ptá. |
| LEG-018 | informační | `index.html:215`, šablona G | **verified** | Komise řeší uplatňování práva EU státem a sama rozhoduje o dalším postupu; nejde o individuální opravný prostředek. |

### Rozhodující zdroje

- Historie sněmovního tisku 231: https://www.psp.cz/sqw/historie.sqw?o=10&t=231
- Stenografické záznamy 34. schůze: https://psp.cz/eknih/2025ps/stenprot/034schuz/index.htm
- Oficiální hlasování ze dne 24. 10. 2026: https://psp.cz/sqw/text/hl.sqw?d=20261024&o=10&s=34
- ČTK, dokončení prvního čtení a neúspěšné opoziční návrhy: https://www.ceskenoviny.cz/zpravy/koalice-poslala-do-druheho-cteni-navrh-zrusit-poplatky-pro-ct-a-cro/2891827
- iROZHLAS, vysvětlení stavu po prvním čtení: https://www.irozhlas.cz/zpravy-domov/otazky-a-odpovedi-co-znamena-schvaleni-navrhu-o-koncesionarskych-poplatcich-a-co_2610241447_pik
- Jednací řád PSP: https://www.psp.cz/docs/laws/1995/90.html
- Listina: https://www.psp.cz/docs/laws/listina.html
- RRTV, poučení k podnětům: https://www.rrtv.gov.cz/cz/static/rada-on-line/dotazy-a-stiznosti/index.htm
- Ministerstvo vnitra, petice: https://mv.gov.cz/petice-2
- Ministerstvo vnitra, stížnosti: https://mv.gov.cz/stiznosti
- Žádost podle zákona 106: https://portal.gov.cz/informace/podani-zadosti-o-poskytnuti-informace-INF-308
- Policie ČR, trestní oznámení: https://policie.gov.cz/trestni-oznameni
- EMFA: https://eur-lex.europa.eu/eli/reg/2024/1083/oj
- Protokol č. 29: https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX:12016M/PRO/29

## 5. Kontakty a doručovací cesty

| Trasa | Aktivní | Příjemce / cesta | Stav k 26. 10. 2026 | Výhrada |
|---|---:|---|---|---|
| A Poslanecká sněmovna | ano | `posta@psp.cz` | ověřeno | Obecná podatelna Kanceláře PSP; není zaručeno rozeslání každému poslanci. |
| B Výbor pro média a kulturu | ano | `posta@psp.cz`, označení „K rukám…“ | ověřeno | Směrovací označení je vhodné; lepší kontaktní odkaz může vést přímo na profil výboru. |
| C Ministerstvo kultury | ano | `epodatelna@mk.gov.cz` | ověřeno | Bez výhrady. |
| D Senát Parlamentu ČR | ano | `epodatelna@senat.cz` | ověřeno | Obecná podatelna; není zaručeno individuální doručení všem senátorům. |
| E RRTV | ano | `podatelna@rrtv.gov.cz` | ověřeno | Bez výhrady. |
| F Zastoupení EK v ČR | ano | `comm-rep-cz@ec.europa.eu` | ověřeno | Vhodné pro obecný dotaz, nikoli formální infringement complaint. |
| I ECPMF | ano | `info@ecpmf.eu` | ověřeno | Odborná nevládní organizace, nikoli úřad. |
| G Evropská komise – formální podnět | ne | oficiální formulář | URL je oficiální | Automatická kontrola byla v jednom průchodu omezena HTTP 429; před nasazením ručně prokliknout. |
| H EBU | ne | oficiální formulář | ručně dostupný | Automatický požadavek blokuje HTTP 403; nejde o prokázaný nefunkční odkaz. |
| J Europoslanec | ne | bez předvyplněné adresy | bezpečné | Správně se nevymýšlí neověřený osobní kontakt. |

Oficiální kontaktní stránky jsou vypsány v datovém souboru.

## 6. Dokumenty D1 až D11

| ID | Název | Typ a stav |
|---|---|---|
| D1 | Průběh projednávání sněmovního tisku 231 | primární, živý a rozhodující zdroj stavu řízení |
| D2 | Předložený návrh zákona, tisk 231/0 | primární sněmovní zdroj |
| D3 | Listina základních práv a svobod | primární ústavní zdroj; relevantní čl. 17, 18 a 21 |
| D4 | Jednací řád Poslanecké sněmovny | primární právní zdroj; popis § 53 ověřen |
| D5 | European Media Freedom Act | primární unijní právní zdroj; čl. 5 popsán správně |
| D6 | Protokol č. 29 ke smlouvám EU | primární unijní právní zdroj; národní volba financování je podmíněná |
| D7 | Společné prohlášení EBU z 23. 10. 2026 | ověřené odborné/advokační stanovisko, ne právní pramen |
| D8 | Iveta Kvardová, analýza čl. 5 EMFA | ověřený odborný názor v Jurisprudence 4/2026, ne rozhodnutí soudu |
| D9 | Zákon o České televizi | primární právní zdroj, odkaz e‑Sbírky správný |
| D10 | Zákon o Českém rozhlasu | primární právní zdroj, odkaz e‑Sbírky správný |
| D11 | Zákon o rozhlasových a televizních poplatcích | primární právní zdroj, odkaz e‑Sbírky správný |

Všechny dokumenty jsou pouze externí HTTPS odkazy. Web je nestahuje, neukládá ani nehostuje.

## 7. Jazykový a redakční audit

### Významné nálezy

| ID | Závažnost | Umístění | Nález | Doporučení |
|---|---|---|---|---|
| COPY-001 | vysoká | `index.html:155` | Tlačítko tvrdí „ODESLAT“, ale jen otevře koncept. | `OTEVŘÍT V E-MAILOVÉ APLIKACI` |
| COPY-002 | vysoká | české šablony v `script.js` | Dopisy jsou pouze v mužském rodě. | Neutrální konstrukce: „Chci vědět“, „Prosím o vysvětlení“, „Uvítám informaci“. |
| COPY-003 | vysoká | `index.html:181`, `script.js:541` | Mužský rod i v obecném textu: „abys mohl“, „rozhodni sám“. | „K vyjádření názoru nepotřebuješ právní vzdělání“; „udělej si vlastní názor“. |
| COPY-004 | vysoká | `index.html:215` | Zájmeno „který“ má nejasný předmět. | „…jednání nebo nečinnost členského státu, které mohou být v rozporu s právem EU.“ |
| COPY-005 | vysoká | `README.md:26` | Gramaticky a významově nesourodý výčet G/H/J. | Přeformulovat na tři souřadné možnosti. |
| COPY-006 | střední | `index.html:64` | „nejsou kořist … ani hlásná trouba“ je neobratná shoda. | „nejsou kořistí … ani hlásnou troubou“ nebo větu přestavět. |
| COPY-007 | střední | `index.html:25,42` | „Napsat podnět“ nepokrývá dotazy, stanoviska a vyjádření. | `Napsat instituci` nebo `Chci se vyjádřit`. |
| COPY-008 | střední | `index.html:75` | „Vyjádřete se jedné instituci“ je nepřirozená vazba. | `Napište jedné instituci.` |
| COPY-009 | střední | `index.html:76` | Formulář podpis nepřipraví; doplní jej uživatel. | Popsat, že podpis je převzat z pole PODPIS. |
| COPY-010 | střední | `index.html:159` | Uvnitř vykajícího formuláře se náhle tyká. | `Dopis můžete upravit… Nikdo ho za vás neposílá.` |
| COPY-011 | střední | `index.html:214` | „posuzuje zákonné povinnosti“ je nepřesné. | „posuzuje dodržování zákonných povinností provozovatelů…“ |
| COPY-012 | střední | `index.html:194,227` | Neobratná věta o odpovědi na petici. | „…do 30 dnů písemně odpovědět; v odpovědi se vyjádří…“ |
| COPY-013 | střední | `index.html:241` | „Uschovejte doručení“ není přirozené. | `Uschovejte doklad o odeslání nebo doručení.` |
| COPY-014 | střední | `index.html:238` | Jméno svědka samo není podkladem. | `kontakt na případného svědka` |
| COPY-015 | střední | `index.html:6` | Meta popis mluví jen o českých institucích. | Zahrnout evropské instituce a odborné organizace. |
| COPY-016 | střední | `README.md:14` | „sedm veřejných kontaktů“ je nepřesné. | `sedm možností adresáta` |
| COPY-017 | střední | `index.html:138` | „Chci vědět víc“ neříká, že jde o výběr dokumentů. | `Zobrazit další podklady` |
| COPY-018 | střední | `script.js:164` | Neobratné „E-mail Zastoupení…“. | `E-mail na adresu Zastoupení…` |

### Nízká závažnost a sjednocení

- `Nařízení EU 2024/1083` sjednotit na citační podobu `nařízení (EU) 2024/1083`.
- `v časopise Jurisprudence 4/2026` zpřesnit na `v čísle 4/2026 časopisu Jurisprudence`.
- Zjednodušit „pravidla pro nezávislé sledování dodržování…“.
- `nevytvářel možnost tlaku` změnit na přirozenější `nevytvářel prostor pro tlak`.
- `s obavou ohledně` změnit na `s obavou z`.
- `Podklady, ze kterých vycházím` lze formálněji napsat `Podklady, z nichž vycházím`.
- `Upravil/a jste…` nahradit neutrálním `Text dopisu už byl upraven.`
- `Dopis je zkopírovaný` nahradit `Dopis byl zkopírován.`
- V README změnit `zařízení otevře` na `web se pokusí otevřít` a `build krok` na `sestavovací krok`.
- `Nenahrazuje právní službu` změnit na běžnější `Nenahrazuje právní poradenství`; `běžící řízení` na `probíhající řízení`.
- Sjednotit spisovné varianty `nikoli` / `nikoliv`; doporučeno `nikoli`.

Hero, obě vstupní akce, většina prohlášení, oslovení institucí a anglická gramatika šablon H/I jsou jinak jazykově v pořádku.

## 8. Funkce, responsivita a technický stav

### Ověřeno jako funkční

- JavaScript projde syntaktickou kontrolou.
- Nebyly zjištěny chyby ani varování konzole.
- Nejsou duplicitní ID, neexistující interní kotvy ani viditelné formulářové pole bez popisku.
- Všech 23 statických odkazů s `target="_blank"` má `rel="noopener"`.
- Aktivní jsou přesně trasy A, B, C, D, E, F a I; každá má jediného příjemce, žádné CC/BCC a přesně dva předvybrané dokumenty.
- Podpis zůstává při přepnutí adresáta zachován a je sestaven až na konci dopisu.
- Ruční změna textu před přepnutím adresáta vyvolá potvrzení.
- Sdílení odstraňuje query i hash a neposílá formulářová data.
- Na šířkách 1024, 768, 390 a 320 px nebyl horizontální overflow; černý hero pruh vyplňuje šířku dokumentu.
- Mobilní menu se při šířce do 980 px skryje a zůstane dostupné tlačítkem Menu.
- `prefers-reduced-motion` a tiskové styly existují.

### Technické nálezy

| ID | Závažnost | Nález |
|---|---|---|
| TECH-001 | střední | Všechny aktivní `mailto:` URL překračují vlastní práh 1 800 znaků: A 2510, B 2333, C 2236, D 2061, E 2190, F 2315, I 1860. Varování a kopírovací fallback fungují, ale hlavní cesta je v některých klientech křehká. |
| TECH-002 | střední | Bez JavaScriptu nefunguje menu, sdílení ani generátor; chybí srozumitelný `<noscript>` fallback. |
| TECH-003 | střední | V JavaScriptu zůstávají celé, ale nedostupné předlohy G/H/J. Zvětšují auditní plochu a mohou být omylem později zpřístupněny. |
| TECH-004 | střední | Nápovědy nejsou přes `aria-describedby` navázány na příslušná pole. |
| TECH-005 | střední | Anglická aktivní trasa I nemá programově nastavené `lang="en"`; čtečka může text vyslovit česky. |
| TECH-006 | střední | Chybí canonical, Open Graph/Twitter metadata a social preview image, ačkoli sdílení je hlavní funkce webu. |
| TECH-007 | střední | Výsledný oddíl se jmenuje „Podklady, ze kterých vycházím“ místo dříve požadovaného „Dokumenty a podklady, na které odkazuji“. Chybí dříve požadovaná tlačítka `OTEVŘÍT DOKUMENTY` a `VYMAZAT`; ověřit, zda jde o pozdější záměrné zjednodušení. |
| TECH-008 | nízká | Prázdný náhled hlásí 56 znaků, protože počítá pomocnou větu, ne skutečný e-mail. |
| TECH-009 | nízká | Chybí explicitní `Referrer-Policy`; cílový web může standardně získat URL stránky, ne však obsah formuláře. |
| TECH-010 | nízká | Datum ověření je ruční a nemá mechanismus expirace. |
| TECH-011 | nízká | Scrollovací `<pre>` s náhledem nemá explicitní `tabindex`; klávesnicová ovladatelnost závisí na prohlížeči. |
| TECH-012 | nízká | Bílé `N!` na červeném má přibližně 4,05:1. Je dekorativní (`aria-hidden`) a doplněné textem NeVOLE, proto je dopad malý. |
| TECH-013 | nízká | Mobilní Menu správně mění `aria-expanded`, ale nemění text na „Zavřít“ a nereaguje na Escape. |

Neaktivní jsou také CSS větve `.mep-fields`, `.mep-intro`, `.danger-button`, `.check-field`, `.identity-grid`, `.specific-grid` a `.route-warning`.

## 9. Soukromí a bezpečnost

### Ověřené pozitivní vlastnosti

- žádný backend, `fetch`, XHR, WebSocket, beacon, service worker ani automatický upload;
- žádné cookies, localStorage, sessionStorage, IndexedDB ani analytika;
- žádná externí knihovna nebo webfont;
- formulář se nikdy neodesílá (`submit` je zastaven);
- jediný pevný příjemce na zprávu, bez CC a BCC;
- otevření poštovní aplikace, kopírování i sdílení vyžadují akci uživatele;
- data z polí zůstávají v DOM; web je nikam neposílá;
- dynamický obsah používá `textContent`, nikoli `innerHTML`; nebyl nalezen `eval` ani `document.write`;
- všechny dokumenty používají HTTPS a jsou pouze externími odkazy;
- sdílení obsahuje jen statický text a čistou URL bez query/hash.

### Doporučení

- Přidat `Referrer-Policy`, například `strict-origin-when-cross-origin` nebo přísnější variantu podle rozhodnutí projektu.
- Po nasazení na GitHub Pages zkontrolovat skutečné HTTP hlavičky a HTTPS přesměrování.

## 10. Kontrola odkazů

V projektu bylo nalezeno 36 jedinečných HTTPS URL. Třicet čtyři automatická kontrola načetla úspěšně. Dvě stránky EBU vrátily automatickému klientu HTTP 403, ale při běžném otevření jsou dostupné; jde o ochranu proti automatům, nikoli prokázaný mrtvý odkaz. Český formulář Evropské komise byl v jednom kontrolním průchodu omezen HTTP 429; oficiální anglická varianta i účel formuláře byly ověřeny.

Úplný seznam všech URL, jejich účel, typ zdroje a výsledek je v `audit-data-2026-10-26.json`.

## 11. Doporučené pořadí oprav

1. Zachovat tuto opravu LEG-001 až LEG-003 jako datovaný dodatek a při každé pozdější aktualizaci znovu ověřit živý stav tisku 231.
2. Změnit COPY-001 a odstranit mužský rod z českých předloh.
3. Zpřesnit § 42, § 175 a roli Úřadu vlády.
4. Doplnit D5 do výchozích podkladů ECPMF.
5. Rozhodnout, zda odstranit neaktivní G/H/J a nepoužívané CSS.
6. Vyřešit délku `mailto:` textů nebo vizuálně povýšit kopírování na rovnocennou hlavní cestu.
7. Doplnit přístupnost, metadata pro sdílení a `<noscript>` sdělení.
8. Po dalších opravách zopakovat celý audit a aktualizovat hash souborů.

## 12. Závěr

Web je technicky čistý, vizuálně responsivní a z hlediska soukromí navržený velmi bezpečně. Původní závěr o nesouladu mezi aktivní předlohou a legislativním stavem tisku č. 231 se po doplnění záznamů jednání, hlasování a datovaných zpravodajských zdrojů stahuje.

Návrh prošel prvním čtením 24. 10. 2026, ale nebyl přijat jako zákon. Tento legislativní důvod pro nezveřejnění odpadl; ostatní nezávislé nálezy auditu zůstávají beze změny.
