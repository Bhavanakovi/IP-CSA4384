<!DOCTYPE html>
<html>

<head>
    <title>
        External JavaScript
    </title>
    <script src="script.js"></script>
</head>

<body>
    <h2>
        External JavaScript
    </h2>

    <h3 id="demo" style="color:green;">
        GeeksforGeeks
    </h3>

    <button type="button" onclick="myFun()">
        Click Here
    </button>
</body>

</html>

JAVASCRIPT CODE IN EXTERNAL FILE WITH THE NAME script.js:

        function myFun() {
            document.getElementById("demo")
                .innerHTML = "Content changed!";
        }
