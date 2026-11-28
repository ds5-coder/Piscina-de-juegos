#!/usr/bin/env python3
"""Genera agenda-offline.html: toda la app (HTML, CSS, JS, motor SQLite y logo) en UN solo archivo.
Uso: python3 tools/build_offline.py   (desde la carpeta agenda/)"""
import base64, pathlib, re
root = pathlib.Path(__file__).resolve().parent.parent
rd = lambda n: (root / n).read_text(encoding='utf-8')
html, css, app, sqljs = rd('index.html'), rd('styles.css'), rd('app.js'), rd('vendor/sql-wasm.js')
wasm = base64.b64encode((root / 'vendor/sql-wasm.wasm').read_bytes()).decode()
logo = 'data:image/svg+xml;base64,' + base64.b64encode((root / 'icon.svg').read_bytes()).decode()
safe = lambda t: t.replace('</script', '<\\/script')
app = app.replace("src=\"icon.svg\"", f"src=\"{logo}\"")
html = re.sub(r'<link rel="(manifest|icon|apple-touch-icon)"[^>]*>\n?', '', html)
html = html.replace('<link rel="stylesheet" href="styles.css">', f'<style>\n{css}\n</style>')
html = html.replace('<script src="vendor/sql-wasm.js"></script>', f'<script>window.__WASM_B64="{wasm}";</script>\n<script>\n{safe(sqljs)}\n</script>')
html = html.replace('<script src="app.js"></script>', f'<script>\n{safe(app)}\n</script>')
assert not re.search(r'<(script[^>]+src|link)\b', html), 'quedan recursos externos'
(root / 'agenda-offline.html').write_text(html, encoding='utf-8')
print('agenda-offline.html', round(len(html) / 1024), 'KB')
