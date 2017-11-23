// @ts-check

import { add1 } from "./View1";
import { add2 } from "./View2";
import { add3 } from "./View3";

function add6(x) {
    return add1(add2(add3(x)));
}

console.log(add6(4));
