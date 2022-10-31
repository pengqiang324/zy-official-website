/**
 * 批量引入图片
*/
export const getImage = (path) => {
    const modules = import.meta.globEager('./assets/*.png')
    console.log(modules)
    return modules[path].default
}

// 时间切割
export const splitTime = (unit, time, subfix='/') => {
    if (!time) return
    const splitHMS = time.split(' ') // 分离年月日-时分秒
    const YMDList = splitHMS[0].split(subfix)
    if(unit === 'year') {
        return YMDList[0]
    } else if (unit === 'month') {
        return YMDList[1]
    } else if (unit === 'day') {
        return YMDList[2]
    }
}