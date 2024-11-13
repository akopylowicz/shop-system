# ReadMe Responsives Shopsystem

# Projektsetup:

Hier könnte stehen wie man das Projekt aufsetzt (im Moment gar nicht)

## Grobe Entwicklungschritte

- Kurze skizzierung um ein Plan zu haben, wie es am Ende aussehen soll. Ein Ziel vor Augen haben.
- Aufsetzen des Projekts mit Nx (Mehrmals aufgrund verschiedener Stackblitz Fehler) letztendlich dann lokal aufgesetzt, auf git gepusht und in Stackblitz bearbeitet.
- Erst Komponenten Manuell erstellt, dann die Befehle dafür gefunden und nochmal Komponenten korrekt automatisch erstellen lassen.
- Routing implementiert (akutell noch komischer Fehler)
- HTML und Angular/Typescript? Code angefangen zu implementieren

## Noch ausstehend

- CSS
- Routing Fehler beheben
- Lazy Loading
- Tailwind integration -> Layoutmodul, Layout responsiv gestalten
- State Management
- Dummy Datenbank


## Interessante (nervige) Fehler

✘ [ERROR] NG8001: 'app-header' is not a known element:
1. If 'app-header' is an Angular component, then verify that it is part of this module.
2. If 'app-header' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. [plugin angular-compiler]

    src/app/app.component.html:0:0:
      0 │ 
        ╵ ^

  Error occurs in the template of component AppComponent.

    src/app/app.component.ts:5:15:
      5 │   templateUrl: './app.component.html',

      Lösung: https://www.reddit.com/r/angular/comments/1bunwx4/error_ng8001_appheader_is_not_a_know_element/?rdt=36210
