# NeVOLE v1.01

Jednoduchý český statický web pro GitHub Pages na podporu věcné občanské debaty o nezávislosti České televize a Českého rozhlasu.

Web nabízí dvě hlavní možnosti:

- **CHCI SE VYJÁDŘIT** – návštěvník vybere jednu instituci, upraví hotový občanský dopis a otevře koncept v osobním Outlooku nebo pracovním Outlooku Microsoft 365. Webová adresa Outlooku vždy obsahuje jen příjemce a předmět; celý text s podpisem se kopíruje do schránky pro ruční vložení.
- **POŠLU TO DÁL** – otevře jednotnou nabídku pro Facebook, WhatsApp, X, Telegram, LinkedIn, zkopírování veřejného odkazu a podporovanou systémovou nabídku sdílení.

Nic se samo neodesílá. Web nesbírá kontakty, neukládá obsah formuláře, nepoužívá analytiku a nesleduje sdílení. Po použití kopírování může schránka zařízení dočasně obsahovat připravený dopis a podpis. Outlook obdrží příjemce a předmět, nikoli tělo dopisu.

## Adresáti dopisů

Rozbalovací nabídka obsahuje sedm adresátů; Poslanecká sněmovna a její Výbor pro média a kulturu používají stejnou adresu podatelny:

- Poslanecká sněmovna – `posta@psp.cz`
- Výbor pro média a kulturu – `posta@psp.cz`, s označením „K rukám Výboru pro média a kulturu“
- Ministerstvo kultury – `epodatelna@mk.gov.cz`
- Senát Parlamentu ČR – `epodatelna@senat.cz`
- Rada pro rozhlasové a televizní vysílání – `podatelna@rrtv.gov.cz`
- Zastoupení Evropské komise v ČR – `comm-rep-cz@ec.europa.eu`
- European Centre for Press and Media Freedom – `info@ecpmf.eu`

Kontaktní adresy byly dne 26. 10. 2026 ověřeny na oficiálních webech adresátů. Před odesláním je vždy zkontrolujte znovu; zveřejnění adresy nezaručuje technické doručení ani vyřízení zprávy.

Každá zpráva má právě jednoho příjemce. Neobsahuje CC ani BCC. Formální stížnost Evropské komisi, EBU a neurčený europoslanec nejsou v rozbalovací nabídce.

## Dopisy a podklady

Po výběru adresáta se doplní příjemce, předmět, oslovení, celý text, závěrečný pozdrav a dva nejrelevantnější podklady. Podpis se přebírá ze samostatného pole **PODPIS** a při přepnutí adresáta zůstává zachovaný.

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

Web nemá sestavovací krok a nepoužívá externí knihovny. Obsahuje omezení Content Security Policy a pravidlo `no-referrer`; hlavičky dostupné pouze na serveru zajišťuje hosting GitHub Pages.

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

Oficiální veřejná adresa je nastavena současně v `nevole-public-url`, canonical odkazu, `og:url`, sdílecím allowlistu a absolutních adresách náhledového obrázku. Při změně domény je nutné upravit všechny tyto hodnoty společně. Sdílení vždy používá pouze `https://ne-vole.github.io/` a nikdy nepřenáší adresu místního serveru ani data rozepsaného formuláře.

Auditní reporty a jejich datové podklady nepatří do publikované větve. Uchovávejte je mimo tento repozitář a před každým zveřejněním je znovu vytvořte pro konkrétní commit.

Projekt je občanský informační nástroj a nenahrazuje individuální právní radu.

Kontakt projektu: [nevole@tutamail.com](mailto:nevole@tutamail.com)
