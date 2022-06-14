document.addEventListener('DOMLoadedContent', function(){
    fetch('http://localhost:8000/json')
    .then(response => response.json())
    .then(data => {
        const dataRaw = data;

        dataRaw.forEach(element => {
            console.log(element);
        })
    })
});

function getValueDriver(){
    const dropdown = document.getElementById('driver');
    var value = dropdown.options[dropdown.selectedIndex].value;
    console.log(value);
}

function getValueTanggal(){
    const value = document.getElementById('tanggal').value;
    console.log(value);
}

function getValueWaktu(){
    const value = document.getElementById('waktu').value;
    console.log(value);
}

function getValueJumlah(){
    const value = document.getElementById('jumlah').value;
    console.log(value);
}