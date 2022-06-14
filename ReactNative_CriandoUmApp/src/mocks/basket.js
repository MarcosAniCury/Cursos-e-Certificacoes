//Images
import logoFarm from '../../assets/logo.png';
import tomatoImage from '../../assets/frutas/Tomate.png';
import broccoliImage from '../../assets/frutas/Brócolis.png';
import potatoImage from '../../assets/frutas/Batata.png';
import cucumberImage from '../../assets/frutas/Pepino.png';
import pumpkinImage from '../../assets/frutas/Abóbora.png';

const basket = {
    header: {
        title: "Detalhe da cesta",
    },
    details: {
        name: "Cesta de Verduras",
        logo: logoFarm,
        farmName: "Jenny Jack Farm",
        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a cozinha",
        value: "R$ 40,00",
        button: "Comprar",
    },
    itens: {
        title: "Itens da cesta",
        listItens: [
            {
                name: "Tomate",
                image: tomatoImage
            },
            {
                name: "Brócolis",
                image: broccoliImage
            },
            {
                name: "Batata",
                image: potatoImage
            },
            {
                name: "Pepino",
                image: cucumberImage
            },
            {
                name: "Abóbora",
                image: pumpkinImage
            }
        ]
    },
}

export default basket;