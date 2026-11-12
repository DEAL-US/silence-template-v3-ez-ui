# Silence template: ez-ui

Template of the student's frontend for [Silence](https://github.com/DEAL-US/Silence) 3,
with [ez-ui](https://iissi-us.github.io/ez-ui/). It is the default one:

```
silence new myproject                    # this template and the admin panel
silence new myproject --no-admin         # without the admin panel
```

`silence new` copies everything but this README into the new project:

- `web/`: `index.html` (a title and a paragraph, with ez-ui), ez-ui (`web/ez-ui/`, copied, without
  CDN), axios (`web/js/vendor/`, for the JS API that Silence generates) and the messages
  (`js/messages.js`, with ez-ui's notifications).
- `sql/`: the scripts of the database, listed in order in `database.scripts` of `silence.json`
  (`silence createdb` and the admin panel create the database again with them).
- `.silence/js_api/`: the molds of the JS API that Silence generates with the endpoints
  (`web/js/api/_auto/`), with axios, as the classes do. Silence has no code of the front-end of
  its own: it fills in these molds (see `docs/molds.md` in silence-py). Change them to change the
  code that is generated (e.g., with `fetch`).

The texts of the pages are in Spanish, as the course.
