import React, {Component} from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'emotion'
import {css} from 'emotion'
import map from 'lodash/map'
import icons from '../../src'

import {Canvas, Heading, Paragraph} from '@cmds/demo-utils'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

export const Box = ({title, children}) => (
    <div
        className={css`
            display: inline-block;

        `}
    >
        <div
            className={css`
            background: #fff;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12);
    border-radius: 5px;
    margin: 15px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    &:hover {
        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.12)
    }
        `}
        >
            <div
                className={css`
                display: flex;
                align-items: center;
                justify-content: center;
                width: 150px;
                height: 150px;
                padding: 10px;
            `}
            >
                {children}
            </div>
        </div>
        <div
            className={css`
                color: #999;
                font-size: 12px;
                margin-top: 10px;
                margin-bottom: 15px;
                text-align: center;
                width: 100%;
            `}
        >
            {title}
        </div>
    </div>
)

class Demo extends Component {
    render() {
        return (
            <Canvas>
                <div
                    className={css`
                        margin: -15px;
                    `}
                >
                    {map(icons, (icon, key) => {
                        return (
                            <Box
                                key={key}
                                title={key}
                            >
                                {icon({width: 60})}
                            </Box>
                        )
                    })}
                </div>
            </Canvas>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
