import React from "react";
import {SummaryDTO} from "../../types/SummaryDTO";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import moment from "moment";

export default function HistoryTable({summaryData}: { summaryData: SummaryDTO[] }) {

    const readers = summaryData.map(d => <Column key={d.reader} field={d.reader} header={d.reader}/>);

    let firstDay = null;
    let lastDay = null;
    let day;
    for (let i = 0; i < summaryData.length; i++) {
        for (let j = 0; j < summaryData[i].data.length; j++) {
            day = summaryData[i].data[j].day;
            if(firstDay === null || day.localeCompare(firstDay) < 0) {
                firstDay = day;
            }
            if(lastDay === null || day.localeCompare(lastDay) > 0) {
                lastDay = day;
            }
        }
    }

    const data = [];
    if(firstDay !== null) {
        let day = moment(firstDay);
        const lastMoment = moment(lastDay);
        while (!day.isAfter(lastMoment)) {
            let entry = {};
            const currentDay = day.format('yy-MM-DD');
            entry['day'] = currentDay;
            for (let i = 0; i < summaryData.length; i++) {
                const reader = summaryData[i].reader;
                const dayValue = summaryData[i].data.filter(d => d.day === currentDay);
                entry[reader] = dayValue ? dayValue[0].pages : 0;
            }
            data.push(entry);
            day = day.add(1, 'day');
        }
    }

    return <DataTable value={data} paginator rows={7} className='p-datatable-sm'>
        <Column field='day' header='Data'/>
        {readers}
    </DataTable>
}