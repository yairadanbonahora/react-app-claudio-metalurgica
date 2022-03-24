import imgBalancin from '../components/imgs/balancin.jpg';
import imgCortadoraFierros from '../components/imgs/cortadora-fierros.jpg';
import imgDiscos from '../components/imgs/discos.jpg';
import imgPlegadoraChapas from '../components/imgs/plegadora-chapas.JPEG';

const products = [
    {id: 1,
    name: "Balancín", 
    img: imgBalancin,
    description: "Es una máquina",
    price: 500,
    stock: 10, 
    },

    {id: 2,
    name: "Cortadora de fierros",
    img: imgCortadoraFierros,
    description: "Es una máquina",
    price: 30000,
    stock: 30,
    },

    {id: 3,
    name: "Discos",
    img: imgDiscos,
    description: "Son productos",
    price: 1500,
    stock: 20,
    },

    {id: 4,
    name: "Plegadora de chapas",
    img: imgPlegadoraChapas,
    description: "Es una máquina",
    price: 50000,
    stock: 15,
    }
];
export default products;