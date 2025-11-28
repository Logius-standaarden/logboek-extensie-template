import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  maxTocLevel: 3,
  specStatus: "CV",
  specType: "PR",
  pubDomain: "logboek",
  shortName: "extensie-template",
  publishDate: "2025-11-27",
  publishVersion: "1.0.0",
  prevVersion: [],
  // TODO: verwijder voor publicatie
  latestVersion: "https://logius-standaarden.github.io/logboek-extensie-template/",
  sotdText: {
    nl: {
      sotd: "Status van dit document",
      cv: `Dit is een consultatieversie. We moedigen gebruikers aan om meldingen of suggesties aan te maken via GitHub. Mocht dit niet mogelijk zijn, dan kunt u ook een e-mail sturen naar api@logius.nl`,
    },
  },

  editors:
    [
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
      {
        name: "Tim van der Lippe",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
    ],
  authors:
    [
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
      {
        name: "Tim van der Lippe",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
    ],
  github: "https://github.com/Logius-standaarden/logboek-extensie-template",
});
