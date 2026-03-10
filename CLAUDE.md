# CLAUDE.md — Progetto: Referendum Giustizia 2026

## Contesto del progetto

Sito web editoriale multi-pagina che mostra cosa cambia nella magistratura italiana con la riforma costituzionale (legge n. 253 del 30 ottobre 2025). Il referendum si tiene il **22–23 marzo 2026**. Il sito non prende posizione: mette a confronto il PRIMA e il DOPO con rigore tecnico, dati verificabili e onestà intellettuale. Ogni grafico è basato su dati reali, ogni tesi è accompagnata dalla contro-tesi.

La bussola editoriale è la frase di Fellini: **"Non voglio dimostrare niente, voglio mostrare."**

Il principio strutturale è: **la Costituzione è il default. Chi la modifica ha l'onere della prova.** Per ogni cambiamento il sito pone la domanda: _cui prodest?_ — e mostra dove si sposta il potere. Non dice se lo spostamento è giusto o sbagliato. Lo rende visibile: chi guadagna potere, chi ne perde, quali garanzie salgono, quali scendono.

Il tono è quello del giornalismo investigativo che si rivolge a chi non conosce il diritto costituzionale ma vuole capire davvero. Non propaganda, non persuasione — confronto fondato sui fatti. Il lettore conclude da solo.

---

## Stack tecnico

- **HTML5 + CSS3 + Vanilla JS** — nessun framework, massima portabilità
- **Chart.js** per i grafici dinamici (via CDN cdnjs)
- **D3.js** per i diagrammi di flusso e gli organigrammi complessi (via CDN cdnjs)
- Font via Google Fonts: `Playfair Display` (display/titoli) + `IBM Plex Mono` (dati/label) + `Inter` (corpo testo)
- Nessuna dipendenza da build tools — tutto statico, apribile con un browser
- Mobile-first: ogni componente funziona a 360px, ottimizzato fino a 1400px

---

## Palette e design system

```css
:root {
  /* Backgrounds */
  --bg: #0b0b0d;
  --bg2: #111116;
  --bg3: #17171e;
  --bg4: #1e1e27;
  --border: #252530;

  /* Testo */
  --text: #e6e2db;
  --muted: #636070;
  --dim: #3a3848;

  /* Semantica */
  --red: #d13020; /* DOPO / pericolo / riforma */
  --red-l: #e85444;
  --red-bg: #1a0a08;

  --grn: #27764a; /* PRIMA / sicuro / garanzia */
  --grn-l: #38b368;
  --grn-bg: #0a1810;

  --blu: #1e5ea0; /* neutro / info / dati */
  --blu-l: #4490e0;
  --blu-bg: #0a1222;

  --gld: #c89c30; /* attenzione / presidenza / istituzione */
  --gld-l: #e0b848;
  --gld-bg: #181408;
}
```

**Regole tipografiche**

- Titoli sezione: Playfair Display 700–900, line-height 1.05–1.15
- Label/dati/percentuali: IBM Plex Mono, uppercase, letter-spacing 0.15–0.25em
- Corpo: Inter 400, 15–16px, line-height 1.7
- Mai Arial, Inter come display, mai purple gradient su bianco

**Regole di layout**

- `max-width: 680px` per le colonne di testo
- `max-width: 1100px` per i layout wide (tabelle, grafici a doppia colonna)
- Sezioni separate da `border-bottom: 1px solid var(--border)`
- Prima/Dopo sempre su griglia 1fr 1fr con colore verde (prima) vs rosso (dopo)
- Ogni claim tecnico con fonte inline o nota a piè di sezione

---

## Struttura del sito

