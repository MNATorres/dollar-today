$(document).ready(function () {
    $("#updated").text(document.lastModified)
    $.ajax({
        dataType: "json",
        url: "/values.json",
        success: (data, _, xhr) => {
            $("#updated").text(new Date(xhr.getResponseHeader('Last-Modified')).toLocaleString())
            Object.keys(data).forEach(key => {

                const item = $(`[name="${key}"]`)
                item.find('#compra').text(getValueText(data[key].compra))
                item.find('#venta').text(getValueText(data[key].venta))
            })
        }
    });
});

function getValueText(text) {
    if (text == "No cotiza") return "-"
    if (!text.includes("$")) return `$${text}`
    return text
}
