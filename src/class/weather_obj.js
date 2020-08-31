/* eslint-disable */
export function Wea_obj()
{
    this.forecast = new Array(5);
    for (let i = 0; i < 5; i++)
    {
        this.forecast[i] = {
            type: null,
            high : null,
            low : null,
            fengli : null,
            fengxiang : null,
        }
    }

    this.init = function (data)
    {
        for (let i = 0; i < 5; i++)
        {
            this.forecast[i].type = data.forecast[i].type;
            this.forecast[i].high = data.forecast[i].high.substring(3,6);
            this.forecast[i].low = data.forecast[i].low.substring(3,5);
            this.forecast[i].fengli = data.forecast[i].fengli;
            this.forecast[i].fengxiang = data.forecast[i].fengxiang;
        }
    }
}
