function onChangeMenu(){
    document.getElementById("pop").classList.toggle("pop");
}

$(document).ready(function(){
    $('#datepicker').datepicker({
        format: "dd/mm/yyyy",
        startDate: '1d',
        autoclose: true
    })

    $('#datepicker').on('changeDate', function() {
        $('#my_hidden_input').val(
            $('#datepicker').datepicker('getFormattedDate')
        );
        $('#date-selected').text(
            $('#datepicker').datepicker('getFormattedDate')
        );
    });

    $('#dates-selected').datepicker({
        format: "dd/mm/yyyy",
        startDate: '1d',
        autoclose: true,
        multidate: true
    })

    //Need to configure this for multi dates
    $('#dates-selected').on('changeDate', function() {
        $('#my_selected_dates').val(
            $('#dates-selected').datepicker('getFormattedDate')
        );
    });
})


