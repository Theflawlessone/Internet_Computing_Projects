(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('calcForm').addEventListener('submit', function (event) {
            event.preventDefault();

            var num1 = parseFloat(document.getElementById("num1").value),
                num2 = parseFloat(document.getElementById("num2").value),
                num3 = parseFloat(document.getElementById("num3").value),
                numbers = [num1, num2, num3],
                max = Math.max.apply(null, numbers),
                min = Math.min.apply(null, numbers),
                mean = (num1 + num2 + num3) / 3,
                median,
                range;

            numbers.sort(function (a, b) { return a - b; });
            median = numbers[1];
            range = max - min;

            document.getElementById("max").innerText = "Maximum: " + max;
            document.getElementById("min").innerText = "Minimum: " + min;
            document.getElementById("mean").innerText = "Mean: " + mean.toFixed(2);
            document.getElementById("median").innerText = "Median: " + median;
            document.getElementById("range").innerText = "Range: " + range;
        });
    });
})();