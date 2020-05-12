/**
 * 处理className数组,转换成className字符串
 *
 * - 把数组中是`undefined`,`null`,`''`的过滤掉
 *
 * @param array className数组
 */
export function filterClassNameAndToString(array: any[]): string {
  return array.filter(value => typeof value !== 'undefined' && value !== null && value !== '').join(' ')
}