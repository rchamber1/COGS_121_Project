$(document).ready(() => {
var chart2 = c3.generate({
bindto: '#chart2',
        data: {
          columns: [
            ['Total Time', document.getElementById('time1').innerHTML, document.getElementById('time2').innerHTML, document.getElementById('time3').innerHTML, document.getElementById('time4').innerHTML],
            ['Average Time', 4, 3, 2, 1]
          ],
          type: 'bar'
        },
        axis: {
          x: {
            label: {
              text: 'Region',
              position: 'outer-center',
            },
            type: 'category',
            categories: ['hindbrain', 'midbrain', 'forebrain', 'cerebral cortex'],
            tick: {
              centered: true
            }
          },
          y: {
            label: {
              text: 'Time (hours)',
              position: 'outer-middle'
            },
            max: 10,
            min: 0,
            padding: {
              top: 0,
              bottom: 0
            }
          }
        },
        legend: {
          show: true
        }
});
});

