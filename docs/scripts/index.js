window.$docsify = {
  name: 'KAZAN GAMES',
  nameLink: 'https://kazangames.com/',
  repo: '',
  homepage: './pages/index.md',
  loadNavbar: false,
  loadSidebar: true,
  subMaxLevel: 2,
  mergeNavbar: true,
  notFoundPage: './pages/404.md',

  plugins: [
    function(hook) {
      var footer = [
        '<hr/>',
        '<footer>',
        '<p align="center">',
        '<br><span>Crystal Lighting Engine © 2025 by <a href="https://twitter.com/foxyofjungle">Mozart Junior (FoxyOfJungle)</a> | All content is copyrighted.</span><br>',
        '<span>Docs created by <a href="https://twitter.com/foxyofjungle" target="_blank">Mozart Junior</a>, with help of <a href="https://twitter.com/RookTKO" target="_blank">RookTKO</a>, using <a href="https://github.com/docsifyjs/docsify" target="_blank">Docsify</a></span>',
        '</p>',
        '</footer>'
      ].join('');

      hook.afterEach(function(html) {
        return html + footer;
      });
    }
  ]
}
