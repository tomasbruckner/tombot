import * as cheerio from "cheerio";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

const LUNCH_MAP = {
  Prosciutto: {
    description: "rajčatový protlak, mozzarella, dušená šunka",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/9-prosciutto.html#/velikost-velka_35_cm",
  },
  Mais: {
    description: "rajčatový protlak, mozzarella, slanina, kukuřice, šunka",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/14-mais.html#/velikost-velka_35_cm",
  },
  Mezzogiorno: {
    description: "římský salát, ledový salát, rukola, sušená italská rajčata, černé olivy, mozzarella kuličky, bazalkové pesto, italský tvrdý sýr, pizza pane",
    type: "Salát",
    link: "https://carusopizza.cz/cs/rozvoz-salatu-v-brne-a-olomouci/118-mezzogiorno.html",
  },
  "4 Formaggi": {
    description: "smetana, mozzarella, gorgonzola, plísňový sýr, uzený sýr",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/12-4-formaggi.html#/velikost-velka_35_cm",
  },
  "Salsiccia Spinaci": {
    description:
      "smetana, mozzarella, domácí italská klobása salsiccia, špenát",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/26-salsiccia-spinaci.html#/velikost-velka_35_cm",
  },
  Diavola: {
    description:
      "rajčatový protlak, mozzarella, paprikový salám, chilli drcené",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/11-diavola.html#/velikost-velka_35_cm",
  },
  Spiritosa: {
    description: "smetana, mozzarella, dušená šunka, kukuřice, žampiony",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/1023-spiritosa.html#/velikost-velka_35_cm",
  },
  "Prosciutto Funghi": {
    description: "rajčatový protlak, mozzarella, dušená šunka, žampiony",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/10-prosciutto-funghi.html#/velikost-velka_35_cm",
  },
  Margherita: {
    description: "rajčatový protlak, mozzarella",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/1-margherita.html#/velikost-velka_35_cm",
  },
  Hawai: {
    description: "smetana, mozzarella, šunka, ananas",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/8-hawai.html#/velikost-velka_35_cm",
  },
  Hawaii: {
    description: "smetana, mozzarella, šunka, ananas",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/8-hawai.html#/velikost-velka_35_cm",
  },
  Pannocchia: {
    description: "rajčatový protlak, mozzarella, šunka, kukuřice",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/17-panocchia.html#/velikost-velka_35_cm",
  },
  Contadina: {
    description: "rajčatový protlak, mozzarella, salám, slanina, žampióny",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/16-contadina.html#/velikost-velka_35_cm",
  },
  Golosona: {
    description:
      "rajčatový protlak, mozzarella, dušená šunka, slanina, paprikový salám",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/13-golosona.html#/velikost-velka_35_cm",
  },
  Sbagliata: {
    description: "rajčatový protlak, mozzarella, pikantní salám, kukuřice",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/1022-sbagliata.html#/velikost-velka_35_cm",
  },
  Salami: {
    description:
      "rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/19-salami.html#/velikost-velka_35_cm",
  },
  "Pollo Spinaci": {
    description: "smetana, mozzarella, kuřecí maso, špenát",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/18-pollo-spinaci.html#/velikost-velka_35_cm",
  },
  "Pollo e Spinaci": {
    description: "smetana, mozzarella, kuřecí maso, špenát",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/18-pollo-e-spinaci.html?search_query=polo+e+spinaci&results=9#/velikost-velka_35_cm",
  },
  "Quattro stagioni": {
    description:
      "rajčatový protlak, mozzarella, dušená šunka, černé olivy, žampiony, italské artyčoky",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/1001-quattro-stagioni.html#/velikost-velka_35_cm",
  },
  "Quattro Stagioni": {
    description:
      "rajčatový protlak, mozzarella, dušená šunka, černé olivy, žampiony, italské artyčoky",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/1001-quattro-stagioni.html#/velikost-velka_35_cm",
  },
  Saporita: {
    description:
      "rajčatový protlak, mozzarella, italský salám napoli, žampiony, hermelín",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/1000-saporita.html#/velikost-velka_35_cm",
  },
  Concordia: {
    description: "smetana, mozzarella, šunka, parmezán, pepř",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/24-concordia.html#/velikost-velka_35_cm",
  },
  Pancetta: {
    description:
      "rajčatový protlak, mozzarella, domácí italská slanina pancetta, parmezan",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/29-pancetta.html#/velikost-velka_35_cm",
  },
  Tricolore: {
    description:
      "smetanový základ, mozzarella, salám spianata, hermelín, špenát",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/1013-tricolore.html#/velikost-velka_35_cm",
  },
  Speciale: {
    description:
      "smetana, mozzarella, domácí italská slanina pancetta, žampióny, parmezan",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/30-speciale.html#/velikost-velka_35_cm",
  },
  Caruso: {
    description:
      "smetana, mozzarella, gorgonzola, paprikový salám, slanina, paprika",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/20-caruso.html#/velikost-velka_35_cm",
  },
  Salsiccia: {
    description:
      "rajčatový protlak, mozzarella, žampiony, domácí italská klobása salsiccia",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/23-salsiccia.html#/velikost-velka_35_cm",
  },
  Butrio: {
    description:
      "rajčatový protlak, mozzarella, domácí italská klobása salsiccia, uzený sýr, cibule",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/1071-butrio.html#/velikost-velka_35_cm",
  },
  Mediterranea: {
    description:
      "rajčatový protlak, mozzarella , rukola, sušená rajčata, parmazán",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/28-mediterranea.html#/velikost-velka_35_cm",
  },
  Funghi: {
    description: "rajčatový protlak, mozzarella, žampiony",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/1047-funghi.html#/velikost-velka_35_cm",
  },
  Carbonara: {
    description:
      "smetana, mozzarella, domácí italská slanina pancetta, vejce, parmezan, pepř",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/53-carbonara.html#/velikost-velka_35_cm",
  },
  "Del Re": {
    description:
      "rajčatový protlak, mozzarella, gorgonzola, domácí italská slanina pancetta, salsiccia",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/32-del-re.html#/velikost-velka_35_cm",
  },
  Boscaiola: {
    description:
      "smetana, mozzarella, uzený sýr, plísňový sýr, domácí italská slanina pancetta, žampióny, olivy",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/55-boscaiola.html#/velikost-velka_35_cm",
  },
  Vegetariana: {
    description:
      "rajčatový protlak, mozzarella, špenát, žampiony, černé olivy, kukuřice, červená paprika, cibule",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/21-vegetariana.html#/velikost-velka_35_cm",
  },
  "Tonno Cipolla": {
    description: "rajčatový protlak, mozzarella, tuňák, cibule",
    type: "Pizza",
    link: "https://carusopizza.cz/cs/pizza-brno-olomouc/27-tonno-cipolla.html#/velikost-velka_35_cm",
  },
  Alpina: {
    description:
      "římský salát, ledový salát, kuřecí maso, paprikový dressing, kukuřice, plísňový sýr, sůl, pizza pane",
    type: "Salát",
    link: "https://carusopizza.cz/cs/rozvoz-salatu-v-brne-a-olomouci/1050-alpina.html#/ingredience_navic-zadna_dalsi_ingredience",
  },
  Caesar: {
    description:
      "kuřecí maso, římský salát, dresink, krutony, parmazán, pizza pane",
    type: "Salát",
    link: "https://carusopizza.cz/cs/rozvoz-salatu-v-brne-a-olomouci/120-caesar.html#/ingredience_navic-zadna_dalsi_ingredience",
  },
  Montana: {
    description:
      "ledový salát, římský salát, rukola, černé olivy, sušená rajčata, slanina, parmazán, pizza pane",
    type: "Salát",
    link: "https://carusopizza.cz/cs/rozvoz-salatu-v-brne-a-olomouci/119-tirolese.html#/ingredience_navic-zadna_dalsi_ingredience",
  },
  Primavera: {
    description:
      "ledový a římský salát, kukuřice, tuňák, černé olivy, červená cibule, rajčata, vejce, olivový olej, pizza pane",
    type: "Salát",
    link: "https://carusopizza.cz/cs/rozvoz-salatu-v-brne-a-olomouci/121-primavera.html#/ingredience_navic-zadna_dalsi_ingredience",
  },
  "Tortellini Bolognese": {
    type: "Těstoviny",
    description:
      "tortellini plněné mletým masem, mleté maso (hovězí a vepřové), zelenina, rajčata",
    link: "https://carusopizza.cz/cs/tortellini/87-tortellini-bolognese.html",
  },
  "Tortellini Pomodoro": {
    type: "Těstoviny",
    description: "tortellini plněné mletým masem, rajčata, zelenina",
    link: "https://carusopizza.cz/cs/tortellini/90-tortellini-pomodoro.html",
  },
  "Tagliatelle Bolognese": {
    type: "Těstoviny",
    description: "mleté maso (hovězí a vepřové), zelenina, rajčata",
    link: "https://carusopizza.cz/cs/tagliatelle/92-tagliatelle-bolognese.html",
  },
  "Tagliatelle Pomodoro": {
    type: "Těstoviny",
    description: "rajčata, zelenina",
    link: "https://carusopizza.cz/cs/tagliatelle/95-tagliatelle-pomodoro.html",
  },
  "Tagliatelle Carbonara": {
    type: "Těstoviny",
    description: "2 vejce, italská domácí pancetta, parmezán, cibule, pepř",
    link: "https://carusopizza.cz/cs/tagliatelle/96-tagliatelle-carbonara.html",
  },
  "Fusilli Bolognese": {
    type: "Těstoviny",
    description: "mleté maso (hovězí a vepřové), zelenina, rajčata",
    link: "https://carusopizza.cz/cs/fusilli/97-fusilli-bolognese.html",
  },
  "Fusilli Pomodoro": {
    type: "Těstoviny",
    description: "rajčata, zelenina",
    link: "https://carusopizza.cz/cs/fusilli/100-fusilli-pomodoro.html",
  },
  "Fusilli Carbonara": {
    type: "Těstoviny",
    description: "2 vejce, italská domácí pancetta, parmezán, cibule, pepř",
    link: "https://carusopizza.cz/cs/fusilli/101-fusilli-carbonara.html",
  },
  "Ravioli Bolognese": {
    type: "Těstoviny",
    description:
      "ravioli plněné ricottou a špenátem, mleté maso (hovězí a vepřové), zelenina, rajčata",
    link: "https://carusopizza.cz/cs/ravioli/102-ravioli-bolognese.html",
  },
  "Ravioli Pomodoro": {
    type: "Těstoviny",
    description: "ravioli plněné ricottou a špenátem, rajčata, zelenina",
    link: "https://carusopizza.cz/cs/ravioli/105-ravioli-pomodoro.html",
  },
  "Gnocchi Bolognese": {
    type: "Těstoviny",
    description: "mleté maso (hovězí a vepřové), zelenina, rajčata",
    link: "https://carusopizza.cz/cs/gnocchi/107-gnocchi-bolognese.html",
  },
  "Gnocchi Pomodoro": {
    type: "Těstoviny",
    description: "rajčata, zelenina",
    link: "https://carusopizza.cz/cs/gnocchi/110-gnocchi-pomodoro.html",
  },
  "Gnocchi Romagna": {
    type: "Těstoviny",
    description: "domácí italská slanina pancetta, smetana, krémový italský tvrdý sýr, pepř",
    link: "https://carusopizza.cz/cs/rozvoz-testovin-v-brne-a-olomouci/1162-gnocchi-romagna.html",
  },
  "Tagliatelle Romagna": {
    type: "Těstoviny",
    description: "domácí italská slanina pancetta, smetana, krémový italský tvrdý sýr, pepř",
    link: "https://carusopizza.cz/cs/rozvoz-testovin-v-brne-a-olomouci/1163-tagliatelle-romagna.html",
  },
  "Fusilli Romagna": {
    type: "Těstoviny",
    description: "domácí italská slanina pancetta, smetana, krémový italský tvrdý sýr, pepř",
    link: "https://carusopizza.cz/cs/rozvoz-testovin-v-brne-a-olomouci/1164-fusilli-romagna.html",
  },
  "Penne Romagna": {
    type: "Těstoviny",
    description: "domácí italská slanina pancetta, smetana, krémový italský tvrdý sýr, pepř",
    link: "https://carusopizza.cz/cs/rozvoz-testovin-v-brne-a-olomouci/1165-penne-romagna.html",
  },
  "Spaghetti Romagna": {
    type: "Těstoviny",
    description: "domácí italská slanina pancetta, smetana, krémový italský tvrdý sýr, pepř",
    link: "https://carusopizza.cz/cs/rozvoz-testovin-v-brne-a-olomouci/1166-spaghetti-romagna.html",
  },
  "Ravioli Romagna": {
    type: "Těstoviny",
    description: "domácí italská slanina pancetta, smetana, krémový italský tvrdý sýr, pepř",
    link: "https://carusopizza.cz/cs/rozvoz-testovin-v-brne-a-olomouci/1167-ravioli-romagna.html",
  },
  "Tortellini Romagna": {
    type: "Těstoviny",
    description: "domácí italská slanina pancetta, smetana, krémový italský tvrdý sýr, pepř",
    link: "https://carusopizza.cz/cs/rozvoz-testovin-v-brne-a-olomouci/1168-tortelini-romagna.html#/ingredience_navic_testoviny-zadna_dalsi_ingredience",
  },
  "Penne Bolognese": {
    type: "Těstoviny",
    description: "mleté maso (hovězí a vepřové), zelenina, rajčata",
    link: "https://carusopizza.cz/cs/penne/112-rigatoni-bolognese.html",
  },
  "Penne Pomodoro": {
    type: "Těstoviny",
    description: "rajčata, zelenina",
    link: "https://carusopizza.cz/cs/penne/115-rigatoni-pomodoro.html",
  },
  "Penne Carbonara": {
    type: "Těstoviny",
    description: "2 vejce, italská domácí pancetta, parmezán, cibule, pepř",
    link: "https://carusopizza.cz/cs/penne/116-rigatoni-carbonara.html",
  },
  "Spaghetti Bolognese": {
    type: "Těstoviny",
    description: "mleté maso (hovězí a vepřové), zelenina, rajčata",
    link: "https://carusopizza.cz/cs/spaghetti/131-spaghetti-bolognese.html",
  },
  "Spaghetti Pomodoro": {
    type: "Těstoviny",
    description: "rajčata, zelenina",
    link: "https://carusopizza.cz/cs/spaghetti/132-spaghetti-pomodoro.html",
  },
  "Spaghetti Carbonara": {
    type: "Těstoviny",
    description: "2 vejce, italská domácí pancetta, parmezán, cibule, pepř",
    link: "https://carusopizza.cz/cs/spaghetti/135-spaghetti-carbonara.html",
  },
  "Spaghetti Pollo Spinaci": {
    type: "Těstoviny",
    description: "kuřecí maso, špenát, smetana",
    link: "https://carusopizza.cz/cs/spaghetti/1002-spaghetti-pollo-spinaci.html",
  },
  "Penne Pollo Spinaci": {
    type: "Těstoviny",
    description: "kuřecí maso, špenát, smetana",
    link: "https://carusopizza.cz/cs/penne/1003-rigatoni-pollo-spinaci.html",
  },
  "Fusilli Pollo Spinaci": {
    type: "Těstoviny",
    description: "kuřecí maso, špenát, smetana",
    link: "https://carusopizza.cz/cs/fusilli/1004-fusilli-pollo-spinaci.html",
  },
  "Tagliatelle Pollo Spinaci": {
    type: "Těstoviny",
    description: "kuřecí maso, špenát, smetana",
    link: "https://carusopizza.cz/cs/tagliatelle/1005-tagliatelle-pollo-spinaci.html",
  },
  "Gnocchi Pollo Spinaci": {
    type: "Těstoviny",
    description: "kuřecí maso, špenát, smetana",
    link: "https://carusopizza.cz/cs/gnocchi/1006-gnocchi-pollo-spinaci.html",
  },
  "Ravioli Pollo Spinaci": {
    type: "Těstoviny",
    description:
      "ravioli plněné ricottou a špenátem, kuřecí maso, špenát, smetana",
    link: "https://carusopizza.cz/cs/ravioli/1007-ravioli-pollo-spinaci.html",
  },
  "Tortellini Pollo Spinaci": {
    type: "Těstoviny",
    description: "tortellini plněné mletým masem, kuřecí maso, špenát, smetana",
    link: "https://carusopizza.cz/cs/tortellini/1008-tortellini-pollo-spinaci.html",
  },
  "Tortellini Tricolore": {
    type: "Těstoviny",
    description: "rajčata, bazalka, bazalkové pesto, mozzarella kuličky",
    link: "https://carusopizza.cz/cs/rozvoz-testovin-v-brne-a-olomouci/1159-tortellini-tricolore.html",
  },
  "Tagliatelle Tricolore": {
    type: "Těstoviny",
    description: "rajčata, bazalka, bazalkové pesto, mozzarella kuličky",
    link: "https://carusopizza.cz/cs/rozvoz-testovin-v-brne-a-olomouci/1160-tagliatelle-tricolore.html",
  },
  "Ravioli Tricolore": {
    type: "Těstoviny",
    description: "rajčata, bazalka, bazalkové pesto, mozzarella kuličky",
    link: "https://carusopizza.cz/cs/rozvoz-testovin-v-brne-a-olomouci/1158-ravioli-tricolore.html",
  },
  "Spaghetti Tricolore": {
    type: "Těstoviny",
    description: "rajčata, bazalka, bazalkové pesto, mozzarella kuličky",
    link: "https://carusopizza.cz/cs/rozvoz-testovin-v-brne-a-olomouci/1157-spaghetti-tricolore.html",
  },
  "Fusilli Tricolore": {
    type: "Těstoviny",
    description: "rajčata, bazalka, bazalkové pesto, mozzarella kuličky",
    link: "https://carusopizza.cz/cs/rozvoz-testovin-v-brne-a-olomouci/1156-fusilli-tricolore.html",
  },
  "Fusilli Pollo e Funghi": {
    type: "Těstoviny",
    description: "kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/fusilli/1025-fusilli-pollo-e-funghi.html",
  },
  "Fusilli Pollo Funghi": {
    type: "Těstoviny",
    description: "kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/fusilli/1025-fusilli-pollo-e-funghi.html",
  },
  "Penne Pollo e Funghi": {
    type: "Těstoviny",
    description: "kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/penne/1026-rigatoni-pollo-e-funghi.html",
  },
  "Spaghetti Pollo e Funghi": {
    type: "Těstoviny",
    description: "kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/spaghetti/1027-spaghetti-pollo-e-funghi.html",
  },
  "Tagliatelle Pollo e Funghi": {
    type: "Těstoviny",
    description: "kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/tagliatelle/1028-tagliatelle-pollo-e-funghi.html",
  },
  "Gnocchi Pollo e Funghi": {
    type: "Těstoviny",
    description: "kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/gnocchi/1029-gnocchi-pollo-e-funghi.html",
  },
  "Ravioli Pollo e Funghi": {
    type: "Těstoviny",
    description:
      "ravioli plněné ricottou a špenátem, kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/ravioli/1030-ravioli-pollo-e-funghi.html",
  },
  "Tortellini Pollo e Funghi": {
    type: "Těstoviny",
    description:
      "tortellini plněné mletým masem, kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/tortellini/1031-tortellini-pollo-e-funghi.html",
  },
  "Penne Pollo Funghi": {
    type: "Těstoviny",
    description: "kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/penne/1026-rigatoni-pollo-e-funghi.html",
  },
  "Spaghetti Pollo Funghi": {
    type: "Těstoviny",
    description: "kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/spaghetti/1027-spaghetti-pollo-e-funghi.html",
  },
  "Tagliatelle Pollo Funghi": {
    type: "Těstoviny",
    description: "kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/tagliatelle/1028-tagliatelle-pollo-e-funghi.html",
  },
  "Gnocchi Pollo Funghi": {
    type: "Těstoviny",
    description: "kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/gnocchi/1029-gnocchi-pollo-e-funghi.html",
  },
  "Ravioli Pollo Funghi": {
    type: "Těstoviny",
    description:
      "ravioli plněné ricottou a špenátem, kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/ravioli/1030-ravioli-pollo-e-funghi.html",
  },
  "Tortellini Pollo Funghi": {
    type: "Těstoviny",
    description:
      "tortellini plněné mletým masem, kuřecí maso, smetana, žampiony, petržel",
    link: "https://carusopizza.cz/cs/tortellini/1031-tortellini-pollo-e-funghi.html",
  },
  "Gnocchi Carbonara": {
    type: "Těstoviny",
    description: "2 vejce, italská domácí pancetta, parmezán, cibule, pepř",
    link: "https://carusopizza.cz/cs/gnocchi/1062-gnocchi-carbonara.html",
  },
  Lasagne: {
    type: "Těstoviny",
    description:
      "mleté maso (hovězí a vepřové), zelenina, rajčata, bešamel, parmezán",
    link: "https://carusopizza.cz/cs/lasagne/1063-lasagne-bolognese.html",
  },
  "Penne Amatriciana": {
    type: "Těstoviny",
    description:
      "rajčata, domácí italská pancetta, cibule, chilli drcené, černé olivy",
    link: "https://carusopizza.cz/cs/penne/1072-penne-amatriciana.html",
  },
  "Spaghetti Amatriciana": {
    type: "Těstoviny",
    description:
      "rajčata, domácí italská pancetta, cibule, chilli drcené, černé olivy",
    link: "https://carusopizza.cz/cs/spaghetti/1073-spagety-bolognese.html",
  },
  "Tagliatelle Amatriciana": {
    type: "Těstoviny",
    description:
      "rajčata, domácí italská pancetta, cibule, chilli drcené, černé olivy",
    link: "https://carusopizza.cz/cs/tagliatelle/1074-tagliatelle-amatriciana.html",
  },
  "Fusilli Amatriciana": {
    type: "Těstoviny",
    description:
      "rajčata, domácí italská pancetta, cibule, chilli drcené, černé olivy",
    link: "https://carusopizza.cz/cs/fusilli/1075-soffio-di-venere-amatriciana.html",
  },
  "Gnocchi Amatriciana": {
    type: "Těstoviny",
    description:
      "rajčata, domácí italská pancetta, cibule, chilli drcené, černé olivy",
    link: "https://carusopizza.cz/cs/gnocchi/1076-gnocchi-amatriciana.html",
  },
  "Tortellini Amatriciana": {
    type: "Těstoviny",
    description:
      "plněné tortellini mletým masem, rajčata, domácí italská pancetta, cibule, chilli drcené, černé olivy",
    link: "https://carusopizza.cz/cs/tortellini/1077-tortellini-amatriciana.html",
  },
  "Ravioli Amatriciana": {
    type: "Těstoviny",
    description:
      "ravioli plněné ricottou a špenátem, rajčata, domácí pancetta, cibule, chilli drcené, černé olivy",
    link: "https://carusopizza.cz/cs/ravioli/1078-ravioli-amatriciana.html",
  },
  "Mousse al Lampone": {
    type: "Dezerty",
    description:
      "malinová pěna zdobená hoblinkami z hořké čokolády",
    link: "https://carusopizza.cz/cs/home/1049-mousse-al-lampone.html",
  },
  "Tiramisu all' Amaretto": {
    type: "Dezerty",
    description:
      "krém s příchutí tiramisu prokládaný amaretto sušenkami a zdobený hoblinkami z mléčné čokolády",
    link: "https://carusopizza.cz/cs/dezerty/1147-tiramisu-all-amaretto.html",
  },
  "Tiramisu all Amaretto": {
    type: "Dezerty",
    description:
      "krém s příchutí tiramisu prokládaný amaretto sušenkami a zdobený hoblinkami z mléčné čokolády",
    link: "https://carusopizza.cz/cs/dezerty/1147-tiramisu-all-amaretto.html",
  },
  "Tiramisu all´Amaretto": {
    type: "Dezerty",
    description:
      "krém s příchutí tiramisu prokládaný amaretto sušenkami a zdobený hoblinkami z mléčné čokolády",
    link: "https://carusopizza.cz/cs/dezerty/1147-tiramisu-all-amaretto.html",
  },
  "Mousse al Cioccolato": {
    type: "Dezerty",
    description:
      "čokoládová pěna zdobená hoblinkami z bílé čokolády",
    link: "https://carusopizza.cz/cs/dezerty/1146-mousse-al-cioccolato.html",
  },
  "Tiramisu Originale": {
    type: "Dezerty",
    description:
      "krém s příchutí tiramusu prokládaný cukrářskými piškoty máčenými v silné kávě posypaný kakaem",
    link: "https://carusopizza.cz/cs/dezerty/1048-tiramisu-originale.html",
  },
  "Panna Cotta Frutti di Bosco": {
    type: "Dezerty",
    description: "smetana, vanilka, hustá poleva z lesního ovoce",
    link: "https://carusopizza.cz/cs/dezerty/1068-panna-cotta-frutti-di-bosco.html",
  },
  "Panna Cotta Cioccolato": {
    type: "Dezerty",
    description: "smetana, vanilka, hustá čokoládová poleva",
    link: "https://carusopizza.cz/cs/dezerty/1069-panna-cotta-cioccolato.html",
  },
};

