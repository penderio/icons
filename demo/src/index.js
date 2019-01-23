import React, {Component} from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'emotion'
import Example from './Example'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        background-color: #fff;
    }
`


class Demo extends Component {
    render() {
        return <div>
            <h1>Icons Demo</h1>
            <Example/>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
