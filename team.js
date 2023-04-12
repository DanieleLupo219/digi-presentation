let team = [{name: "Daniele",
             surname: "Lupo",
             age: 23,
             city: "Palermo",
             hobby: "Dancing",
             favoriteFood: "Curry",
             favoriteVideoGame: "Death Stranding",
             favoriteFilm: "",
             favoriteBook: "Demian by Hermann Hesse",
             namePet: "Yupi"
            },
            {name: "Luca",
             surname: "Lai",
             age: 34,
             city: "Cagliari",
             hobby: "Calisthenic",
             favoriteFood: "Lasagna",
             favoriteVideoGame: "Call of Duty",
             favoriteFilm: "Star Wars",
             favoriteBook: "",
             namePet: "Tommy"
            },
            {name: "Fernando",
             surname: "Lanna",
             age: 27,
             city: "Roma",
             hobby: "Boxe",
             favoriteFood: "Carbonara",
             favoriteVideoGame: "Call of duty",
             favoriteFilm: "Spider man",
             favoriteBook: "fahrenheit 451",
             namePet: ""
            },
            {name: "Edoardo",
             surname: "Ricca",
             age: 24,
             city: "Roma",
             hobby: "Trekking",
             favoriteFood: "Squid",
             favoriteVideoGame: "",
             favoriteFilm: "Akira",
             favoriteBook: "Siddartha",
             namePet: "Sloth"
            }];

team.sort(function (x, y) {
    if (x.name < y.name) {
        return -1;
    }
    if (x.name > y.name) {
        return 1;
    }
    return 0;
    }
);

console.log(team);
            
team.sort(function (x, y) {
    if (x.age < y.age) {
    return -1;
}
    if (x.age > y.age) {
    return 1;
}
    return 0;
}
);

console.log(team);


