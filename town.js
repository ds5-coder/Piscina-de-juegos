const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 900, height: 500 } }); p.setDefaultTimeout(400000); const errs = [];
  p.on('console', m => { if ((m.type() === 'error' || m.type() === 'warning') && !/Fetch API|_blob/.test(m.text())) errs.push(m.text().slice(0, 400)); });
  p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('http://127.0.0.1:8766/test.html'); await p.waitForFunction(() => window.__T, null, { timeout: 120000 });
  await p.evaluate(() => { __T.start(); __T.hud(); __T.setMin(16.5 * 60); __T.go(-17, -1.2, Math.PI); });
  await p.waitForFunction(() => __T.remy() && __T.DIOM.ready, null, { timeout: 300000 });
  await p.waitForTimeout(12000);
  console.log(await p.evaluate(() => 'mnpc ' + window.__mn));
  await p.evaluate(() => __T.camset(4.2, 0.18, Math.PI)); await p.waitForTimeout(5000); await p.screenshot({ path: 'shots/town_stoa.png' });
  await p.evaluate(() => { __T.go(-15.9, -4.2, Math.PI); }); await p.waitForTimeout(4000);
  await p.evaluate(() => { __T.photo(Math.PI, -0.05); }); await p.waitForTimeout(5000); await p.screenshot({ path: 'shots/town_socrates.png' });
  await p.evaluate(() => { __T.unphoto(); __T.go(0, 6, 0); __T.camset(6, 0.2, 0.0); }); await p.waitForTimeout(6000); await p.screenshot({ path: 'shots/town_agora.png' });
  console.log(errs.join('\n') || 'no errors'); await b.close();
})();
