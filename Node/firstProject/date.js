import {DateTime} from 'luxon';

export function get30DaysAgo() {
    return DateTime.now()
        .setZone("America/New_York")
        .minus({ days: 30 })
        .endOf("day")
        .toISO();
}

//return DateTime.now().setZone("America/New_York").minus({ days: 30 }).endOf("day").toISO();



export function get6MonthsAgo () {
    return DateTime.now().setZone("America/New_York").minus({ months: 6 }).endOf("day").toISO();
}

export function get1YearAgo () {
    return DateTime.now().setZone("America/New_York").minus({ year: 1}).endOf("day").toISO();
}
