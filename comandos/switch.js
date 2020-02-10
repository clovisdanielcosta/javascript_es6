const fruit = 'mamão';

switch (fruit) {
    case 'banana':
        console.log('R$ 3,00 / Kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00 / Kg'); 
        break;       
    default:
        console.log('Produto não existe no estoque.');
        break;
}