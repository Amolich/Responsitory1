/* eslint-disable */
/**
 * 去掉字符串头尾空格
 * @param str 传入的字符串值
 * @author lqy
 * @since 2015-08-21
 */
export function trim(str) {
    if(str == null || typeof str == "undefined"){
        return "";
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 是否为Null
 * @param object
 * @returns {Boolean}
 */
export function isNull(object){
    if(object == null || typeof object == "undefined"){
        return true;
    }
    return false;
}

/**
 * 是否为空字符串，有空格不是空字符串
 * @param str
 * @returns {Boolean}
 */
export function isEmpty(str){
    if(str == null || typeof str == "undefined" ||
        str == ""){
        return true;
    }
    return false;
}

/**
 * 是否为空字符串，全空格也是空字符串
 * @param str
 * @returns {Boolean}
 */
export function isBlank(str){
    if(str == null || typeof str == "undefined" ||
        str == "" || trim(str) == ""){
        return true;
    }
    return false;
}
