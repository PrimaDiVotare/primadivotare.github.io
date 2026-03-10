(function() {
  var links = [
    { href: '../',                  label: 'pdv',       style: 'color:var(--gld);' },
    { href: 'index.html',          label: 'Home' },
    { href: '01-carriere.html',    label: 'Carriere' },
    { href: '02-csm.html',        label: 'CSM' },
    { href: '03-alta-corte.html',  label: 'Alta Corte' },
    { href: '04-leggi-ordinarie.html', label: 'Leggi ord.' },
    { href: '05-scenari.html',     label: 'Scenari' },
    { href: '06-europa.html',      label: 'Europa' },
    { href: '07-domande.html',     label: 'Domande' }
  ];

  var path = decodeURIComponent(location.pathname);
  var page = path.split('/').pop() || 'index.html';
  var inner = links.map(function(l) {
    var match = l.href === page || path.endsWith('/' + l.href) || path.indexOf(l.href.replace('.html','')) !== -1;
    var cls = (l.href !== '../' && match) ? ' class="active"' : '';
    var sty = l.style ? ' style="' + l.style + '"' : '';
    return '<a href="' + l.href + '"' + cls + sty + '>' + l.label + '</a>';
  }).join('');

  var nav = document.createElement('nav');
  nav.innerHTML = '<div class="nav-inner">' + inner + '</div>';

  var header = document.querySelector('header');
  if (header) {
    header.parentNode.insertBefore(nav, header);
  } else {
    document.body.insertBefore(nav, document.body.firstChild);
  }

  // Floating contact button
  var fab = document.createElement('a');
  fab.className = 'fab-contact';
  fab.href = 'mailto:primadivotareadmin@gmail.com?subject=Segnalazione%20imprecisione';
  fab.setAttribute('aria-label', 'Segnala imprecisioni');
  fab.innerHTML = '<span class="fab-icon">\u00A7</span><span class="fab-text">Imprecisioni? Scrivici</span>';
  document.body.appendChild(fab);
})();
