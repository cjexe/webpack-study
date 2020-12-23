import {Add} from './componentA'
import {BB} from './componentB'
import main from './main.css'
BB()
const result = Add(1,2)
setTimeout(() => {console.log(result)},3000)
// console.log(main)
