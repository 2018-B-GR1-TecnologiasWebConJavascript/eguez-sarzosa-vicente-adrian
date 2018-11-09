// 02-observables.ts
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const numeros$ = rxjs.of(1, "Adrian", true, { nombre: 'Adrian' }, [1, 2, 3], new Date());
numeros$
    .pipe(map((valorActual) => {
    return {
        data: valorActual
    };
}))
    .subscribe((ok) => {
    console.log('En ok', ok);
}, (error) => {
    console.log('Error', error);
}, () => {
    console.log('Completado');
});
