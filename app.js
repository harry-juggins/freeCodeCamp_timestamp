var express = require("express"),
    moment  = require("moment"),
    app     = express();
    
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.send("");
});

app.get("/:date", function(req, res){
    var userDate = req.params.date;
    var result;
    if (/^[0-9]*$/.test(userDate)){
        result = moment(userDate, "X");
    } else {
        result = moment(userDate, "MMMM D, YYYY");
    }
    
    if(result.isValid()) {
        res.json({
          unix: result.format("X"),
          natural: result.format("MMMM D, YYYY")
        });
    } else {
        res.json({
          unix: null,
          natural: null
        });
    }
    
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Lets do this");
});
