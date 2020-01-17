class kryminal {
    constructor(ilosc) {
        this.ilosc = ilosc;
    }
    pokazIloscKryminalow() {
        return parseInt(this.ilosc);
    }
    wstawLiczbeKryminalow(nowaIlosc) {
        this.ilosc = nowaIlosc;
    }
}
class horror {
    constructor(ilosc) {
        this.ilosc = ilosc;
    }

    pokazIloscHorrorow() {
        return parseInt(this.ilosc);
    }

    wstawLiczbeHorrorow(nowaIlosc) {
        this.ilosc = nowaIlosc;
    }
}
class lektura_szkolna {
    constructor(ilosc) {
        this.ilosc = ilosc;
    }

    pokazIloscLektur() {
        return parseInt(this.ilosc);
    }

    wstawLiczbeLektur(nowaIlosc) {
        this.ilosc = nowaIlosc;
    }

}
class Wypozyczone {
    constructor(kryminal, horror, lektura_szkolna) {
        this.kryminal = kryminal;
        this.horror = horror;
        this.lektura_szkolna = lektura_szkolna;
    }

    ileWszystkich() {
        return this.kryminal.pokazIloscKryminalow()
            + this.lektura_szkolna.pokazIloscLektur()
            + this.horror.pokazIloscHorrorow();
    }
}
class Uczen {
    constructor(imie) {
        this.imie = imie;
    }

    wstawUczen(imie) {
        this.imie = imie;
    }
}
class Biblioteka {
    constructor(Uczen, Wypozyczone) {
        this.Uczen = Uczen;
        this.Wypozyczone = Wypozyczone;
    }
}
function obiekt() {
    ls = new lektura_szkolna(1);
    k = new kryminal(1);
    h = new horror(1);
    w = new Wypozyczone(k, h, ls);
    u = new Uczen('Adam');
    b = new Biblioteka(u, w);

    noweImieUcznia = document.getElementById('poleimie').value;

    noweKrym = document.getElementById('krym').value;
    noweHorr = document.getElementById('horr').value;
    noweLekt = document.getElementById('lekt').value;

    if ((parseInt(noweKrym) + parseInt(noweHorr) + parseInt(noweLekt)) <= 9) {
        u.wstawUczen(noweImieUcznia);
        k.wstawLiczbeKryminalow(noweKrym);
        h.wstawLiczbeHorrorow(noweHorr);
        ls.wstawLiczbeLektur(noweLekt);
        console.log(b);
        // console.log("wypozyczone: "+(parseInt(noweKrym)+ parseInt(noweHorr) + parseInt(noweLekt)));
        console.log(w.ileWszystkich());
    }
    else {
        console.log('sorry masz za dużo ksiązek');
    }


    // console.log('Liczba lektur szkolnych: '+ls.pokazIloscLektur());
}

