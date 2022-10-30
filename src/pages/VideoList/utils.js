// 批量导入视频
export const getVideo = (suffix) => {
    const modules = import.meta.globEager('./media/*.mp4');
    return modules[`./media/${suffix}.mp4`].default
}