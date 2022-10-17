$( document ).ready(function() {
    $("#updated").text(document.lastModified)
    $.ajax({
        dataType: "json",
        url: "values.json",
        success: (data) => {
            Object.keys(data).forEach(key => {
                const item = $(`[name="${key}"]`)
                item.find('#compra').text(data[key].compra)
                item.find('#venta').text(data[key].venta)
            })
        }
      });
});