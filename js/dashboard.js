// CALENDAR

const date = new Date();

const renderCalender = () => {
    date.setDate(1);

    const monthDays = document.querySelector('.days');

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1 , 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(), 
        date.getMonth() + 1, 
        0
    ).getDay();

    const nextDays = lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector('.heading-left h2').innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();

    let days = "";

    for(let x = firstDayIndex; x > 0; x--){
        days += `<div class="prev-date">${ prevLastDay - x + 1}</div>`;
    }

    for(let i = 1; i<=lastDay; i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for(let j = 1; j<=nextDays; j++){
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
}

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalender();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalender();
});

renderCalender();

// SIDEBAR TOGGLE;

let sidebarOpen = false;
let sidebar = document.getElementById('sidebar');
let sidebarCloseIcon = document.getElementById('sidebarIcon');

function toggleSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar__responsive");
        console.log('Now open');
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar__responsive");
        console.log('Closed');
        sidebarOpen = false;
    }
}


//CHART
var options = {
    series: [
        {
            name: "Balance",
            color: "#9EA2BB",
            data: [25, 5, 25, 25, 15, 25, 45]
        },
        {
            name: "Bookings",
            color: "#2750A8",
            data: [10, 60, 20, 60, 60, 50, 60]
        }
    ],
    chart: {
            type: "bar",
            height: 370,
            // data: 100,
            // type: column,
            sparkline: {
                enabled: true,
            },
            // dataPoints: {
            //     {label: 'Jan'; y:15},
            //     {label: 'Jan'; y:15},
            //     {label: 'Jan', y:15},
            //     {label: 'Jan', y:15},
            //     {label: 'Jan', y:15},
            // }
    },
    plotOptions: {
            bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
        }
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 0,
        colors: ["#fff"]
    },
    tooltip: {
        shared: false,
        intersect: false,
    },
    xaxis: {
        categories: ["1 Jun", "2 Jun", "3 Jun", "4 Jun", "5 Jun", "6 Jun", "7 Jun"],
    },
    yaxis: {
        categories: [0, 20, 40, 60, 80, 100],
        // dataLabels: {
        //     enabled: true,
        // },
        // sparkline: {
        //     enabled: true,
        // },
    }
};

var chart = new ApexCharts(document.querySelector("#apex"), options);
chart.render();