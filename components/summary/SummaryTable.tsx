import {SummaryDTO} from "../../types/SummaryDTO";
import React from "react";

export default function SummaryTable({summaryData}: { summaryData: SummaryDTO[] }) {
    const headerRow = [];
    const sumRow = [];
    const booksSumRow = [];
    for (const datum of summaryData) {
        headerRow.push(<th key={datum.reader}>{datum.reader}</th>);
        sumRow.push(<td key={datum.pages}>{datum.pages}</td>);
        booksSumRow.push(<td key={datum.books}>{datum.books}</td>);
    }
    return <table>
        <thead>
        <tr>
            <th></th>
            {headerRow}
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Książek</td>
            {booksSumRow}
        </tr>
        <tr>
            <td>Stron</td>
            {sumRow}
        </tr>
        </tbody>
    </table>;
}