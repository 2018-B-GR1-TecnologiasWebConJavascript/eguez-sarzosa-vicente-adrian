// 02-observables.ts

declare var require: any;

const rxjs = require('rxjs');
const map = require('rxjs/operators').map;

const numeros$ = rxjs.of(
    1,
    "Adrian",
    true,
    {nombre: 'Adrian'},
    [1, 2, 3],
    new Date()
);

numeros$
    .pipe(
        map(
            (valorActual) => {
                return {
                    data: valorActual
                };
            }
        )
    )
    .subscribe(
        (ok) => {
            console.log('En ok', ok);
        },
        (error) => {
            console.log('Error', error);
        },
        () => { // complete
            console.log('Completado');
        }
    );