```
/
├── index.html              ← Homepage — panoramica + navigazione
├── 01-carriere.html        ← La separazione delle carriere
├── 02-csm.html             ← I due CSM e il sorteggio
├── 03-alta-corte.html      ← L'Alta Corte Disciplinare
├── 04-leggi-ordinarie.html ← Il "contratto in bianco"
├── 05-scenari.html         ← Scenari concreti post-riforma
├── 06-europa.html          ← Il confronto europeo
├── 07-domande.html         ← FAQ — le domande che contano
└── assets/
    ├── style.css           ← Design system condiviso
    ├── components.js       ← Componenti riusabili (organigrammi, alert, badge)
    └── charts/             ← Configurazioni Chart.js per ogni pagina
```

---

## Pagine — specifiche dettagliate

---

### `index.html` — Homepage

**Obiettivo:** orientare il visitatore, trasmettere urgenza, mostrare la complessità in 30 secondi.

**Componenti:**

- Hero con countdown al 22 marzo (JS live)
- "3 cambiamenti in 3 numeri" — stat row: `2` CSM / `0` Cassazione / `∞` leggi ordinarie
- Mappa di navigazione visiva: 6 card cliccabili, una per tema, con icona + una riga di descrizione
- Barra di potere animata: prima (66,7% togati eletti su 30 elettivi — L. 71/2022) → dopo (67% sorteggiati, VP laico) — animazione on-scroll
- Footer con dichiarazione di metodo: ogni dato ha fonte, ogni tesi è accompagnata dalla contro-tesi

---

### `01-carriere.html` — La separazione delle carriere

**Titolo:** _"Scegli da che parte stare — per sempre"_

**Punto focale:** La separazione delle carriere è l'elemento della riforma con la giustificazione più solida. Tuttavia, il problema che intendeva risolvere era già stato affrontato dalla legge Cartabia (D.lgs. 44/2024: un solo passaggio nell'intera carriera). _Cui prodest?_ Perché costituzionalizzare ora qualcosa che la legge ordinaria aveva già risolto? Cosa passa insieme a questo cambiamento?

**Grafici e visualizzazioni:**

1. **Timeline storica** — evoluzione normativa sui passaggi di carriera:
   - Pre-2007: passaggi illimitati
   - 2007 (Mastella): massimo 4 passaggi
   - 2022–2024 (Cartabia): massimo 1 passaggio nell'intera carriera
   - 2025 (Nordio): separazione costituzionale
   - _Tipo: timeline orizzontale scrollabile, punti colorati per governo_

2. **Bar chart: passaggi effettivi PM→giudice per anno** (2019–2023)
   - Dati: ~28/anno su 8.800 magistrati = 0,31%
   - Confronto visivo: colonna "problema dichiarato" vs "problema reale"
   - _Tipo: Chart.js bar chart con linea di riferimento "soglia Cartabia"_

3. **Diagramma biforcazione carriere** — prima e dopo:
   - Prima: albero con un nodo iniziale che si biforca ma con un ponte possibile
   - Dopo: due alberi completamente separati, nessun ponte
   - _Tipo: SVG/D3 custom_

4. **Domanda visiva:** "Se il problema era già risolto dalla Cartabia, perché toccare la Costituzione?"
   - Box con due risposte: quella dichiarata vs quella strutturale (il resto della riforma)

**L'altra prospettiva:**

- "Anche un solo passaggio possibile mina la percezione di imparzialità"
- "La separazione rafforza il modello accusatorio"
- Contesto: questi argomenti riguardano la separazione delle carriere in sé — non toccano la questione CSM, sorteggio e Alta Corte

---

### `02-csm.html` — I due CSM e il sorteggio

**Titolo:** _"Chi sceglie chi ti giudica"_

**Punto focale:** Il sorteggio viene presentato come antidoto alle correnti. _Cui prodest?_ Mostrare lo spostamento di potere: i togati eletti (che rispondono a un elettorato di magistrati) vengono sostituiti da togati sorteggiati (che non rispondono a nessuno). I laici vengono sorteggiati da una lista compilata dal Parlamento. Il VP diventa laico. Il lettore deve poter vedere la tendenza: il potere si sposta dalla magistratura verso chi compila la lista e presiede l'organo.

