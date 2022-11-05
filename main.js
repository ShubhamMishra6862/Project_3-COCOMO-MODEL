$(".basicM").click(function () {
    if ($(".Input1").css("display") == "block") {
        $(".Input1").css("animation", "fadeout 0.7s backwards");
        setTimeout(function(){$(".Input1").delay(1000).css("display", "none");},300);  
    }
    else {
        $(".Input1").css("display", "block");
        $(".Input1").css("animation", "fadein 0.7s backwards");
        $(".Input2").css("animation", "fadeout 0.7s backwards");
        $(".Input2").css("display", "none");
    }
})
$(".interM").click(function () {
    if ($(".Input2").css("display") == "block") {
        $(".Input2").css("animation", "fadeout 0.7s backwards");
        setTimeout(function(){$(".Input2").delay(1000).css("display", "none");},300); 
    }
    else {
        $(".Input2").css("display", "block");
        $(".Input2").css("animation", "fadein 0.7s backwards");
        $(".Input1").css("animation", "fadeout 0.7s backwards");
        $(".Input1").css("display", "none");
    }
})


$("#CalculateB").click(function () {
    let loc=$("#klocB").val();
    let time = 0.0, effort = 0.0, staff = 0.0, model = 0;

    let arr = ["Organic", "Semi-detached", "Embedded"];
    let table = [[2.4, 1.05, 2.5, 0.38], [3.0, 1.12, 2.5, 0.35], [3.6, 1.20, 2.5, 0.32]];    
    console.log("/"+loc);
    if(loc<=0){
        $(".mode").text("*/ Please enter valid value */");
        return;
    }
    if (loc >= 2 && loc <= 50)
        model = 0;

    else if (loc > 50 && loc <= 300)
        model = 1;

    else if (loc > 300)
        model = 2;
    
    
    effort = table[model][0] * Math.pow(loc, table[model][1]);
    time = table[model][2] * Math.pow(effort, table[model][3]);
    staff = effort / time;

    $(".mode").text("The mode is " + arr[model]);
    $(".effort").text("Effort required: " + effort.toFixed(2)+" PM");
    $(".devtime").text("Development Time: " + time.toFixed(2)+" Months");
    $(".staff").text("Staff Required: " + Math.ceil(staff)+" Person");
})

$("#CalculateI").click(function () {
    let loc=$("#klocI").val();
    let time = 0.0, effort = 0.0, staff = 0.0, model = 0;

    let arr = ["Organic", "Semi-detached", "Embedded"];
    let table = [[2.4, 1.05, 2.5, 0.38], [3.0, 1.12, 2.5, 0.35], [3.6, 1.20, 2.5, 0.32]];
    let interM=[[0.75,0.88,1,1.15,1.40,-1],[-1,0.94,1,1.08,1.16,-1],[0.70,0.85,1,15,1.30,1.65],
                [-1,-1,1,1.11,1.30,1.66],[-1,-1,1,1.06,1.21,1.56],[-1,0.87,1,1.15,1.30,-1],[-1,0.87,1,1.07,1.15,-1],
               [1.24,1.10,1.00,0.91,0.82,-1],[1.24,1.10,1,0.91,0.83,-1],[1.23,1.08,1,1.04,1.10,-1]];
    let valuechecked=[$("input[name='rr']:checked").val(),
    $("input[name='ds']:checked").val(),
    $("input[name='pc']:checked").val(),
    $("input[name='et']:checked").val(),
    $("input[name='ms']:checked").val(),
    $("input[name='pv']:checked").val(),
    $("input[name='ct']:checked").val(),
    $("input[name='mp']:checked").val(),
    $("input[name='uos']:checked").val(),
    $("input[name='rd']:checked").val()];
    let EAF=1;
    for(i=0;i<valuechecked.length;i++){
        if(interM[i][valuechecked[i]]>=0){
            EAF*=interM[i][valuechecked[i]];
        }
    }
    console.log(loc);
    if(loc<=0){
        
        $(".mode").text("*/ Please enter valid value */");
        return;
    }
    if (loc >= 2 && loc <= 50)
        model = 0;

    else if (loc > 50 && loc <= 300)
        model = 1;

    else if (loc > 300)
        model = 2;
    
    
    effort = table[model][0] * Math.pow(loc, table[model][1])*EAF;
    time = table[model][2] * Math.pow(effort, table[model][3]);
    staff = effort / time;

    $(".mode").text("The mode is " + arr[model]);
    $(".effort").text("Effort required: " + effort.toFixed(2)+" PM");
    $(".devtime").text("Development Time: " + time.toFixed(2)+" Months");
    $(".staff").text("Staff Required: " + Math.ceil(staff)+" Person");
})


$("#CalculateB").click(function () {
    $(".Result").css("display", "block");
    $(".Result").css("animation", "fadein 0.7s backwards");

})
$("#CalculateI").click(function () {

    $(".Result").css("display", "block");
    $(".Result").css("animation", "fadein 0.7s backwards");

})

$(".field").click(function(){
    $(".Result").css("animation", "fadeout 0.7s backwards");
    $(".Result").css("display", "none");
})


