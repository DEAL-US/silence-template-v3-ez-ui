# Silence template: ez-ui

Template of the student's frontend for [Silence](https://github.com/IISSI-US/silence-py) 3,
with [ez-ui](https://github.com/IISSI-US/ez-ui). It is the default one:

```
silence new myproject                    # this template and the admin panel
silence new myproject --no-admin         # without the admin panel
```

`silence new` copies everything but this README into the new project:

- `web/`: `index.html` (a title and a paragraph, with ez-ui), ez-ui (`web/ez-ui/`, copied, without
  CDN), axios (`web/js/vendor/`, for the JS API that Silence generates) and the messages
  (`js/messages.js`, with ez-ui's notifications).
- `sql/`: where to keep the scripts of the database (a good practice; Silence does not run
  them).

The texts of the pages are in Spanish, as the course.
