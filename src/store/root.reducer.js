const initialState = {
    isLoading: false,
}

export default function TestReducer(state = initialState, action) {
    switch (action.type) {
        case "TEST":
            return (
                {isLoading: true}
            )
        default:
            return state;

    }
}
