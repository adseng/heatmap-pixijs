import {useEffect, useState} from 'react'
import chroma from "chroma-js";
import Konva from "konva";

// 然后你可以按照之前提到的方法创建BaseTexture和Texture

function App() {

    const data = [
        [0, 22, 0, 21, 0, 20, 0, 19, 0, 18, 0, 17, 0, 16, 0],
        [15, 0, 14, 0, 13, 0, 12, 0, 11, 0, 10, 0, 9, 0, 8],
        [0, 7, 0, 6, 0, 5, 0, 4, 0, 3, 0, 2, 0, 1, 0]
    ]

    const scale = 50


    return (
        <div style={{display: 'inline-block', border: '1px solid red'}} onClick={() => {
            // const svg = document.querySelector('svg')
            // const container = document.createElement('div');
            // if (!svg) return
            // const stage = new Konva.Stage({
            //     container,
            //     width: svg.getBoundingClientRect().width,
            //     height: svg.getBoundingClientRect().height,
            // })
            // const layer = new Konva.Layer();
            // stage.add(layer)
            // new Konva.Image(svg)
        }}>
            <svg viewBox={`0 0 ${data[0].length * scale} ${data.length * scale}`} height={data.length * scale}
                 width={data[0].length * scale}>
                {data.map((row, y) => {
                    return row.map((col, x) => {
                        return <g>
                            {/*<rect*/}
                            {/*    key={`${x}::${y}`}*/}
                            {/*    x={(x) * scale}*/}
                            {/*    y={(y) * scale}*/}
                            {/*    textAnchor={'middle'}*/}
                            {/*    alignmentBaseline='middle'*/}
                            {/*    fontSize={20}*/}
                            {/*    fill={chroma.random().hex()}*/}
                            {/*    width={scale}*/}
                            {/*    height={scale}>*/}
                            {/*</rect>*/}
                            {col === 0 ? null : <text
                                key={`${x}::${y}`}
                                x={(x + 0.5) * scale}
                                y={(y + 0.5) * scale}
                                textAnchor={'middle'}
                                alignmentBaseline='middle'
                                fontSize={20}
                                fill={'#AAA'}
                            >{col}</text>}
                        </g>
                    })
                })}
            </svg>
        </div>
    )
}

export default App