**Grafici e visualizzazioni:**

1. **Organigramma prima/dopo** (già prototipato, da raffinare con D3):
   - Prima: CSM unico, togati eletti 59%, VP togato
   - Dopo: 2 CSM, sorteggio, VP laico in entrambi
   - Animazione: morphing da struttura singola a struttura doppia on-scroll o on-click

2. **Donut chart — Composizione CSM attuale** (Chart.js, dati post-L. 71/2022):
   - Togati eletti: 66,7% su 30 elettivi — 20 togati (verde)
   - Laici eletti: 33,3% su 30 elettivi — 10 laici (blu) — soglia 3/5 dei votanti
   - Di diritto: 3 componenti non computati nella proporzione costituzionale (oro)
   - Tooltip: spiegazione di ogni componente + nota sulla soglia parlamentare

3. **Grouped bar chart — Composizione confronto:**
   - Asse X: "Indipendenti da mandato elettivo" / "Orientati da lista politica" / "Di diritto"
   - Due barre per gruppo: prima (verde) e dopo (rosso)
   - Mostra graficamente lo spostamento

4. **Diagramma "Chi controlla la lista":**
   - Flusso: Parlamento → compila lista → sorteggio laici → VP → orientamento lavori CSM
   - _Tipo: flowchart orizzontale con frecce animate_

5. **Simulazione interattiva del sorteggio** (JS):
   - Slider: "anzianità minima richiesta" da 0 a 30 anni
   - Al variare del parametro, il grafico mostra come cambia la platea disponibile
   - Punto: mostrare che chi scrive i requisiti decide davvero chi entra

6. **Sezione "Il problema reale delle correnti":**
   - Dati Palamara/correnti: quote di nomine per corrente 2015–2019 (dati pubblici ANM)
   - Domanda: il sorteggio risolve questo o lo bypassa creandone uno nuovo?

**L'altra prospettiva:**

- "Le correnti hanno lottizzato il CSM per decenni — Palamara non è un'invenzione"
- "Il sorteggio elimina la logica elettorale correntista"
- Domanda aperta per il lettore: la soluzione al problema delle correnti richiede necessariamente eliminare la responsabilità elettiva dei rappresentanti?

---

### `03-alta-corte.html` — L'Alta Corte Disciplinare

**Titolo:** _"L'unico organo senza appello esterno in tutta la Repubblica"_

**Punto focale:** Oggi ogni cittadino, ogni organo, ogni tribunale speciale ha come ultima garanzia il ricorso in Cassazione (art. 111 Cost.). La riforma crea un organo la cui sentenza definitiva è appellabile solo internamente. _Cui prodest?_ Mostrare chi guadagna potere disciplinare sui magistrati, chi lo perde, e quale garanzia esterna scompare. Il lettore confronta: prima c'era un controllo esterno (Cassazione), dopo l'organo controlla se stesso.

**Grafici e visualizzazioni:**

1. **Funnel comparativo prima/dopo** (già prototipato, da raffinare):
   - Colori verde/rosso, icone, frecce animate
   - Aggiungere: numero di sentenze disciplinari per anno (194 nel 2023–2025, 41% condanne — dati Prima Pres. Cassiano)

2. **Heatmap/Matrix — Garanzie ricorso in Cassazione per categoria:**
   - Righe: Cittadino comune / Avvocato / Notaio / Medico / Magistrato militare / Magistrato ordinario
   - Colonne: 1° grado / 2° grado / Cassazione
   - Prima della riforma: tutte le celle verdi per tutti
   - Dopo: solo i magistrati ordinari perdono la cella "Cassazione"
   - _Tipo: griglia CSS colorata — colpisce visivamente_

