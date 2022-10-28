/**
 * 批量引入图片
*/
export const getImage = (path) => {
    const modules = import.meta.globEager('./assets/*.png')
    console.log(modules)
    return modules[path].default
}