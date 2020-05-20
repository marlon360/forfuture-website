fetch('https://forfuture.studio/backend/api/submit/').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	setCount(data.submissions);
	createAgeChart(data.submissions);
    createSexChart(data.submissions);
    createSourceChart(data.submissions);
    createFutureChart(data.submissions);
    createImportanceChart(data.submissions);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

const colors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(200, 200, 200, 1)'
]

const options = (title) => {
    return {
        title: {
            display: true,
            text: title
        },
        responsive: true,
        maintainAspectRatio: false
    }
}

function setCount(data) {
    var container = document.getElementById('count');
    container.innerHTML = data.length
}

function createAgeChart(data) {

    let chartData = data.map((submission) => {
        return parseInt(submission.age)
    })
    chartData = occurrences(chartData)
    
    var ctx = document.getElementById('age-chart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: chartData[0],
            datasets: [{
                label: 'Alter',
                data: chartData[1],
                backgroundColor: colors
            }]
        },
        options: options("Alter")
    });
}

function createSexChart(data) {

    let chartData = data.map((submission) => {
        return submission.sex
    })
    chartData = occurrences(chartData)
    
    var ctx = document.getElementById('sex-chart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: chartData[0],
            datasets: [{
                label: 'Geschlecht',
                data: chartData[1],
                backgroundColor: colors
            }]
        },
        options: options("Geschlecht")
    });
}
function createSourceChart(data) {

    let chartData = data.map((submission) => {
        return submission.source
    })
    chartData = occurrences(chartData)
    
    var ctx = document.getElementById('source-chart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: chartData[0],
            datasets: [{
                label: 'Quelle',
                data: chartData[1],
                backgroundColor: colors
            }]
        },
        options: options("Quelle")
    });
}
function createFutureChart(data) {

    let chartData = data.map((submission) => {
        return submission.future
    })
    chartData = occurrences(chartData)
    
    var ctx = document.getElementById('future-chart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: chartData[0],
            datasets: [{
                label: 'Zukunft',
                data: chartData[1],
                backgroundColor: colors
            }]
        },
        options: options("Denkst du manchmal über deine Zukunft nach?")
    });
}
function createImportanceChart(data) {
    
    const keys = ["money", "success", "health", "environment", "family", "democracy", "education"]

    var ctx = document.getElementById('importance-chart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Geld", "Erfolg", "Gesundheit", "Umwelt", "Familie", "Demokratie", "Bildung"],
            datasets: [{
                data: keys.map((key) => getAverage(data, key)),
                backgroundColor: colors
            }]
        },
        options: {
            ...options("Wie wichtig sind dir diese Dinge? (Durchschnitt)"),
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function getAverage(data, key) {
    let count = 0;
    let sum = 0;
    data.forEach(submission => {
        if (submission[key] != null) {
            count += 1;
            sum += parseInt(submission[key])
        }
    });
    return sum / count;
}

function occurrences(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return [a, b];
}