3. **Donut chart — Composizione Alta Corte (15 membri):**
   - Nominati Pres. Repubblica: 3 (oro)
   - Lista parlamentare: 3 (blu)
   - Togati giudicanti sorteggiati: 6 (rosso chiaro)
   - Togati requirenti sorteggiati: 3 (rosso scuro)
   - Evidenziare: presidente sempre tra i laici (6 su 15 = 40% ha legame politico diretto)

4. **Timeline procedurale interattiva** — "Cosa succede se un PM viene segnalato":
   - Step 1: esposto (chi può presentarlo — incluso il Ministro della Giustizia)
   - Step 2: apertura procedimento (effetti immediati sulla carriera)
   - Step 3: udienza Alta Corte
   - Step 4: sentenza → appello interno → definitivo
   - Step 5: nessuna Cassazione
   - _Tipo: stepper verticale cliccabile con dettagli per ogni fase_

5. **Box "Il dibattito giuridico aperto"** — presentare entrambe le tesi:
   - Tesi A: art. 111 Cost. non modificato = Cassazione comunque garantita
   - Tesi B (prevalente in dottrina): l'avverbio "soltanto" nel nuovo art. 105 costituisce deroga speciale
   - Status: dibattito giuridico aperto — il lettore deve sapere che la certezza manca, e che l'incertezza stessa è un dato rilevante

6. **Confronto con altri organi disciplinari italiani** (bar chart):
   - Avvocati: CNF → Cassazione ✓
   - Notai: Corte d'Appello → Cassazione ✓
   - Medici: Commissione → TAR → Consiglio di Stato ✓
   - Magistrati (dopo riforma): Alta Corte → Alta Corte → fine
   - _Punto: i magistrati sarebbero l'unica categoria professionale senza appello esterno_

---

### `04-leggi-ordinarie.html` — Il contratto in bianco

**Titolo:** _"La Costituzione blindata diventa una legge che cambia in un pomeriggio"_

**Punto focale:** La riforma costituzionalizza la struttura ma demanda i contenuti a leggi ordinarie. _Cui prodest?_ Mostrare lo spostamento: garanzie che oggi richiedono una riforma costituzionale (2-4 anni, doppia lettura, referendum) domani si cambiano con una legge ordinaria (maggioranza semplice, settimane). Il potere di modificare queste garanzie si sposta dalla rigidità costituzionale alla discrezionalità della maggioranza di turno.

**Grafici e visualizzazioni:**

1. **Confronto "forza normativa" — prima e dopo per ogni garanzia:**
   - Asse Y: forza normativa (Costituzione / Legge ordinaria / Circolare)
   - Pallini: ogni garanzia collocata prima e dopo la riforma
   - Frecce che mostrano lo spostamento verso il basso
   - _Tipo: scatter plot o dot chart verticale — D3_

2. **Timeline "Quanto ci vuole a cambiare questa norma":**
   - Norma costituzionale: 2 letture × 2 camere + eventuale referendum = 2–4 anni
   - Legge ordinaria: 1 lettura per camera = settimane
   - Circolare ministeriale: 1 firma = 1 giorno
   - _Tipo: bar chart orizzontale con unità "tempo"_

3. **Mappa delle norme non scritte** — le 5 leggi ordinarie ancora da scrivere:
   - Requisiti sorteggio togati
   - Composizione collegi Alta Corte
   - Catalogo illeciti disciplinari
   - Criteri priorità azione penale
   - Garanzie indipendenza PM
   - _Tipo: card grid con stato "DA SCRIVERE" in rosso + chi le scrive + rischi_

4. **Confronto Portogallo vs Italia** — la differenza che conta:
   - Due colonne: PT e IT
   - Riga per riga: cosa è in Costituzione vs cosa è in legge ordinaria
   - Il punto visivo: in PT la garanzia di indipendenza PM è verde (Cost.), in IT è rossa (legge ord.)

