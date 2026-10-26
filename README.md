# NeVOLE v1.01

Jednoduchý český statický web pro GitHub Pages na podporu věcné občanské debaty o nezávislosti České televize a Českého rozhlasu.

Web nabízí dvě hlavní možnosti:

- **CHCI SE VYJÁDŘIT** – návštěvník vybere jednu instituci, upraví hotový občanský dopis a otevře koncept v osobním Outlooku nebo pracovním Outlooku Microsoft 365. Příliš dlouhý text se nikdy nezkrátí; zkopíruje se pro bezpečné vložení.
- **POŠLU TO DÁL** – otevře jednotnou nabídku pro Facebook, WhatsApp, X, Telegram, LinkedIn, zkopírování veřejného odkazu a podporovanou systémovou nabídku sdílení.

Nic se samo neodesílá. Web nesbírá kontakty, neukládá obsah formuláře, nepoužívá analytiku a nesleduje sdílení.

## Adresáti dopisů

Rozbalovací nabídka obsahuje sedm veřejných kontaktů:

- Poslanecká sněmovna – `posta@psp.cz`
- Výbor pro média a kulturu – `posta@psp.cz`, s označením „K rukám Výboru pro média a kulturu“
- Ministerstvo kultury – `epodatelna@mk.gov.cz`
- Senát Parlamentu ČR – `epodatelna@senat.cz`
- Rada pro rozhlasové a televizní vysílání – `podatelna@rrtv.gov.cz`
- Zastoupení Evropské komise v ČR – `comm-rep-cz@ec.europa.eu`
- European Centre for Press and Media Freedom – `info@ecpmf.eu`

Adresy byly 26. 10. 2026 ověřeny jako zveřejněné kontakty na oficiálních webech institucí. Toto ověření samo o sobě nedokazuje technickou doručitelnost konkrétní zprávy.

Každá zpráva má právě jednoho příjemce. Neobsahuje CC ani BCC. Formální stížnost Evropské komisi, EBU a neurčený europoslanec nejsou v rozbalovací nabídce.

## Dopisy a podklady

Po výběru adresáta se doplní příjemce, předmět, oslovení, celý text, závěrečný pozdrav a jeden nebo dva nejrelevantnější podklady. Podpis se přebírá ze samostatného pole **PODPIS** a při přepnutí adresáta zůstává zachovaný.

Před přepsáním ručně upraveného textu se zobrazí varování. Všechny části dopisu lze upravit.

Podklady jsou pouze externí odkazy na původní zdroje. Projekt žádné PDF, právní texty ani odborné dokumenty nestahuje, nekopíruje a nehostuje.

## Soubory

- `index.html` – obsah a struktura webu
- `styles.css` – responzivní vzhled a tisková verze prohlášení
- `script.js` – předlohy dopisů, výběr podkladů, bezpečné kopírování, Outlook a sdílení veřejného odkazu
- `favicon.svg` – favicon s označením „N!“
- `social-preview.png` – náhled 1200 × 630 px pro sociální sítě
- `social-preview.svg` – upravitelný zdroj sociálního náhledu
- `.nojekyll` – vypnutí zpracování Jekyllem na GitHub Pages

Web nemá build krok a nepoužívá externí knihovny.

## Lokální spuštění

Ve složce spusťte jednoduchý místní server:

```powershell
python -m http.server 8080
```

Potom otevřete `http://localhost:8080`.

## Nasazení na GitHub Pages

1. Vytvořte veřejný repozitář na GitHubu.
2. Nahrajte do něj obsah této složky.
3. V repozitáři otevřete **Settings → Pages**.
4. V části **Build and deployment** zvolte **Deploy from a branch**.
5. Vyberte větev `main` a složku `/(root)`.

Po získání skutečné veřejné adresy GitHub Pages:

1. vložte ji do `<meta name="nevole-public-url" content="…">` v `index.html`,
2. přidejte `og:url` se stejnou absolutní HTTPS adresou,
3. změňte `og:image` a `twitter:image` na absolutní HTTPS adresu souboru `social-preview.png`.

Bez veřejné HTTPS adresy se při místním testování sociální odkazy záměrně neaktivují. Web tak nikdy nesdílí `localhost`, `127.0.0.1`, lokální cestu ani data rozepsaného formuláře.

Projekt je občanský informační nástroj a nenahrazuje individuální právní radu.

Kontakt projektu: [nevole@tutamail.com](mailto:nevole@tutamail.com)
