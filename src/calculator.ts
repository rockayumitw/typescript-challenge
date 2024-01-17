/**
 * 將兩個數字相加
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
export function add(a: number, b: number): number | string {
    // 在此實現函式
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        return '應為數字'
    } else {
        return a + b
    }
}

/**
 * 將兩個數字相減
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
export function subtract(a: number, b: number): number | string {
    // 在此實現函式
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        return '應為數字'
    } else {
        return a - b
    }
}

/**
 * 將兩個數字相乘
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
export function multiply(a: number, b: number): number | string {
    // 在此實現函式
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        return '應為數字'
    } else {
        return a * b
    }
}

/**
 * 將兩個數字相除
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
export function divide(a: number, b: number): number | string {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return '請輸入數字';
    }

    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }

    return a / b;
}

/**
 * 實現加法函數，結果不能超過 100。
 * 
 * @param a 第一個加數。
 * @param b 第二個加數。
 * @returns 兩個數字的和，但不超過 100。
 */
export function add100(a: number, b: number): number {
    const sum = a + b;
    return sum > 100 ? 100 : sum;
  }