function find() {
    let current = document.getElementById("current_value").value;
    let temp_rise = document.getElementById("temp_rise").value;
    let temp_amb = document.getElementById("temp_amb").value;
    let thickness = document.getElementById("thickness").value;
    let trace_length = document.getElementById("trace_length").value;


    //  let current = document.myform.current_value.value;
    // let temp_rise = document.myform.temp_rise.value;
    // let temp_amb = document.myform.temp_amb.value;
    // let thickness = document.myform.thickness.value;
    // let trace_length = document.myform.trace_length.value;

    // console.log(current, temp_rise, temp_amb, thickness, trace_length);


    let k_inner = 0.024;
    const b = 0.44;
    const c = 0.725;

    const rho = 0.00000172;
    const alpha =  0.0039;
    


    // for inner layers

     let area_inner = Math.pow(current / (k_inner * Math.pow(temp_rise, b)), (1.0 / c));
     let width_inner = area_inner / (thickness * 1.378);

    //  console.log("Trace Width of the PCB for inner layers " + width_inner);
    //  print the trace width inner
    document.getElementById('width_inn').value = width_inner;
    // print trace width outer


     let temp = 1* temp_amb + 1* temp_rise;
     trace_length = trace_length * 2.54;
     area_inner = area_inner * 2.54 * 2.54 / 1000000;
     let resistance_inner = (rho * trace_length / area_inner) * (1 + alpha * (temp - 25));
     
     let voltage_inner = resistance_inner * current;

     let power_loss_inner = current * current * resistance_inner;

     console.log("The Resistance is " + resistance_inner + " and Voltage " + voltage_inner + " and power loss " + power_loss_inner + " all are for inner layers");
    
     // for inner layers end


    //  printing output of inner layers
    document.getElementById('resistance_inn').value = resistance_inner;
    document.getElementById('voltage_inn').value = voltage_inner;
    document.getElementById('power_inn').value = power_loss_inner;
    // printing inner layers end


    // for outer layers
    let k_outer = 0.048; 

    let area_outer = Math.pow(current / (k_outer * Math.pow(temp_rise, b)), (1.0 / c));

     let width_outer = area_outer / (thickness * 1.378);

    //  console.log("Trace Width of the PCB for outer layers " + width_outer);
    //  print the width outer
    document.getElementById('width_out').value = width_outer;
    // print width end

    //  let temp = temp_amb + temp_rise;
    //  trace_length = trace_length * 2.54;
     area_outer = area_outer * 2.54 * 2.54 / 1000000;
     let resistance_outer = (rho * trace_length / area_outer) * (1 + alpha * (temp - 25));
     
     let voltage_outer = resistance_outer * current;

     let power_loss_outer = current * current * resistance_outer;

    //  console.log("The Resistance is " + resistance_outer + " and Voltage " + voltage_outer + " and power loss " + power_loss_outer + " all are for outer layers");
    // for outer layers end


    // Print output of outer layers     
        document.getElementById('resistance_out').value = resistance_outer;
        document.getElementById('voltage_out').value = voltage_outer;
        document.getElementById('power_out').value =power_loss_outer;
    // print outer layers end


}