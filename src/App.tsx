import {useEffect, useRef} from 'react'
import * as PIXI from 'pixi.js';
import { Chart } from '@antv/g2';

// 创建一个二维数组，里面包含随机颜色值（这里仅使用红色和蓝色简化）
function generateRandomColorArray(width: number, height: number) {
    const colors = ['red', 'blue'];
    const data = [];
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            const randomIndex = Math.floor(Math.random() * colors.length);
            row.push(colors[randomIndex]);
        }
        data.push(row);
    }
    return data;
}

// 定义宽高
const width = 800;
const height = 600;

// 生成二维数组
const colorData = generateRandomColorArray(width, height);

console.log(colorData);

// 为了创建PixiJS纹理，我们需要将颜色字符串转换为RGB或RGBA数值数组
// 但此处我们先简单展示颜色数组，实际转换过程较为复杂
function colorArrayToRGBAByteArray(colors: string[][], width: number, height: number) {
    const byteArray = new Uint8Array(width * height * 4);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;

            // 假设我们只处理两种颜色并且已知它们的RGB值
            const color = colors[y][x];
            const rgba = color === 'red' ? [255, 0, 0, 255] : [0, 0, 255, 255]; // 红色和蓝色

            byteArray[index] = rgba[0]; // R
            byteArray[index + 1] = rgba[1]; // G
            byteArray[index + 2] = rgba[2]; // B
            byteArray[index + 3] = rgba[3]; // A
        }
    }

    return byteArray;
}

// 转换颜色数组为纹理数据
const pixelData = colorArrayToRGBAByteArray(colorData, width, height);

// 然后你可以按照之前提到的方法创建BaseTexture和Texture

function App() {

    const app = useRef<PIXI.Application<PIXI.ICanvas>>()

    useEffect(() => {
        // 创建应用和画布
        app.current = new PIXI.Application({
            width: width  + 200,
            height: height + 200,
            backgroundColor: 0x1099bb
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

    }, []);

    useEffect(() => {
        const chart = new Chart({
            container: 'container',
            autoFit: true,
            padding: 0,
        });

        chart.axis(false);

        chart
            .heatmap()
            .data({
                type: 'fetch',
                value: '/data.json',
            })
            .encode('x', 'x')
            .encode('y', 'y')
            .encode('color', 'value')
            .style('opacity', 0)
            .tooltip(false);

        chart.render();
    }, []);

    return (
        <>
            <button onClick={() => {
                app.current!.view.width *= 0.5;
                app.current!.view.height *= 0.5;
                app.current!.resize()
            }}>缩小</button>
            <button onClick={() => {
                app.current!.view.width *= 2;
                app.current!.view.height *= 2;
                app.current!.resize()
            }}>
                放大
            </button>

            <div id={'container'}></div>

        </>
    )
}

export default App
