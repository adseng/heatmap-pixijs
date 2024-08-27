import {useEffect, useRef} from 'react'
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

// 然后你可以按照之前提到的方法创建BaseTexture和Texture

function App() {

    async function drawHeatMap() {
        const response = await fetch('d2.json')
        const colorData = await response.json() as number[][];

        const width = colorData.length;
        const height = colorData[0].length;

        console.log(width, height)

        const canvasElement = document.createElement('canvas');
        canvasElement.width = width;
        canvasElement.height = height;
        const context = canvasElement.getContext('2d')

        if (context === null) return

        for (let x = 0; x < colorData.length; x++) {
            for (let y = 0; y < colorData[0].length; y++) {
                const color = valueToColor(-3,  3, colorData[x][y]);
                context.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
                context.fillRect(x, y, 1, 1);
            }
        }

        canvasElement.style.transform = 'scale(1, -0.2)';

        document.querySelector('#container')!.appendChild(canvasElement)

    }

    useEffect(() => {
        drawHeatMap().then()
    }, []);

    return (
        <>
            <div id={'container'}></div>
        </>
    )
}

export default App