// const getData = (timeout, data) => {
//     const ok = true;
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (ok) {
//                 resolve (data);
//             } else {
//                 reject ('error');
//             }
//         }, timeout);
//     })
// };
// export default getData; 

// import products from './Products'
// import { dataBase } from '../firebase/Config';
// import { addDoc, collection } from 'firebase/firestore';

//subir productos al firestore database
// const uploadProducts = () => {
//     products.forEach( el => {
//         addDoc(collection(dataBase, "products"), el)
//     })
// };
// export default uploadProducts;