function showTreatment(){
    $.getJSON("data/treatment.json" , function (data){
        let treatment = data.treatment;
        $.each(treatment, function(i, data){
            $('#list-treatment').append('<div class="col-lg-4 col-md-6 mb-4"><div class="card h-100"><div class="card-body"><h4 class="card-title"><a href = "#"></a>' + data.nama + '</h4><h5></h5></div>' + data.Desc + '<div class="card-footer"><small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small></div</div></div>');
        });
    });
}

showTreatment();