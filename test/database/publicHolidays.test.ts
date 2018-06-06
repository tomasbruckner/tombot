import PublicHolidays from "../../src/database/PublicHolidays";

test("name day", () => {
    const testedClass = new PublicHolidays();

    const result = testedClass.getPublicHoliday("1. 5.");

    expect(result).toEqual({
        name: "Svátek práce",
        description: "Svátek práce, neboli 1. máj má mnoho z nás spojen se socialistickou propagandou bývalého režimu. Historie vzniku tohoto svátku sahá až do roku 1890. O rok dříve byl právě Svátek práce vyhlášen jako oslava na paměť vypuknutí stávky Chicagských dělníků, takže původ tohoto svátku sahá do USA. V Českých zemích se Svátek práce - první máj slaví od roku 1890 a první oslavy se konaly na Střeleckém ostrově v Praze. V naší zemi právě v období socialismu byl první máj velmi populární, byly organizovány bohaté průvody městy, doplněné o tribunální přednesy čelních představitelů strany. Účast zde byla povinná a jistě si mnoho z vás vzpomene na \"fasování\" transparentů a mávátek na podpis. V průvodu byly zastoupeny jak děti ze škol, tak podniky a různé organizace, např. Červený kříž apod.. Tradiční prvek oslav socialistického prvního máje tvořila mávátka, transparenty, pugety šeříků a samozřejmě alegorické vozy. V porevolučních dobách, tj. po roku 1989 se oslavy prvního máje hromadně nekonají, ale obvykle je využívají politické strany ke svému zviditelnění.",
    });
});
