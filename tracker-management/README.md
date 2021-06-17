# Mini projekt: Trackers

I Capturi kan man oprette en `tracker` som gør det muligt for vores audio-service at opfange 
bestemte ord/sætninger i samtaler som er interessante for kunden. På den måde kan vi give kunden 
indsigt i hvornår disse ord bliver sagt, hvor ofte, hvem der siger dem og meget mere.

## Opgave

Lav en side til at administrere `trackers` for en kunde.

En `tracker` har følgende properties:

```
{
  name: string // trackerens navn
  words: string[] // en liste af ord der skal opfanges i samtaler
}
```

### Funktionelle krav

Man skal kunne:
- oprette en ny `tracker`
- se en liste af alle oprettede `trackers`
- sortere listen på henholdsvis tracker `name` og antallet af ord (`words.length`)
- slette en `tracker` 

Du bestemmer fuldstændig selv hvordan det UI-mæssigt skal se ud og hvilken teknologi du vil anvende.

## Hand over
Lav et github repository vi kan tilgå og skriv gerne i en README.md fil hvordan vi kan teste/prøve din app.

