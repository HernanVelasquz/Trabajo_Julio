const Array1 = [7, 3, 6, 0, 4, 5, 10];
const Array2 = [17, 23, 16, 0, 41, 52, 102];

let max = Array1[0];
let min = Array2[0];

const contrarNumber = () => {
    const Array1 = [7, 3, 6, 0, 4, 5, 10];
    const Array2 = [17, 23, 16, 0, 41, 52, 102];

    let max = Array1[0];
    let min = Array2[0];

    for( let i = 0; i < Array1.length; i++){
        max = (Array1[i] > max) ? Array1[i] : max;
    }

    for( let i = 0; i < Array2.length; i++){
        min = (Array2[i] < min) ? Array2[i] : min;
    }
}