function materielsAdd() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#materielTable tbody").length == 0) {
        $("#materielTable").append(
                                   "<tbody></tbody>"
                                   );
    }
    
    $("#materielTable tbody").append (
                                      "<tr>" +
                                      "<td>Reference</td>" +
                                      "<td>Numero série</td>" +
                                      "<td>Lieu</td>" +
                                      "</tr>"
                                      );
    alert ("TITI");
    
}