5. **Simulatore "Cosa può cambiare con legge ordinaria"** (interattivo):
   - 5 checkbox: ogni legge ordinaria non ancora scritta
   - Per ognuna: descrizione del rischio se modificata
   - Pulsante "Immagina un governo diverso tra 5 anni" → apre scenario

---

### `05-scenari.html` — Scenari concreti

**Titolo:** _"Non è fantascienza. È architettura."_

**Punto focale:** Questi scenari non presuppongono un governo malvagio. Mostrano le tendenze e gli spostamenti di potere in azione: cosa diventa *possibile* quando le garanzie strutturali si abbassano. Per ogni scenario: qual era la resistenza costituzionale prima, qual è dopo, e cosa serve concretamente per realizzarlo. Il lettore valuta da sé quanto siano probabili — il sito mostra quanto diventano *facili*.

**Grafici e visualizzazioni:**

1. **4 scenari narrativi** — già prototipati, da espandere con:
   - Per ogni scenario: un "termometro di probabilità" basato su precedenti storici
   - Mappa dei prerequisiti: cosa deve essere vero perché lo scenario si avveri
   - Precedente europeo comparabile

2. **Mappa "Precedenti europei documentati"** (D3 geo o griglia visiva):
   - Polonia: Camera Disciplinare 2017–2022 — condannata CGUE × 4
   - Ungheria: abbassamento età pensionabile giudici 2011 — rimosso 1/3 dei vertici
   - Romania: tentativi di modifica CSM 2018
   - Israele: riforma 2023 — sospesa dopo proteste
   - Per ognuno: strumento usato / effetto / risposta istituzionale
   - _Tipo: griglia di card con bandiere, timeline e outcome_

3. **Flowchart "Come si indebolisce un PM senza violare nulla":**
   - Passo 1: Scrivi i requisiti del sorteggio del CSM dei PM
   - Passo 2: Nomina procuratori con profilo "cauto" nelle sedi sensibili
   - Passo 3: Definisci "fuga di notizie" in modo ampio nel catalogo illeciti
   - Passo 4: Apri procedimento disciplinare quando serve
   - Passo 5: Nessun organo esterno controlla
   - _Ogni passo è una legge ordinaria — nessuno richiede atti illegali_

4. **Confronto "Prima servivano / Dopo basta":**
   - Tabella: azione / strumento necessario prima / strumento necessario dopo
   - Es: "Rimuovere garanzia indipendenza PM" → Prima: riforma Cost. + referendum → Dopo: legge ordinaria + maggioranza semplice

---

### `06-europa.html` — Il confronto europeo

**Titolo:** _"'Come in Europa' — ma quale Europa?"_

**Punto focale:** I sistemi europei citati come modelli hanno strutture diverse tra loro. _Cui prodest?_ Mostrare cosa viene preso dai modelli europei (la struttura: separazione carriere) e cosa viene lasciato indietro (le garanzie: indipendenza costituzionale del PM). Il lettore vede la tendenza: verso quale modello europeo ci si sposta — e se quel modello funziona meglio o peggio del nostro attuale.

**Grafici e visualizzazioni:**

1. **Mappa Europa interattiva** — ogni paese cliccabile:
   - Colore per sistema: corpo unico / separazione carriere / PM dipendente da esecutivo
   - Click → popup con: modello / garanzie costituzionali / valutazione indipendenza
   - _Tipo: SVG mappa Europa con D3 tooltip_

2. **Radar chart — confronto multidimensionale 5 paesi** (Chart.js):
   - Assi: indipendenza PM / garanzie costituzionali / separazione carriere / controllo politico nomine / ricorso esterno disciplina
   - Paesi: IT attuale / IT dopo riforma / PT / DE / FR / ES
   - _Punto visivo: IT dopo riforma si avvicina a DE (dipendenza esecutivo) allontanandosi da PT (modello funzionante)_

3. **Tabella comparativa dettagliata** — 5 paesi × 6 dimensioni:
   - Colonna Italia dopo: evidenziata in rosso dove diverge dal modello citato

