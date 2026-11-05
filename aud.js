const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
  const p = await b.newPage({ viewport: { width: 480, height: 270 } }); p.setDefaultTimeout(400000); const errs = [];
  p.on('console', m => { if ((m.type() === 'error' || m.type() === 'warning') && !/Fetch API|_blob/.test(m.text())) errs.push(m.text().slice(0, 300)); });
  p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('http://127.0.0.1:8766/test.html'); await p.waitForFunction(() => window.__T, null, { timeout: 120000 });
  await p.click('#continueBtn', { force: true }).catch(() => {}); 
  await p.evaluate(() => { __T.start(); __T.setMin(11 * 60); __T.go(-17, -1.2, Math.PI); });
  await p.waitForTimeout(30000);
  console.log(await p.evaluate(() => JSON.stringify(__T.chat())));
  console.log(errs.join('\n') || 'no errors'); await b.close();
})();
