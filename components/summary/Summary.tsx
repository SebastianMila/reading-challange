import React from "react";
import {SummaryDTO} from "../../types/SummaryDTO";
import SummaryTable from "./SummaryTable";
import HistoryTable from "./HistoryTable";

export function Summary() {

    const summaryData: SummaryDTO[] = DATA;


    return <>
        <section>
            <h1>Podsumowanie</h1>
            <article>
                <SummaryTable summaryData={summaryData}/>
            </article>
            <article>
                WYKRES
            </article>
            <article>
                <HistoryTable summaryData={summaryData}/>
            </article>
        </section>
    </>
}

const DATA: SummaryDTO[] = [
    {
        reader: 'Sebastian', books: 1, pages: 65, data: [
            {day: '2020-01-01', pages: 5},
            {day: '2020-01-02', pages: 7},
            {day: '2020-01-03', pages: 9},
            {day: '2020-01-04', pages: 10},
            {day: '2020-01-05', pages: 0},
            {day: '2020-01-06', pages: 0},
            {day: '2020-01-07', pages: 0},
            {day: '2020-01-08', pages: 0},
            {day: '2020-01-09', pages: 5},
        ]
    },
    {
        reader: 'Natalia', books: 2, pages: 165, data: [
            {day: '2020-01-01', pages: 15},
            {day: '2020-01-02', pages: 27},
            {day: '2020-01-03', pages: 19},
            {day: '2020-01-04', pages: 20},
            {day: '2020-01-05', pages: 15},
            {day: '2020-01-06', pages: 0},
            {day: '2020-01-07', pages: 0},
            {day: '2020-01-08', pages: 20},
            {day: '2020-01-09', pages: 25},
        ]
    }
]