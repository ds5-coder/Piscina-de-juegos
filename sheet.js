const { chromium } = require('playwright');
(async () => { const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] }); const p = await b.newPage({ viewport: { width: 1200, height: 600 } });
p.on('console', m => console.log(m.text())); await p.goto('http://localhost:8766/sheet.html'); await p.waitForFunction(() => window.done, null, { timeout: 120000 }); await p.screenshot({ path: 'shots/sheet.png' }); await b.close(); })();
