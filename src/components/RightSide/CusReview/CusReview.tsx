import Chart from 'react-apexcharts';

const CusReview = () => {
    const data :any = {
        series : [
            {name : "Visitors",
            data : [10, 40, 30, 50, 20, 80, 100]},
        ],
        options: {
            chart: {
              type: "area",
              height: "auto",
            },
            dropShadow: {
              enable: false,
              enableOnSeries: undefined,
              top: 0,
              left: 0,
              blur: 3,
              color: "#000",
              opacity: 0.35,
            },
            fill: {
              colors: ["#fff"],
              type: "gradient",
            },
            dataLables: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              color: ["#fff"],
            },
            tooltip: {
              x: {
                format: "dd/MM/yy HH:mm",
              },
            },
            grid: {
              show: true,
            },
            xaxis: {
              type: "datetime",
              categories: [
                "2022-09-19T00:00:00.00Z",
                "2022-09-19T01:00:00.00Z",
                "2022-09-19T02:00:00.00Z",
                "2022-09-19T03:00:00.00Z",
                "2022-09-19T04:00:00.00Z",
                "2022-09-19T05:00:00.00Z",
                "2022-09-19T06:00:00.00Z",
              ],
            },
          },
    }
    return <div className="CusReview">
        <Chart series={data.series} options={data.options} type="area" />
    </div>
}

export default CusReview;