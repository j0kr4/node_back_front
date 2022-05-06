import { createContext, useCallBack, useState } from "react"
import { useCallback } from "react/cjs/react.production.min"

const AppContext = createContext({})

const initialState = {
    entries: [
        { title: "Mon premier article", content: "Sustentantur frumenti ferina et universis lactisque vini universis frumenti copia per alites est et ignorantes possint siquae per caro aucupium possint multiplices sustentantur et et sustentantur et et lactisque mos copia capi alites sustentantur et et caro et et lactisque sustentantur et possint possint herbae caro siquae vini et herbae caro siquae aucupium penitus usum abundans penitus caro lactisque est frumenti siquae qua ignorantes plerosque ferina sustentantur frumenti herbae ignorantes et plerosque ferina sustentantur ignorantes siquae per usum abundans penitus mos penitus ferina vidimus abundans et universis usum capi lactisque capi qua caro sustentantur et et aucupium abundans ferina mos.", createdAt: "01/04/2020"}
    ]
}

export const AppContextProvider = (props) => {
    const [state, setState] = useState(initialState)
    const addEntry = useCallback(({ title, content, createdAt }) => {
        setState((currentState) => ({
            ...currentState,
            entries: [...currentState.entries, { title, content, createdAt }],
        }))
    }, [])

    return (
        <AppContext.Provider
        {...props}
        value={{ entries: state.entries, addEntry }}
        />
    )
}

export default AppContext