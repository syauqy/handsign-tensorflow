export const drawRect = (detection, ctx) => {
    detection.forEach(prediction =>{
        //get prediction results
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        //set styling

        const color = '#'+ Math.floor(Math.random()*16777215);
        ctx.strokeStyle = color
        ctx.font = '18px Roboto'
        ctx.fillStyle = color

        //draw rectangels and text
        ctx.beginPath()
        ctx.fillText(text, x,y)
        ctx.rect(x,y, width, height)
        ctx.stroke()
    })
}