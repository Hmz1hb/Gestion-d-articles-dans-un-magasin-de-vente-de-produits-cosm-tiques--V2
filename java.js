var submit=document.getElementById('sub');
error = document.getElementById('errout')
submit.addEventListener("click" , showInTable );
var row = 1;
var arr = []
function showInTable(e){
  e.preventDefault();
  var Nom = document.getElementById('Nom').value;
  var marque = document.getElementById('marque').value;
  var prix = document.getElementById('prix').value;
  var ProdDate = document.getElementById('ProdDate').value;
  var type = document.getElementById('prod-type').value;
  var promo = document.querySelector('input[name="promo"]:checked');
  var table = document.getElementById('tb');
  if(Nom == "" || marque == "" || prix == "" || ProdDate == "" || type == "" || !promo){
    error.innerHTML = "Veuillez remplir tous les champs";
  }
  else if (Nom.length > 30){
    error.innerHTML = "Le nom du produit ne doit pas dépasser 30 caractères";
  }
  else if (marque.length > 20){
    error.innerHTML = "Le nom de la marque ne doit pas dépasser 20 caractères";
  }
  else if (prix < 0){
    error.innerHTML = "Le prix ne doit pas être négatif";
  }
  else{
class Product{
  constructor(Nom, marque, prix, ProdDate, type, promo){
    this.Nom = Nom;
    this.marque = marque;
    this.prix = prix;
    this.ProdDate = ProdDate;
    this.type = type;
    this.promo = promo;
    }
    details(){
      return (
      `Nom: ${this.Nom} <br>
      Marque: ${this.marque}<br>
      Prix: ${this.prix} <br>
      Date de production: ${this.ProdDate} <br>
      Type: ${this.type} <br>
      Promotion: ${this.promo.value}`
      )
    }
  }
  var userProduct = new Product(
    document.getElementById("Nom").value,
    marque,
    prix,
    ProdDate,
    type,
    promo.value,
  )
document.getElementById("Verif").style.display = "flex";
    var modalOk = document.getElementById("Verif-btn");
    modalOk.onclick = ok;
    function ok() {
      document.getElementById("Verif").style.display = "none";
      var table = document.getElementById('tb');
    var newRow = table.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    cell1.innerHTML = Nom;
    cell2.innerHTML = marque;
    cell3.innerHTML = prix;
    cell4.innerHTML = ProdDate;
    cell5.innerHTML = type;
    cell6.innerHTML = promo.value;
    var edit  = document.createElement("button");
    var del = document.createElement("button");
    del.setAttribute('class','button')
    del.setAttribute('onclick','del(this)')
    del.innerHTML = "Delete"
    edit.setAttribute('class','button');
    edit.setAttribute('onclick','edit(this)');
    edit.innerHTML = "Edit";  
    cell7.appendChild(edit)
    cell7.appendChild(del);
    error.innerHTML = "";
    }
    arr.push(userProduct);
    document.getElementById("Output").innerHTML = userProduct.details();
}
console.log(arr);
localStorage.setItem("product", JSON.stringify(arr));
}
function edit(e){
  var row = e.parentNode.parentNode.rowIndex;
  var table = document.getElementById("tb");
  var nom = table.rows[row].cells[0].innerHTML;
  var marque = table.rows[row].cells[1].innerHTML;
  var prix = table.rows[row].cells[2].innerHTML;
  var proDate = table.rows[row].cells[3].innerHTML;
  var type = table.rows[row].cells[4].innerHTML;
  var promo = table.rows[row].cells[5].innerHTML;
  document.getElementById("Nom").value = nom;
  document.getElementById("marque").value = marque;
  document.getElementById("prix").value = prix;
  document.getElementById("ProdDate").value = proDate;
  document.getElementById("prod-type").value = type;
  document.getElementsByName("promo").value = promo;
  document.getElementById("sub").value = "Update";
  document.getElementById("sub").onclick = function(){
    table.rows[row].cells[0].innerHTML = document.getElementById("Nom").value;
    table.rows[row].cells[1].innerHTML = document.getElementById("marque").value;
    table.rows[row].cells[2].innerHTML = document.getElementById("prix").value;
    table.rows[row].cells[3].innerHTML = document.getElementById("ProdDate").value;
    table.rows[row].cells[4].innerHTML = document.getElementById("prod-type").value;
    table.rows[row].cells[5].innerHTML = document.querySelector('input[name="promo"]:checked').value;
    document.getElementById("Nom").value = "";
    document.getElementById("marque").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("ProdDate").value = "";
    document.getElementById("prod-type").value = "";
    document.getElementsByName("promo").value = "";
    document.getElementById("sub").value = "Submit";
    document.getElementById("sub").onclick = showInTable;
  
  }
}
function del(e){
  if(confirm("You Sure")){
     var row = e.parentNode.parentNode.rowIndex;
  var table = document.getElementById("tb");
  table.deleteRow(row);
  }
 
  
}
