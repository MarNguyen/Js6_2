document.getElementById("btnTinh").onclick = function () {
    var n = document.getElementById("Numb1").value * 1;
    var toal = 0;
    var sum="";
   
for (i  = 0; i<n; i++) {
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < Math.sqrt(n); i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
}


    //Show kết quả
    document.getElementById("infoTinh").innerHTML = result;
  };
    //style
    document.getElementById("infoTinh").classList.add("alert-success");