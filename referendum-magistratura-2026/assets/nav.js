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

  var page = location.pathname.split('/').pop() || 'index.html';

  var inner = links.map(function(l) {
    var cls = (l.href === page) ? ' class="active"' : '';
    var sty = l.style ? ' style="' + l.style + '"' : '';
    return '<a href="' + l.href + '"' + cls + sty + '>' + l.label + '</a>';
  }).join('');

  var nav = document.createElement('nav');
  nav.innerHTML = '<div class="nav-inner">' + inner + '</div>';

  var header = document.querySelector('header');
  if (header && header.nextSibling) {
    header.parentNode.insertBefore(nav, header.nextSibling);
  } else {
    document.body.insertBefore(nav, document.body.firstChild);
  }
})();
