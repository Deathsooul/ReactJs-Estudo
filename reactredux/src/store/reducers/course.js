const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1, title: 'Iniciando com React', lessons: [
                { id: 1, title: 'primeira aula' },
                { id: 2, title: 'segunda aula' },
            ],
        },
        {
            id: 2, title: 'Aprendendo Redux', lessons: [
                { id: 3, title: 'terceira aula' },
                { id: 4, title: 'quarta aula' },

            ]
        }
    ]
};

export default function course(state = INITIAL_STATE, action) {

    if (action.type === 'TOGGLE_LESSON') {
        return {
            ...state, activeLesson: action.lesson, activeModule: action.module
        };
    }

    return state;
}