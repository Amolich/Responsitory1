<template>
    <canvas id="m_canvas" width="1349px" height="800px" style="z-index: -1; position: fixed; top: 0; left: 0; "> </canvas>
</template>


<script>
    function randomNum(minNum, maxNum)
    {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1+"", 10);
                // eslint-disable-next-line no-unreachable
                break;
            case 2:
                return parseInt(Math.random() * ( maxNum - minNum + 1 ) + minNum, 10);
                //或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
                // eslint-disable-next-line no-unreachable
                break;
            default:
                return 0;
                // eslint-disable-next-line no-unreachable
                break;
        }
    }


    function movepoint(x,y,Slope,dir)
    {
        this.x = x;
        this.y = y;
        this.Slope = Slope;
        this.dir = dir;
    }

    function allpoint_init()
    {
        var points = new Array(101);
        points[0] = new movepoint(0,0,0,0);
        for (let i = 1; i < 51; i++)
        {
            let x = randomNum(0,1349);
            let y = randomNum(0,1100);
            let dir = 0;
            if(randomNum(0,1) > 0.5)
                dir = 1;
            else
                dir = -1;
            let Slope =randomNum(-10,10);
            points[i] = new movepoint(x,y,Slope,dir);
        }
        for (let i = 51; i < 101; i++)
        {
            let x = randomNum(0,1349);
            let y = randomNum(0,1100);
            let dir = 0;
            if(randomNum(0,1) > 0.5)
                dir = 1;
            else
                dir = -1;
            let Slope =Math.random()*2-1;
            points[i] = new movepoint(x,y,Slope,dir);
        }
        return points;
    }

    function cadistance(p1,p2)
    {
        let temp = Math.sqrt((p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y));
        return temp;
    }
    function connectline(p1,p2,ctx)
    {
        let temp = cadistance(p1,p2);

        if(temp<100)
        {
            let amp = (1-temp/100)+0.2;
            ctx.strokeStyle = "rgba(0, 0, 0,"+amp+")";
            ctx.beginPath();
            ctx.moveTo(p1.x,p1.y);
            ctx.lineTo(p2.x,p2.y);
            ctx.stroke();
            return true;
        }
        return false;

    }
    function move(points,canvas)
    {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for (let i = 1; i < points.length; i++)
        {
            let x= points[i].x;
            let y= points[i].y;
            let dir= points[i].dir;
            let Slope= points[i].Slope;

            let temp = cadistance(points[i],points[0]);

            if(temp>100 && temp<110)
            {
                let dx = points[i].x - points[0].x;
                let dy = points[i].y - points[0].y;
                let temp1 = cadistance(points[i],points[0]);
                let x = points[0].x + 100/temp1*dx;
                let y = points[0].y + 100/temp1*dy;
                points[i].x -= (points[i].x - x);
                points[i].y -= (points[i].y - y);
            }
            else
            {
                if(points[i].x > 1349)
                    points[i].x = 0;
                else if(points[i].x < 0)
                    points[i].x = 1349;
                else
                {
                    points[i].x = x + dir*Math.sqrt(2/(1+Slope*Slope));
                }

                if(points[i].y > 1100)
                    points[i].y = 0;
                else if(points[i].y < 0)
                    points[i].y = 1100;
                else
                {
                    points[i].y = y + dir * Math.sqrt(2 / (1 + Slope * Slope)) * Slope;
                }
            }

            if(temp<110)
            {
                let amp = (1-temp/110)+0.2;
                ctx.strokeStyle = "rgba(0, 0, 0,"+amp+")";
                ctx.beginPath();
                ctx.moveTo(points[i].x,points[i].y);
                ctx.lineTo(points[0].x,points[0].y);
                ctx.stroke();
            }

            ctx.strokeStyle = 'rgb(0, 0, 0)';
            ctx.beginPath();
            ctx.arc(points[i].x,points[i].y,1,0,2*Math.PI);
            ctx.stroke();


        }
        for (let i = 1; i < points.length; i++)
            for (let j = i+1; j < points.length; j++)
            {
                connectline(points[i],points[j],ctx);
            }
    }

    function background_Init()
    {
        var canvas = document.getElementById('m_canvas');

        var points = allpoint_init();

        document.addEventListener('mousemove', function(e) {
            points[0].x = e.clientX;
            points[0].y = e.clientY;
        })

        setInterval(function (){
            move(points,canvas)
        },25);

    }
    export default {
        name: "background",
        mounted()
        {
            background_Init();

        }
    }
</script>

<style scoped>
#m_canvas
{
    z-index: -1;
}
</style>
