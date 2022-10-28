// 批量导入图片
export const getImage = (suffix) => {
    const modules = import.meta.globEager('./images/*.png');
    return modules[`./images/${suffix}.png`].default
}