4. **Box "La CGUE 2019 sulla Germania":**
   - Cosa dice la sentenza C-508/18
   - Implicazione pratica: MAE italiano > MAE tedesco in termini di riconoscimento UE
   - Questo è il modello verso cui ci spingiamo?

5. **Quote da costituzionalisti europei** sul caso italiano (se disponibili)

---

### `07-domande.html` — FAQ: le domande che contano

**Titolo:** _"Le domande difficili — con risposte oneste"_

**Struttura:** accordion interattivo. Ogni domanda è presentata nella formulazione più forte possibile, con dati e argomentazioni da entrambe le prospettive.

**Domande da includere:**

1. "Le correnti hanno distrutto il CSM — il sorteggio è l'unica soluzione"
2. "La separazione delle carriere esiste in tutta Europa — siamo gli ultimi"
3. "Un giudice che ha fatto il PM non può essere imparziale"
4. "L'Alta Corte ha comunque più togati che laici"
5. "Il ricorso in Cassazione non sparisce — l'art. 111 resta"
6. "È una riforma garantista — difende i cittadini dall'abuso dei PM"
7. "Nordio e il governo non hanno interesse a indebolire i PM sulle mafie"
8. "Se vince il NO, niente cambia mai"

**Per ogni domanda:**

- Struttura in 3 parti: la forza dell'argomento / il punto critico / la domanda che resta aperta
- Mai liquidare una posizione — il sito deve essere credibile per chi vota Sì e per chi vota NO

---

## Componenti riusabili (`components.js`)

Definire e documentare come funzioni JS esportabili:

```javascript
// Organigramma configurabile
renderOrgTree(containerId, nodes, edges, colorScheme);

// Barra di potere comparativa
renderPowerBar(containerId, segments, label);

// Funnel procedurale verticale
renderFunnel(containerId, steps); // steps: [{icon, label, sublabel, color}]

// Alert box
renderAlert(containerId, type, title, body); // type: danger|warning|info

// Tabella prima/dopo
renderBeforeAfter(containerId, rows); // rows: [{label, before, after}]

// Card scenario
renderScenarioCard(containerId, { num, tag, title, body, precedent });

// Stepper interattivo
renderStepper(containerId, steps, onStepClick);
```

---

## Istruzioni per ogni pagina

Quando costruisci una pagina:

1. **Inizia sempre con il punto focale** — una frase che un ragazzo di 18 anni capirebbe, che mostra cosa cambia senza dire se è bene o male
2. **Ogni cambiamento deve rispondere a: "Perché? Cui prodest?"** — la Costituzione è il default, chi la modifica ha l'onere della prova. Il sito mostra: la motivazione dichiarata, dove si sposta il potere, chi guadagna e chi perde. Sempre con grafici che rendono visibili le tendenze e gli spostamenti
3. **Mostra entrambe le prospettive** — ogni pagina presenta le ragioni del cambiamento e le criticità con lo stesso rigore
3. **Ogni dato ha una fonte** — inline nella pagina o in nota. Nessun claim senza provenienza
4. **Ogni grafico ha una didascalia** che spiega cosa guardare, non solo cosa mostra
5. **Mobile first**: costruisci a 375px, poi espandi
6. **Test di leggibilità**: se non lo capisce chi non conosce il diritto, riscrivi
7. **Il sito deve essere credibile per tutti** — chi vota Sì e chi vota NO devono sentirsi rispettati. Il lettore conclude da solo

---

## Fonti verificate e da citare

