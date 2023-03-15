/**
 * @description: 拖动排序
 * @param {*} arr 数组
 * @param {*} sourceIndex 来源项
 * @param {*} targetIndex 目标项
 * @return {*}
 */
export const dragSort = (arr = [], sourceIndex, targetIndex) => {
  if (sourceIndex > targetIndex) {
    const obj = arr.splice(sourceIndex, 1)[0]

    arr.splice(targetIndex, 0, obj)
  } else {
    arr.splice(targetIndex + 1, 0, arr[sourceIndex])
    arr.splice(sourceIndex, 1)
  }
}
