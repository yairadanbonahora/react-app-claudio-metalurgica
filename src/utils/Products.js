import imgBalancin from '../imgs/balancin.jpg';
import imgCortadoraFierros from '../imgs/cortadora-fierros.jpg';
import imgDiscos from '../imgs/discos.jpg';
import imgPlegadoraChapas from '../imgs/plegadora-chapas.JPEG';

const products = [
    {
    name: "Balancín", 
    img: imgBalancin,
    description: "Es una máquina",
    price: 500,
    stock: 10, 
    category: "maquinas",
    },

    {
    name: "Cortadora de fierros",
    img: imgCortadoraFierros,
    description: "Es una máquina",
    price: 30000,
    stock: 30,
    category: "maquinas",
    },

    {
    name: "Discos",
    img: imgDiscos,
    description: "Son productos",
    price: 1500,
    stock: 20,
    category: "productos",
    },

    {
    name: "Plegadora de chapas",
    img: imgPlegadoraChapas,
    description: "Es una máquina",
    price: 50000,
    stock: 15,
    category: "maquinas",
    }
];
export default products;