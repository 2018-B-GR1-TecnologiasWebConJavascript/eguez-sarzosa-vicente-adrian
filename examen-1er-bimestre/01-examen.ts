declare var require: NodeRequire;

const arregloAbecedario = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    'u',
    't',
    'v',
    'w',
    'x',
    'y',
    'z',
];


const fs = require('fs');

function leerArchivo() {
    fs.readFile(
        './data.json',
        'utf-8',
        (error, datosLeidos) => {
            if (error) {
                console.error(error);
            } else {
                const arregloPokemon = JSON.parse(datosLeidos);
                console.log(arregloPokemon);

                const stats = buscarStats(arregloPokemon);
                const types = buscarTypes(arregloPokemon);
                console.log(JSON.stringify(buscarTodosLosAtributos(stats, arregloPokemon)));

                console.log(filtrarPorAbecedario(arregloAbecedario, arregloPokemon));

                console.log(clasificarPorAbilities(types, arregloPokemon));
            }
        }
    );
}

leerArchivo();


interface Pokemon {
    'abilities': AbilityObject[],
    'base_experience': number,
    'forms': Forms[],
    'game_indices': any[],
    'height': number,
    'held_items': any[],
    'id': number,
    'is_default': boolean,
    'location_area_encounters': string,
    'moves': MoveObjeto[],
    'name': string,
    'order': number,
    'species': any,
    'sprites': any,
    'stats': StatObjeto[],
    'types': TypeObjeto[],
    'weight': number

}

interface Ability {
    'name': string;
    'url': string;
}

interface AbilityObject {
    'ability': Ability;
    'is_hidden': boolean;
    'slot': number;

}

interface Forms {
    'name': string,
    'url': string
}

interface Move {
    'name': 'swords-dance';
    'url': 'https://pokeapi.co/api/v2/move/14/';
}

interface MoveObjeto {
    'move': Move,
    'version_group_details': any[]
}

interface Stat {
    'name': string,
    'url': string
}

interface StatObjeto {
    'stat': Stat
    'base_stat': number,
    'effort': number,
}

interface Type {
    'name': string,
    'url': string
}

interface TypeObjeto {
    'slot': number,
    'type': Type
}

function buscarTypes(arreglo: Pokemon[]) {
    const respuestaTypes = [];
    arreglo
        .forEach(
            (pokemon) => {
                pokemon
                    .types
                    .forEach(
                        (type) => {
                            respuestaTypes.push({
                                tipo: type.type.name
                            });
                        }
                    );
            }
        );
    return respuestaTypes;
}

function buscarAbilities(arreglo: Pokemon[]) {
    const respuestaAbilities = [];
    return arreglo
        .forEach(
            (pokemon) => {
                pokemon
                    .abilities
                    .forEach(
                        (ability) => {
                            respuestaAbilities.push({
                                nombre: ability.ability.name
                            });
                        }
                    );
            }
        );
}

function buscarMoves(arreglo: Pokemon[]) {
    const respuestaMoves = [];
    return arreglo
        .forEach(
            (pokemon) => {
                pokemon
                    .moves
                    .forEach(
                        (move) => {
                            respuestaMoves.push({
                                nombre: move.move.name
                            });
                        }
                    );
            }
        );
}

function clasificarPorTypes(arregloTypes: TipoPokemon[], arreglo: Pokemon[]) {

    const arregloRespuesta: RespuestaFiltrado[] = [];
    arregloTypes
        .forEach(
            (tipo) => { // electrico
                const arregloFiltrado: Pokemon[] = arreglo  // electrico
                    .filter(
                        (pokemon) => {
                            return pokemon.types.some(
                                (type) => {
                                    return type.type.name === tipo.nombre;
                                }
                            );
                        }
                    );
                arregloRespuesta.push({
                    nombre: tipo.nombre,
                    pokemons: arregloFiltrado
                });
            }
        );
}

function clasificarPorAbilities(arregloTypes: TipoPokemon[], arreglo: Pokemon[]) {

    const arregloRespuesta: RespuestaFiltrado[] = [];
    arregloTypes
        .forEach(
            (tipo) => { // electrico
                const arregloFiltrado: Pokemon[] = arreglo  // electrico
                    .filter(
                        (pokemon) => {
                            return pokemon.abilities.some(
                                (ability) => {
                                    return ability.ability.name === tipo.nombre;
                                }
                            );
                        }
                    );
                arregloRespuesta.push({
                    nombre: tipo.nombre,
                    pokemons: arregloFiltrado
                });
            }
        );
    return arregloRespuesta;
}

function clasificarPorMove(arregloTypes: TipoPokemon[], arreglo: Pokemon[]) {

    const arregloRespuesta: RespuestaFiltrado[] = [];
    arregloTypes
        .forEach(
            (tipo) => { // electrico
                const arregloFiltrado: Pokemon[] = arreglo  // electrico
                    .filter(
                        (pokemon) => {
                            return pokemon.moves.some(
                                (move) => {
                                    return move.move.name === tipo.nombre;
                                }
                            );
                        }
                    );
                arregloRespuesta.push({
                    nombre: tipo.nombre,
                    pokemons: arregloFiltrado
                });
            }
        );
}

function filtrarPorAbecedario(arregloAbecedario: string[], arreglo: Pokemon[]) {

    return arregloAbecedario
        .map(
            (letra) => {
                const existeAlguno = arreglo.some(
                    (pokemon) => {
                        return pokemon.name.slice(0, 1).toUpperCase() === letra.toUpperCase();
                    }
                );
                const objeto: any = {};
                objeto[letra] = existeAlguno;
                return objeto;
            }
        );
}


function buscarStats(arreglo: Pokemon[]) {
    const respuestaStats = [];
    arreglo
        .forEach(
            (pokemon) => {
                pokemon
                    .stats
                    .forEach(
                        (stat) => {
                            respuestaStats.push({
                                nombre: stat.stat.name
                            });
                        }
                    );
            }
        );
    return respuestaStats;
}


function buscarTodosLosAtributos(arregloStats: TipoPokemon[], arreglo: Pokemon[]) {

    const respuesta = {};

    arregloStats
        .forEach(
            (stat) => { // Speed
                const totalStatNumero = arreglo
                    .reduce(
                        (valorAcumulado, pokemon) => {
                            const statNecesitado: StatObjeto = pokemon.stats  // Speed
                                .find(
                                    (statHijos) => {
                                        return statHijos.stat.name === stat.nombre;
                                    }
                                );
                            return valorAcumulado + statNecesitado.base_stat;
                        },
                        0
                    );
                respuesta[stat.nombre + 'Total'] = totalStatNumero;
            }
        );
    return respuesta;
}

function tienenHeldItems(arreglo: Pokemon[]) {
    return arreglo.every((pokemon) => pokemon.held_items.length > 1);
}


interface TipoPokemon {
    nombre: string
}


interface RespuestaFiltrado {
    nombre: string;
    pokemons: Pokemon[];
}

