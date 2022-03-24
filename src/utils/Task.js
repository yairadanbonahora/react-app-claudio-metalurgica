const getData = (timeout, data) => {
    const ok = true;
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (ok) {
                resolve (data);
            } else {
                reject ('error');
            }
        }, timeout);
    })
};
export default getData; 