init()

function init() {
    // DOGS
    if (!localStorage.dogs) {
        const dogs = [
            {
                "raca": "Bulldoge Frances",
                "imagem": "img\\BulldogeFrances.jpg",
                "link": "https://pt.wikipedia.org/wiki/Border_collie"
            },
            {
                "raca": "Bull Terrier",
                "imagem": "img\\BullTerrier.jpg",
                "link": ""
            },
            {
                "raca": "Doberman",
                "imagem": "img\\Doberman.jpg",
                "link": ""
            },
            {
                "raca": "Golden Retriever",
                "imagem": "img\\GoldenRetriever.jpg",
                "link": ""
            },
            {
                "raca": "Pastor Alemão",
                "imagem": "img\\PastorAlemao.jpg",
                "link": ""
            },
            {
                "raca": "Pastor Australiano",
                "imagem": "img\\PastorAustraliano.jpg",
                "link": ""
            }
        ]

        localStorage.setItem("dogs", JSON.stringify(dogs));

    }
}