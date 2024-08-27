import {useEffect, useRef} from 'react'
import * as PIXI from 'pixi.js';
import chroma from 'chroma-js';


// 创建颜色映射函数
const colorScale = chroma.scale(['#800000', '#ff0000', '#ffff00', '#00ffff', '#0000ff', '#000083'].reverse())

// 定义一个基于给定最小值、最大值和当前值生成RGB颜色的函数
function valueToColor(minValue: number, maxValue: number, currentValue: number) {
    // 确保输入值在范围内
    currentValue = Math.min(Math.max(currentValue, minValue), maxValue);
    // 归一化处理到0-1之间
    const normalizedValue = (currentValue - minValue) / (maxValue - minValue);
    return colorScale(normalizedValue).rgb()
}

// 为了创建PixiJS纹理，我们需要将颜色字符串转换为RGB或RGBA数值数组
// 但此处我们先简单展示颜色数组，实际转换过程较为复杂
function colorArrayToRGBAByteArray(data: number[][], width: number, height: number) {

    const byteArray = new Uint8Array(width * height * 4);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;

            // 假设我们只处理两种颜色并且已知它们的RGB值
            const value = data[y][x];
            const rgba = valueToColor(-1, 1, value)

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

        const canvasElement = document.createElement('canvas');
        // 创建应用和画布
        app.current = new PIXI.Application({
            view: canvasElement,
            width: width,
            height: height,
            // backgroundColor: 0x1099bb
            // 像素比
            // resolution: window.devicePixelRatio || 1,
        });

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

        // app.current?.stage.scale.set(0.2, 1)

        // app.current?.stage.setTransform(undefined, undefined,0.2,undefined,-Math.PI/2)

        app.current?.render()

        const url = canvasElement.toDataURL('image/png');
        const imageElement = document.createElement('img');
        imageElement.style.transform = 'rotate(-90deg) scale(0.2, 0.8)';

        imageElement.src = url
        // imageElement.style.width = '500px'
        document.body.appendChild(imageElement)


    }

    useEffect(() => {
        drawHeatMap().then()
    }, []);

    return (
        <>
            {/*<canvas id={'container'}*/}
            {/*        // style={{scale: '0.2 1', rotate: '-90deg', translate: '-900px 0px'}}*/}
            {/*></canvas>*/}
        </>
    )
}

export default App
