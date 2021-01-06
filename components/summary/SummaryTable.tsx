import {SummaryDTO} from "../../types/SummaryDTO";
import React from "react";

export default function SummaryTable({summaryData}: { summaryData: SummaryDTO[] }) {
    const headerRow = [];
    const sumRow = [];
    const booksSumRow = [];
    for (const datum of summaryData) {
        headerRow.push(<th key={datum.reader}><span className='p-column-title' style={{width: '200px'}}>{datum.reader}</span></th>);
        sumRow.push(<td key={datum.pages} style={{width: '200px'}}>{datum.pages}</td>);
        booksSumRow.push(<td key={datum.books} style={{width: '200px'}}>{datum.books}</td>);
    }
    return <div className='p-datatable p-component p-datatable-sm'>
        <div className='p-datatable-wrapper'>
            <table style={{width: 'auto'}}>
                <thead className='p-datatable-thead'>
                <tr>
                    <th style={{width: '160px'}}></th>
                    {headerRow}
                </tr>
                </thead>
                <tbody className='p-datatable-tbody'>
                <tr>
                    <td style={{width: '160px'}}>Książek</td>
                    {booksSumRow}
                </tr>
                <tr>
                    <td style={{width: '160px'}}>Stron</td>
                    {sumRow}
                </tr>
                </tbody>
            </table>
        </div>
    </div>;
}