const fs = require('fs');


const testCtx = fs.readFileSync('test.txt', 'utf8');
const colors = []
const ts = testCtx.match(/-?\d+/g);
ts.forEach((t, i) => {
    if (t.length) {
        colors.push(t)
    }
})

let i = 0

try {
    const content = fs.readFileSync('data.txt', 'utf8');
    const res = []
    // 一行一行读取
    const rows = content.split('\n');
    console.log(rows)

    rows.forEach((row, y) => {
        // 逐一匹配出数字包含负数
        const cells = row.match(/-?\d+/g);
        if (Array.isArray(cells)) {
            cells.forEach((cell, x) => {
                let d = {
                    y,
                    x,
                    value: 0
                }
                if (cell.length && cell !== '0') {
                    d.value = Number(colors[i])
                    i++
                }
                res.push(d)
            })
        }

    })

    fs.writeFileSync('data.json', JSON.stringify(res));

} catch (err) {
    console.error(err);
}
