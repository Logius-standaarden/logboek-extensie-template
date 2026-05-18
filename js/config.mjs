import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  maxTocLevel: 3,
  license: "cc-by",
  specStatus: "WV",
  specType: "PR",
  pubDomain: "logboek",
  shortName: "logboek-extensie-template",
  publishDate: "2026-04-09",
  publishVersion: "1.0.0",
  prevVersion: [],

  editors:
    [
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
      {
        name: "Tim van der Lippe",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
    ],
  authors:
    [
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
      {
        name: "Tim van der Lippe",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
    ],
  github: "https://github.com/Logius-standaarden/logboek-extensie-template",
});
