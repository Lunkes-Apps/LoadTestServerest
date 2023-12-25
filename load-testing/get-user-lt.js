import { check, fail } from "k6"
import http from "k6/http"
import { Trend, Rate } from "k6/metrics"


export let GetUserTimeDuration = new Trend('get_user_time_duration')
export let GetUserFailRate = new Rate('get_user_fail_rate')

export default () => {
    let res = http.get('https://serverest.dev/usuarios')

    GetUserTimeDuration.add(res.timings.duration)
    GetUserFailRate.add(res.status == 0 || res.status > 399)


    if (!check(res, {
        "response code was 200": (res) => res.status == 200
    })) {
        fail('it is statuscode not 200');
    }
}