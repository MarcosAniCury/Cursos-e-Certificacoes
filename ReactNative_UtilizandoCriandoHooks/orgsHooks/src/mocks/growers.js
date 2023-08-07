import green from "../assets/produtores/green.png";
import grow from "../assets/produtores/grow.png";
import jennyJack from "../assets/produtores/jenny-jack.png";
import potager from "../assets/produtores/potager.png";
import salad from "../assets/produtores/salad.png";


const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const growers = {
    title: "Cultivadores",
    list: [
        {
            name: "Green",
            image: green,
            distance: generateRandomNumber(1, 500),
            stars: generateRandomNumber(1, 5)
        },
        {
            name: "Salad",
            image: salad,
            distance: generateRandomNumber(1, 500),
            stars: generateRandomNumber(1, 5)
        },
        {
            name: "jenny Jack Farm",
            image: jennyJack,
            distance: generateRandomNumber(1, 500),
            stars: generateRandomNumber(1, 5)
        },
        {
            name: "Grow",
            image: grow,
            distance: generateRandomNumber(1, 500),
            stars: generateRandomNumber(1, 5)
        },
        {
            name: "Potager",
            image: potager,
            distance: generateRandomNumber(1, 500),
            stars: generateRandomNumber(1, 5)
        }
    ]
};

export default growers;