import React from 'react'
import {css} from 'emotion'
import map from 'lodash/map'
import icons from '../../src'

export default () => (
    <div>
        {map(icons, (icon, key) => {
            return (
                <div
                    key={key}
                    className={css`
                        width: 150px;
                        height: 190px;
                        display: inline-block;
                        margin: 10px;
                        border-radius: 12px;
                        overflow: hidden;
                    `}
                >
                    <div
                        className={css`
                        width: 150px;
                        height: 150px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        `}
                    >
                        {icon({width: 40})}
                    </div>
                    <div
                        className={css`
                                height: 40px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 14px;
                                font-weight: 700;
                            `}
                    >
                        {key}
                    </div>
                </div>
            )
        })}
    </div>
)