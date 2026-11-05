const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 480, height: 270 } }); const errs = [];
  p.on('console', m => { if ((m.type() === 'error' || m.type() === 'warning') && !m.text().includes('Fetch API')) errs.push(m.text().slice(0, 300)); });
  p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('file://' + require('path').resolve('test.html'));
  await p.waitForFunction(() => window.__T, null, { timeout: 120000 });
  await p.evaluate(() => { __T.start(); __T.setMin(23.5 * 60); __T.setQ('ultra'); });
  await p.waitForTimeout(8000);
  await p.evaluate(() => { __T.setQ('low'); }); await p.waitForTimeout(4000);
  await p.screenshot({ path: 'shots/chk.png', timeout: 240000 });
  console.log(errs.join('\n') || 'no errors'); await b.close();
})();
