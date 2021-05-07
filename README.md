# berlin gegen corona

Run locally

```bash
yarn
yarn start
```

The data is fetched from [https://docparser.com/](https://docparser.com/) by uploading the [kvberlin pdf](https://www.kvberlin.de/fileadmin/user_upload/fuer_patienten/corona/uebersicht_AstraZeneca-Impfpraxen.pdf). I have a ruby script for this, but not fully automated this yet.

#### todo

- [ ] improve the UX (the field should look copyable)
- [x] remove duplicates
- [ ] integrate the fetching of data from kvberlin in the build and add a job to run it daily
- [x] route for each clinic, we can use address as key
- [ ] option to bookmark a clinic (so user can bookmark after emailing)
- [ ] option to request adding a place, many people know the place which is not part of kvberlin pdf
