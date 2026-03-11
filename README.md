# Prima di Votare

**[primadivotare.it](https://primadivotare.it)**

Guide visive e interattive per capire cosa c'è sulla scheda, prima di entrare in cabina. Dati verificati, entrambe le prospettive presentate con lo stesso rigore, nessuna posizione presa. Il lettore conclude.

> *"Non voglio dimostrare niente, voglio mostrare."* — Federico Fellini

## Come funziona

Il sito è una piattaforma pensata per ospitare guide su qualsiasi votazione italiana che meriti di essere capita. Ogni guida è una sezione autonoma con le proprie pagine, grafici e visualizzazioni.

## Focus attivo: Riforma della magistratura

**Referendum confermativo — 22–23 marzo 2026** (nessun quorum)

La legge costituzionale n. 253 del 30 ottobre 2025 riscrive 7 articoli della Costituzione: separazione delle carriere, due CSM con sorteggio, Alta Corte Disciplinare senza ricorso in Cassazione, cinque leggi ordinarie da scrivere. La guida mette a confronto il prima e il dopo — cosa cambia, dove si sposta il potere, chi guadagna e chi perde.

| Pagina | Tema |
|--------|------|
| [01 — Carriere](https://primadivotare.it/referendum-magistratura-2026/01-carriere.html) | La separazione delle carriere |
| [02 — CSM](https://primadivotare.it/referendum-magistratura-2026/02-csm.html) | I due CSM e il sorteggio |
| [03 — Alta Corte](https://primadivotare.it/referendum-magistratura-2026/03-alta-corte.html) | L'Alta Corte Disciplinare |
| [04 — Leggi ordinarie](https://primadivotare.it/referendum-magistratura-2026/04-leggi-ordinarie.html) | Il "contratto in bianco" |
| [05 — Scenari](https://primadivotare.it/referendum-magistratura-2026/05-scenari.html) | Scenari concreti post-riforma |
| [06 — Europa](https://primadivotare.it/referendum-magistratura-2026/06-europa.html) | Il confronto europeo |
| [07 — Domande](https://primadivotare.it/referendum-magistratura-2026/07-domande.html) | FAQ — le domande che contano |

## Principi

- La Costituzione è il default — chi la modifica ha l'onere della prova
- Ogni dato ha una fonte, nessun claim senza provenienza
- Ogni tesi è accompagnata dalla contro-tesi
- Il sito deve essere credibile per chi vota Sì e per chi vota NO

## Stack

HTML statico, CSS, Vanilla JS. Nessun framework, nessun build tool — tutto apribile con un browser.

- **Chart.js** — grafici dinamici (via CDN)
- **D3.js** — organigrammi e diagrammi di flusso (via CDN)
- **Google Fonts** — Playfair Display, IBM Plex Mono, Inter
- **GitHub Pages** — hosting

## Struttura

```
/
├── index.html                          Landing page — piattaforma
├── referendum-magistratura-2026/       Prima guida
│   ├── index.html                      Homepage guida magistratura
│   ├── 01-carriere.html … 07-domande.html
│   └── assets/
│       ├── style.css                   Design system condiviso
│       ├── components.js               Componenti riusabili
│       └── charts/                     Configurazioni Chart.js
├── CNAME
├── sitemap.xml
└── robots.txt
```

## Licenza

Contenuto rilasciato con licenza [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
