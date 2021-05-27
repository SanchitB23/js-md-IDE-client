import {useEffect, useRef, useState} from "react";
import * as esbuild from "esbuild-wasm";

const App = () => {
    const ref = useRef<any>()

    const [input, setInput] = useState('')
    const [code, setCode] = useState('')

    const onClick = async () => {
        if (!ref.current) return

        const result = await ref.current.transform(input, {
            loader: 'jsx',
            target: 'es2015'
        })
        setCode(result.code)
    }

    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: '/esbuild.wasm'
        })


    }
    useEffect(() => {
        startService()
    }, [])
    return (
        <div>
            <textarea value={input} onChange={event => setInput(event.target.value)}/>
            <div>
                <button onClick={onClick}>Submit</button>
            </div>
            <pre>{code}</pre>
        </div>
    )
}
export default App