export const Conway = {
    name: "Conway",
    survival: [2, 3],
    birth: [3],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const TwoByTwo = {
    name: "2x2",
    survival: [1, 2, 5],
    birth: [3, 6],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const ThirtyFourLife = {
    name: "34 Life",
    survival: [3, 4],
    birth: [3, 4],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Amoeba = {
    name: "Amoeba",
    survival: [1, 3, 5, 8],
    birth: [3, 5, 7],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Assimilation = {
    name: "Assimilation",
    survival: [4, 5, 6, 7],
    birth: [3, 4, 5],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Coagulations = {
    name: "Coagulations",
    survival: [2, 3, 5, 6, 7, 8],
    birth: [3, 7, 8],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Coral = {
    name: "Coral",
    survival: [4, 5, 6, 7, 8],
    birth: [3],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const DayAndNight = {
    name: "Day & Night",
    survival: [3, 4, 6, 7, 8],
    birth: [3, 6, 7, 8],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Diamoeba = {
    name: "Diamoeba",
    survival: [5, 6, 7, 8],
    birth: [3, 5, 6, 7, 8],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Flakes = {
    name: "Flakes",
    survival: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    birth: [3],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Gnarl = {
    name: "Gnarl",
    survival: [1],
    birth: [1],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const HighLife = {
    name: "High Life",
    survival: [2, 3],
    birth: [3, 6],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const LongLife = {
    name: "Long Life",
    survival: [5],
    birth: [3, 4, 5],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Maze = {
    name: "Maze",
    survival: [1, 2, 3, 4, 5],
    birth: [3],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Mazectric = {
    name: "Mazectric",
    survival: [1, 2, 3, 4],
    birth: [3],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Serviettes = {
    name: "Serviettes",
    survival: [],
    birth: [2, 3, 4],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const WalledCities = {
    name: "Walled Cities",
    survival: [],
    birth: [2, 3, 4],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const PresetRules = [
    Conway, TwoByTwo, ThirtyFourLife, Amoeba, Assimilation, Coagulations, Coral, DayAndNight, Flakes, Gnarl, HighLife, LongLife,
    Maze, Mazectric, Serviettes, WalledCities
];

export default PresetRules;