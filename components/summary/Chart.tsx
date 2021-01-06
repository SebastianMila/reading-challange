import React, {useEffect} from "react";
import {init} from "echarts";
import {EChartsFullOption} from "echarts/lib/option";
import {SummaryDTO} from "../../types/SummaryDTO";

const COLORS = ['#F88', '#88F']
const LINE_COLORS = ['#F00', '#00F']

export default function Chart({summaryData}: { summaryData: SummaryDTO[] }) {

    const series = [];
    for (let i = 0; i < summaryData.length; i++) {
        const readerData = summaryData[i];
        const data = [];
        const sumData = [];
        let sum = 0;
        for (let j = 0; j < readerData.data.length; j++) {
            const datum = readerData.data[j];
            sum += datum.pages;
            data.push([datum.day, datum.pages]);
            sumData.push([datum.day, sum]);
        }
        series.push({
            name: readerData.reader,
            data: data,
            type: 'bar',
            itemStyle: {
                color: COLORS[i]
            }
        });
        series.push({
            name: readerData.reader + ' suma',
            data: sumData,
            type: 'line',
            yAxisIndex: 1,
            lineStyle: {
                color: LINE_COLORS[i]
            },
            itemStyle: {
                color: LINE_COLORS[i]
            }
        })
    }

    const option : EChartsFullOption = {
        animation: false,
        legend: {},
        xAxis: {
            type: 'time',
        },
        yAxis: [
            {
                name: 'Strony',
                type: 'value'
            },
            {
                name: 'Strony suma',
                type: 'value',
                splitLine: {show: false}
            }
        ],
        tooltip: {
            trigger: 'axis'
        },
        series: series
    };

    useEffect(() => {
        const chart = init(document.getElementById('chart'));
        // @ts-ignore
        chart.setOption(option, false, false);
    },[]);

    return <>
        <div id='chart' style={{width: '600px', height: '400px'}}/>
        </>
}