class Caruso extends Restaurant {
  protected url: string = "https://www.carusorestaurant.cz/denni-obedove-menu/";

  protected defaultParams: SlackAttachment = {
    color: "#5BBB47",
    title: "Caruso",
    title_link: "https://www.carusorestaurant.cz/denni-obedove-menu/",
  };

  public handleResponse(body: string) {
    const $ = cheerio.load(body);
    const dishes = this.getDishes($);

    return this.createSlackMenu(dishes);
  }

  private getDishes($) {
    const dayIndex = new Date().getDay();

    if (dayIndex === 0 || dayIndex > 5) {
      throw new Error("Caruso does not have menu on weekend");
    }

    const id = $(`.vc_tta-tab > a`)[dayIndex - 1].attribs.href;
    const nodes = $(id).find(
      ".wpb_wrapper > .wpb_text_column.wpb_content_element  > .wpb_wrapper > p",
    );
    const result = [];

    for (let i = 0; i < nodes.length; i += 2) {
      let name = $(nodes[i]).contents().text().trim();
      const normalizedName = name.replace("28 cm/35 cm", "").trim();
      let price = $(nodes[i + 1])
        .contents()
        .text()
        .trim();
      if (LUNCH_MAP[normalizedName]) {
        price = `${price} (${LUNCH_MAP[normalizedName].link})`;
        name = `*${name}* (${LUNCH_MAP[normalizedName].type}) - ${LUNCH_MAP[normalizedName].description}`;
      }

      result.push({
        dish: {
          name,
          price,
        },
      });
    }

    return result;
  }
}

export default Caruso;
