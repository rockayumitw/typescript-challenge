/**
 * 任務：實作一個 async 函式 `fetchData`，該函式應該能夠從指定的 URL 取得資料。
 * 範例：fetchData('https://jsonplaceholder.typicode.com/todos/1') 應該回傳一個包含 id、title 等屬性的物件
 * @param url - 要取得資料的 URL
 * @returns - 回傳一個 Promise，該 Promise resolve 的值應該是從 URL 取得的資料
 */

export async function fetchData(url: string):  Promise<any>{
    return new Promise(async (resolve, reject) => {
        const r = await fetch(url)
        if (!r.ok) {
            reject(`Failed to fetch data. Status: ${r.status}`)
        } else {
            const data = await r.json();
            resolve(data)
        }
       
    })
}
