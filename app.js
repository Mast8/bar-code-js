function generateBarcode(){
    var barcodeValue = document.getElementById("barcodeValue").value;
    var barcodeType = document.getElementById("barcodeType").value;	
    var showText = document.getElementById("showText").value;			
    JsBarcode("#barcode", barcodeValue, {
        format: barcodeType,
        displayValue: showText,
        lineColor: "#24292e",
        width:2,
        height:40,	
        fontSize: 20					
    });		
}
generateBarcode();