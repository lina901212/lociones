var seleccion = []
var resultados = []
var seleccionSinDuplicados = []

var arrLociones = [
     {
    id: 'LH001',
    nombre : '212 Men',
    genero: 'Hombre',
      propiedades: ['Citrico','Verde','Calido Picante','Aromatico','Leñoso','Picante Fresco','En polvo','Almizclado','Lavanda','Violeta']
    },
     {
      id: 'LH002',
      nombre : 'Acqua di gio Profumo',
      genero: 'Hombre',
      propiedades: ['Aromatico','Marino','Picante Fresco','Ambar','Ahumado','Leñoso','Calido Picante','Citrico','Balsamico','Pachuli']
    },
    {
      id: 'LH003',
      nombre : 'Bvlgari Aqva',
      genero: 'Hombre',
      propiedades: ['Citrico','Marino','Aromatico','Acuatico','Leñoso','Lavanda','Picante Fresco','En polvo']
    },
    {
      id: 'LH004',
      nombre: 'Ck IN2U Hombre',
      genero: 'Hombre',
      propiedades: ['Aromatico','Cacao','Citrico','Leñoso','Calido Picante','Picante Fresco','Verde','Almizclado','En polvo']
    },
    {
      id: 'LH005',
      nombre: 'Creed Aventus',
      genero: 'Hombre',
      propiedades: ['Frutal','Dulce','Cuero','Leñoso','Ahumado','Tropical','Nuevo','Almizclado','Citrico','En polvo']
    },
    {
      id: 'LH006',
      nombre: 'Creed Silver',
      genero: 'Hombre',
      propiedades: ['Verde','Citrico','Frutal','Almizclado','Leñoso','Aromatico','En polvo','Picante Fresco','Nuevo','Floral']
    },
    {
      id: 'LH007',
      nombre: 'Diesel Masculine',
      genero: 'Hombre',
      propiedades: ['Calido Picante','Citrico','Aromatico','Picante Fresco','Leñoso','En polvo','Verde','Canela','Vainilla','Dulce']
    },
    {
      id: 'LH008',
      nombre: 'Eros Versace',
      genero: 'Hombre',
      propiedades: ['Vainilla','Aromatico','Verde','Picante Fresco','Ambar','Frutal','Dulce','Citrico','Leñoso','Nuevo']
    },
    {
      id: 'LH009',
      nombre: 'Estuche Versace Hombre',
      genero: 'Hombre',
      propiedades: []
    },
    {
      id: 'LH010',
      nombre: 'Hugo Boss Bottled Night',
      genero: 'Hombre',
      propiedades: ['Leñoso','Violeta','En polvo','Lavanda','Cuero','Ahumado','Almizclado','Floral','Aromatico','Picante Fresco']
    },
    {
      id: 'LH011',
      nombre: 'Hugo Boss Cantimplora',
      genero: 'Hombre',
      propiedades: ['Aromatico','Picante Fresco','Verde','Leñoso','Nuevo','Frutal','Lavanda','Herbarico','Citrico']
    },
    {
      id: 'LH012',
      nombre: 'Invictus Amaderada Acuatica',
      genero: 'Hombre',
      propiedades: ['Citrico','Marino','Aromatico','Picante Fresco','Leñoso','Ambar','Salado','Flores Blancas','Alcanfor','Acuatico']
    },
    {
      id: 'LH013',
      nombre: 'Montale Black Aoud',
      genero: 'Hombre',
      propiedades: ['Rosa','Laud','Pachuli','Almizclado','Leñoso','Floral','Calido Picante','Ambar','Citrico']
    },
    {
      id: 'LH014',
      nombre: '1 Million Elixir',
      genero: 'Hombre',
      propiedades: ['Vainilla','Frutal','Rosa','Dulce','Verde','Aromatico','Floral','Balsamico','Nuevo','Leñoso']
    },
    {
      id: 'LH015',
      nombre: 'Phantom',
      genero: 'Hombre',
      propiedades: ['Citrico','Vainilla','Lavanda','Terroso','Aromatico','Ahumado','Leñoso','Frutal','Nuevo','En polvo']
    },
    {
      id: 'LH016',
      nombre: 'Victorinox Swiss Army',
      genero: 'Hombre',
      propiedades: ['Aromatico','Picante Fresco','Verde','Leñoso','Citrico','Lavanda']
    },
    {
      id: 'LM001',
      nombre: '212 Heroes Forever Young',
      genero: 'Mujer',
      propiedades: ['Frutal','Dulce','Flores Blancas','Citrico','Leñoso']
    },
    {
      id: 'LM002',
      nombre: '212 NYC Women',
      genero: 'Mujer',
      propiedades: ['Flores Blancas','Floral','Citrico','En polvo','Almizclado','Verde','Animalico']
    },
    {
      id: 'LM003',
      nombre: 'Ange ou Démon',
      genero: 'Mujer',
      propiedades: ['Vainilla','Dulce','Calido Picante','Flores Blancas','Aromatico','Leñoso','Flores Amarillas','Metalico','Picante Suave','Balsamico']
    },
    {
      id: 'LM004',
      nombre: 'Bvlgari Omnia Pink',
      genero: 'Mujer',
      propiedades: ['Citrico','Floral','En polvo','Dulce','Almizclado','Picante Fresco','Tropical','Flores Blancas','Frutal','Leñoso']
    },
    {
      id: 'LM005',
      nombre: 'Estuche Burberry',
      genero: 'Mujer',
      propiedades: []
    },
    {
      id: 'LM006',
      nombre: 'Ilmin Rose',
      genero: 'Mujer',
      propiedades: ['Calido Picante','Aromatico','Terroso','Citrico','Rosa','Pachuli','Almizclado','Cubierto de musgo','Leñoso','Balsamico']
    },
    {
      id: 'LM007',
      nombre: "J'adore",
      genero: 'Mujer',
      propiedades: ['Flores Blancas','Floral','Frutal','Dulce','Nuevo','Acuatico','Citrico','En polvo','Ozonico','Tuberosa']
    },
    {
      id: 'LM008',
      nombre: 'Jean Paul G - Scandal',
      genero: 'Mujer',
      propiedades: ['Miel','Dulce','Flores Blancas','Citrico','Caramelo','Animalico','Pachuli','Cera de abejas','Floral','Leñoso']
    },
    {
      id: 'LM009',
      nombre: 'Lacoste Pour Elle',
      genero: 'Mujer',
      propiedades: ['Dulce','Frutal','Coco','Tropical','Citrico','Leñoso','En polvo']
    },
    {
      id: 'LM010',
      nombre: 'Ligth Blue',
      genero: 'Mujer',
      propiedades: ['Citrico','Leñoso','Nuevo','Frutal','Aromatico','Almizclado','En polvo','Verde']
    },
    {
      id: 'LM011',
      nombre: 'Viva la Juicy',
      genero: 'Mujer',
      propiedades: ['Dulce','Flores Blancas','Caramelo','Frutal','Vainilla','Citrico','Leñoso','Lactonico','En polvo','Ambar']
    },
    {
      id: 'LM012',
      nombre: 'XS Pure',
      genero: 'Mujer',
      propiedades: ['Vainilla','Dulce','Leñoso','Coco','En polvo','Flores Amarillas','Lactonico','Almizclado','Frutal','Flores Blancas']
    },
    {
      id: 'LX001',
      nombre: 'Al Haramain Gold Edition',
      genero: 'Unisex',
      propiedades: ['Dulce','Frutal','Ozonico','Nuevo','Acuatico','Ambar','Almizclado','En polvo','Vainilla','Leñoso']
    },
    {
      id: 'LX002',
      nombre: 'Bharara King',
      genero: 'Unisex',
      propiedades: ['Citrico','Vainilla','Frutal','Dulce','En polvo','Almizclado','Ambar','Picante Fresco']
    },
    {
      id: 'LX003',
      nombre: 'Ck One Unisex',
      genero: 'Unisex',
      propiedades: ['Citrico','Verde','Leñoso','En polvo','Flores Blancas','Aromatico','Nuevo','Picante Fresco','Almizclado','Floral']
    },
    {
      id: 'LX004',
      nombre: 'Ilmin il Kakuno',
      genero: 'Unisex',
      propiedades: ['Ambar','Calido Picante','Leñoso','Balsamico','Almizclado','Cuero','Vainilla','Terroso','Rosa','Caramelo']
    },
    {
      id: 'LX005',
      nombre: 'Le Labo Santal 33',
      genero: 'Unisex',
      propiedades: ['Leñoso','En polvo','Cuero','Calido Picante','Violeta']
    }
    
]

