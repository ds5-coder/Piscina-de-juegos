const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 800, height: 450 } }); p.setDefaultTimeout(400000); const errs = [];
  p.on('console', m => { if ((m.type() === 'error' || m.type() === 'warning') && !/Fetch API|_blob/.test(m.text())) errs.push(m.text().slice(0, 400)); });
  p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('http://127.0.0.1:8766/test.html'); await p.waitForFunction(() => window.__T, null, { timeout: 120000 });
  await p.evaluate(() => { __T.start(); __T.hud(); __T.setMin(16.8 * 60); __T.go(-30, 3, 1.2); });
  await p.waitForFunction(() => __T.remy(), null, { timeout: 240000 });
  await p.evaluate(() => __T.camset(1.9, 0.02, 1.2 + Math.PI)); await p.waitForTimeout(5000); await p.screenshot({ path: 'shots/look_front.png' });
  await p.evaluate(() => __T.camset(2.6, 0.1, 1.2 + 2.3)); await p.waitForTimeout(3000); await p.screenshot({ path: 'shots/look_side.png' });
  await p.keyboard.press('Space'); await p.waitForTimeout(400); await p.screenshot({ path: 'shots/look_jump.png' });
  console.log(errs.join('\n') || 'no errors'); await b.close();
})();
