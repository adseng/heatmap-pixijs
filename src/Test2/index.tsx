import {useEffect, useRef} from 'react'
import * as PIXI from 'pixi.js';
import chroma from 'chroma-js';


// 创建颜色映射函数
const colorScale = chroma.scale(['#800000', '#ff0000', '#ffff00', '#00ffff', '#0000ff', '#000083'])

// 定义一个基于给定最小值、最大值和当前值生成RGB颜色的函数
function valueToColor(minValue: number, maxValue: number, currentValue: number) {
    // 确保输入值在范围内
    currentValue = Math.min(Math.max(currentValue, minValue), maxValue);
    // 归一化处理到0-1之间
    const normalizedValue = (currentValue - minValue) / (maxValue - minValue);
    return colorScale(normalizedValue).rgb()
}

// function getRanges(data: [number, number, number][]) {
//     // 最大
//     let xR = [data[0][0], data[0][0]]
//     let yR = [data[0][1], data[0][1]]
//     let vR = [data[0][2], data[0][2]]
//     for (let i = 0; i < data.length; i++) {
//         const [y, x, value] = data[i]
//         if (x < xR[0]) {
//             xR[0] = x
//         }
//         if (x > xR[1]) {
//             xR[1] = x
//         }
//         if (y < yR[0]) {
//             yR[0] = y
//         }
//         if (y > yR[1]) {
//             yR[1] = y
//         }
//         if (value < vR[0]) {
//             vR[0] = value
//         }
//         if (value > vR[1]) {
//             vR[1] = value
//         }
//     }
//
//     const width = xR[1] - xR[0] + 1;
//     const height = yR[1] - yR[0] + 1;
//
//     return {
//         xR,
//         yR,
//         vR,
//         width,
//         height
//     }
// }

// 为了创建PixiJS纹理，我们需要将颜色字符串转换为RGB或RGBA数值数组
// 但此处我们先简单展示颜色数组，实际转换过程较为复杂
function colorArrayToRGBAByteArray(data: number[][], width: number, height: number) {

    const byteArray = new Uint8Array(width * height * 4);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;

            // 假设我们只处理两种颜色并且已知它们的RGB值
            const value = data[y][x];
            const rgba = valueToColor(-3, 3, value)

            byteArray[index] = rgba[0]; // R
            byteArray[index + 1] = rgba[1]; // G
            byteArray[index + 2] = rgba[2]; // B
            byteArray[index + 3] = 255; // A
        }
    }

    return byteArray;
}

// 然后你可以按照之前提到的方法创建BaseTexture和Texture

function App() {

    const app = useRef<PIXI.Application<PIXI.ICanvas>>()

    async function drawHeatMap() {
        const response = await fetch('d2.json')
        const colorData = await response.json() as [number, number, number][];

        const width = colorData[0].length;
        const height = colorData.length;

        const pixelData = colorArrayToRGBAByteArray(colorData, width, height)
        console.log(pixelData)

        // 创建应用和画布
        app.current = new PIXI.Application({
            width: width,
            height: height,
            // backgroundColor: 0x1099bb
        });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        document.body.appendChild(app.current.view);

        // 创建 PIXI.BaseTexture
        const baseTexture = PIXI.BaseTexture.fromBuffer(new Uint8ClampedArray(pixelData.buffer), width, height);
        const heatMapTexture = PIXI.Texture.from(baseTexture); // 使用Uint8Array创建空白纹理

        // 更新纹理
        heatMapTexture.update();

        // 创建一个容器以包含热力图
        const container = new PIXI.Container();
        app.current.stage.addChild(container);

        const heatmapSprite = new PIXI.Sprite(heatMapTexture);
        heatmapSprite.width = width;
        heatmapSprite.height = height;
        container.addChild(heatmapSprite);
    }

    useEffect(() => {
        drawHeatMap().then()
    }, []);

    return (
        <>
            <button onClick={() => {
                // app.current!.view.width *= 0.5;
                // app.current!.view.height *= 0.5;
                //
                // app.current!.resize()

                app.current?.stage.scale.set(0.5, 0.5)
            }}>缩小
            </button>
            <button onClick={() => {
                // app.current!.view.width *= 2;
                // app.current!.view.height *= 2;
                // app.current!.resize()
                app.current?.stage.scale.set(1, 1)
            }}>
                放大
            </button>

            <div id={'container'}></div>

        </>
    )
}

export default App