var contador=0;
function cambiarEstilo(div)
{
  var x = document.getElementById(div);
  console.log(x.className)
  
  if(x.className == '')
  {
    contador++;
    seleccion.push(x.innerHTML); // sacar el texto dentro del div
  }else{
    contador--;
    seleccion.pop();
  }
    
  if(contador<6)
  {    
    x.classList.toggle('seleccionado');
  }else{
    alert("Solo puedes elegir 5 elementos");
    contador--;
    seleccion.pop();
  }
  console.log(seleccion);
}
console.log(contador);


function buscar()
{
  var busqueda = document.getElementById("resultados");
  var select = document.getElementById("genero");
  var gen = select.options[select.selectedIndex].value;
  var text = document.getElementById("texto3");
  var z="";
  var h="";
  console.log ("gen", gen)
  console.log ("seleccion", seleccion.length)
  if( gen != "" && seleccion.length > 0)
  {
    document.getElementById("texto1").style.display = "none"; // ocultar 
    document.getElementById("texto2").style.display = "none"; // ocultar 
    document.getElementById("opciones").style.display = "none"; // ocultar 
    document.getElementById("texto3").style.display = "block";
    console.log("x =" + gen);
     
    for(x in arrLociones)
    { 
      for(y in seleccion)
       {
         console.log(seleccion[y])
         console.log('x',arrLociones[x])
         if(arrLociones[x].propiedades.indexOf(seleccion[y]) !== -1)
         {
           if(arrLociones[x].genero == gen)
           {
             resultados.push(arrLociones[x])
           } 
         }
       }
      console.log(resultados)
    }
    console.log("titulo", resultados)
    //eliminar duplicados
    var set = new Set( resultados.map( JSON.stringify ) )
    seleccionSinDuplicados = Array.from(set).map( JSON.parse);
    h+='<p>Se encontró ('+ seleccionSinDuplicados.length +') resultados. <a href="#" class="myButton" onclick="limpiar()">Realizar nueva busqueda</a></p>';
    text.innerHTML =  h;
    for (e in seleccionSinDuplicados)
    {
       z +='<div><img src="lociones_imagenes/'+seleccionSinDuplicados[e].id+'.png" width="150" height="180" /><p><b>'+seleccionSinDuplicados[e].nombre+'</b></p></div>'
    }
    busqueda.innerHTML =  z ;
   
  }else
  {
    alert("Estimado cliente por favor verifica si: \n1.Seleccionaste el genero y/o \n2.Elegiste un(algunos) elemento(s) para iniciar la busqueda.");
  }
}

function limpiar()
{
  //pdte revisar este codigo no muestra los elementos como al inicio
  document.getElementById("texto3").style.display = "none"; // ocultar
  var text = document.getElementById("texto3");
  text.innerHTML = '';
  document.getElementById("texto1").style.display = "block";
  document.getElementById("texto2").style.display = "block";
  document.getElementById("genero").value = "";  // no se pone .value para q tome el objeto y no el valor, otra forma es document.getElementById("emisor").value = "";
  document.getElementById("opciones").style.display = "grid";
  var busqueda = document.getElementById("resultados");
  busqueda.innerHTML = '';
  console.log("seleccionSinDuplicados", seleccionSinDuplicados)
  seleccionSinDuplicados.splice(0);
  console.log("seleccionSinDuplicados", seleccionSinDuplicados)
  resultados.splice(0);
}
