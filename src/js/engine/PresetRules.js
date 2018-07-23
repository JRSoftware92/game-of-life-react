export const Conway = {
    value: "conway",
    label: "Conway",
    survival: [2, 3],
    birth: [3],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const TwoByTwo = {
    value: "2x2",
    label: "2x2",
    survival: [1, 2, 5],
    birth: [3, 6],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const ThirtyFourLife = {
    value: "34Life",
    label: "34 Life",
    survival: [3, 4],
    birth: [3, 4],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Amoeba = {
    value: "amoeba",
    label: "Amoeba",
    survival: [1, 3, 5, 8],
    birth: [3, 5, 7],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Assimilation = {
    value: "assimilation",
    label: "Assimilation",
    survival: [4, 5, 6, 7],
    birth: [3, 4, 5],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Coagulations = {
    value: "coagulations",
    label: "Coagulations",
    survival: [2, 3, 5, 6, 7, 8],
    birth: [3, 7, 8],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Coral = {
    value: "coral",
    label: "Coral",
    survival: [4, 5, 6, 7, 8],
    birth: [3],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const DayAndNight = {
    value: "dayAndNight",
    label: "Day & Night",
    survival: [3, 4, 6, 7, 8],
    birth: [3, 6, 7, 8],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Diamoeba = {
    value: "diamoeba",
    label: "Diamoeba",
    survival: [5, 6, 7, 8],
    birth: [3, 5, 6, 7, 8],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Flakes = {
    value: "flakes",
    label: "Flakes",
    survival: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    birth: [3],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Gnarl = {
    value: "gnarl",
    label: "Gnarl",
    survival: [1],
    birth: [1],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const HighLife = {
    value: "highLife",
    label: "High Life",
    survival: [2, 3],
    birth: [3, 6],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const LongLife = {
    value: "longLife",
    label: "Long Life",
    survival: [5],
    birth: [3, 4, 5],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Maze = {
    value: "maze",
    label: "Maze",
    survival: [1, 2, 3, 4, 5],
    birth: [3],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Mazectric = {
    value: "mazectric",
    label: "Mazectric",
    survival: [1, 2, 3, 4],
    birth: [3],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const Serviettes = {
    value: "serviettes",
    label: "Serviettes",
    survival: [],
    birth: [2, 3, 4],
    weights: [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]
}

export const WalledCities = {
    value: "walledCities",
    label: "Walled Cities",
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