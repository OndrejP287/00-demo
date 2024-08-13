# Demo Projekt

Wir verwenden dieses Projekt um unsere Installation zu testen, und um einen
einfachen Einstieg in Webseiten zu bekommen.

## Webserver starten

Wenn Ihr `VSCode` richtig aufgesetzt ist, so wie es
[hier](http://gymmu.github.io/gym-inf/install) beschrieben ist, können Sie ein
neues Terminal öffnen, und den folgenden Befehl eingeben:

```bash
npm run dev
```

Damit wird der Webserver gestartet, und Sie können Sich die Webseite im Browser
anschauen.

## Tests

In der Software-Entwicklung ist es üblich alles automatisiert zu testen, damit
sollen Bugs vermindert werden. Einfache Tests können auch für Webseiten
geschrieben werden, und Sie können damit die _Korrektheit_ von Ihren Aufgaben
testen. Das Problem dabei ist, dass nicht alle Fälle überprüft werden können,
und Sie müssen sehr genau den Anweisungen folgen, damit die Tests erfolgreich
sind. Das würde Sie bei der Entwicklung viel zu stark einschränken. Dennoch
werden Ihnen hier einige Tests zur Verfügung gestellt, damit Sie sehen das Sie
auf dem richtigen Weg sind.

Wenn Sie die Tests verwendne möchten, dann können Sie diese mit dem folgenden
Befehl in einem neuen Terminal öffnen:

`npm test`

Das sollte Ihnen eine neue Webseite öffnen, wo die erfolgreichen und nicht
erfolgreichen Tests angezeigt werden.

Ein Test beschreibt immer was er überprüfen möchte. Wenn der Test fehl schlägt,
dann haben Sie die Anweisung nicht genau befolgt, oder auch die Aufgabe noch
garnicht bearbeitet.

## Aufgaben

Hier finden Sie einige Aufgaben die Ihnen den Einstieg in `HTML` erleichtern
sollen. Unterlagen zur Theorie wie `HTML` funktioniert finden Sie
[hier](https://gymmu.github.io/gym-inf).

### Aufgabe 01

Fügen Sie Ihren Namen im Titel ein, und ersetzen Sie dabei die `...`.

### Aufgabe 02

Fügen Sie ein `<section>`-Tag in die Webseite ein, und füllen Sie es mit einem
sehr kurzen Text.

Platzieren Sie dieses `<section>`-Tag direkt unterhalb vom `<h1>`-Tag, noch
innerhalb vom `<main>`-Tag.

### Aufgabe 03

Sie sollen einen kurzen Text schreiben der Sie vorstellt. Der Text soll 2
Abschnitte haben und einen Titel. Verwenden Sie dafür die folgenden Elemente:
`<h2>, <section>, <p>`.
