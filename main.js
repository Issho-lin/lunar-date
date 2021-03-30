import { GetLunarDay } from './src/tool'

/**
 * 获取当前农历日期
 * @param {Boolean} withYear 是否显示农历年
 */
 export const lunarCalendarDate = withYear => {
    let D = new Date()
    let yy = D.getFullYear()
    let mm = D.getMonth() + 1
    let dd = D.getDate()
    // let ww = D.getDay()
    // let ss = parseInt(D.getTime() / 1000)
    if (yy < 100) yy = '19' + yy
    return GetLunarDay(yy, mm, dd, withYear)
}