| Claim                                         | Fonte                                                | Note                      |
| --------------------------------------------- | ---------------------------------------------------- | ------------------------- |
| Testo legge costituzionale                    | G.U. n. 253, 30/10/2025                              | Fonte primaria            |
| Quesito referendum                            | DPR 7/02/2026, G.U. n. 31                            |                           |
| Passaggi PM→giudice: ~28/anno                 | Audizioni parlamentari CSM 2023–2024                 | Verificare dati CSM       |
| Alta Corte: 15 membri, presidente laico       | Art. 105 Cost. riformato                             | Fonte primaria            |
| VP CSM eletto tra laici                       | Art. 104 Cost. riformato                             | Fonte primaria            |
| Esclusione Cassazione (tesi prevalente)       | Cassano (feb. 2026), Biondi e Gatto su SistemaPenale |                           |
| CGUE 2019 sui PM tedeschi                     | Sentenza C-508/18 e C-82/19 PPU, 27/05/2019          |                           |
| Dati sentenze disciplinari (194 in 2023–2025) | Cassano, Fondazione Bellisario                       |                           |
| Cartabia: 1 passaggio nell'intera carriera    | D.lgs. 44/2024 art. 12                               | Non "10 anni"             |
| Testo invariato in tutte le letture           | Iter parlamentare documentato                        | Non "rifiuto emendamenti" |

---

## Cosa NON fare

- Non citare il presunto appello Nordio 1994 senza fonte primaria verificata
- Non scrivere "rifiutato ogni emendamento" — scrivere "testo invariato in tutte le letture"
- Non presentare la tesi sull'esclusione della Cassazione come fatto certo — è tesi prevalente, non unanime
- Non usare percentuali arrotondate senza nota (es. 59% va sempre accompagnato da "16/27")
- Non personalizzare su singoli politici — analizzare la struttura normativa, non le persone
- Non omettere nessuna prospettiva — un sito che non mostra tutto non è credibile

---

## Tono

> _"Non voglio dimostrare niente, voglio mostrare."_ — Federico Fellini

- Giornalistico, non propagandistico — mostrare il prima e il dopo, il lettore conclude
- Tecnico ma accessibile — ogni termine giuridico viene spiegato la prima volta che appare
- Rispettoso dell'intelligenza del lettore — non semplificare fino alla distorsione
- Urgente senza essere isterico — i fatti parlano da soli
- **Fiato sul collo a chi cambia la Costituzione** — ogni cambiamento deve rispondere alla domanda: _perché lo stiamo cambiando? Cui prodest?_ Chi propone di modificare la norma fondamentale ha l'onere della prova. Il sito non dice se la risposta è soddisfacente — la mostra e lascia giudicare

---

## Stato attuale

- `LAW-TRUTH.md` — source of truth fattuale e giuridico: testi degli articoli prima/dopo, dati CSM, composizione Alta Corte, dibattito art. 111, leggi attuative, confronto europeo. **Consultare prima di scrivere qualsiasi claim.** Non modificare senza verifica sulle fonti primarie.
- `EXAMPLE.html` — file HTML di riferimento per design system, componenti CSS e pattern mobile-first. Replicare stile, palette e struttura da questo file. Non reinventare componenti già definiti qui.

**Tre correzioni/integrazioni già applicate nel v3 (non regredire):**

1. **Composizione CSM (L. 71/2022):** 33 componenti totali — 20 togati + 10 laici = **66,7% togati** su 30 elettivi. Il dato pre-Cartabia (27 componenti, 59%) è obsoleto. VP del CSM attuale: laico (non togato).
2. **Soglia parlamentare per i laici:** il sistema attuale richiede **3/5 dei votanti** del Parlamento in seduta comune (art. 22 L. 195/1958 mod. L. 71/2022). Il testo riformato **non fissa nessuna maggioranza** per compilare la lista da cui si sorteggia — argomento tecnico solido, da valorizzare in `02-csm.html`.
3. **Alta Corte disciplinare:** la componente laica **cresce** dal 33,3% (4/6 nella sezione disciplinare attuale) al 40% (6/15 nell'Alta Corte). Il presidente è sempre laico. Da presentare esplicitamente in `03-alta-corte.html`.
