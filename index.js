import { group, sleep } from "k6";
import getUserLt from "./load-testing/get-user-lt.js";

export default function(){
    group('Load tests to Serverest api', () => {
        getUserLt() 
    })

    sleep(1)
}