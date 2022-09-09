const users = [
    {
      
        name: "Bhargav",
        emialId: "bhargav123@gmial.com",
        mobileno: 1234567890,
        city: "valsad"
    },
    {
       
        name: "Bheem",
        emialId: "bhargav123@gmial.com",
        mobileno: 1234567890,
        city: "valsad"
    },

    {
        
        name: "Isha",
        emialId: "bhargav123@gmial.com",
        mobileno: 1234567890,
        city: "valsad"
    },
    {
      
        name: "Ravi",
        emialId: "bhargav123@gmial.com",
        mobileno: 1234567890,
        city: "valsad"
    },
    {
       
        name: "Om",
        emialId: "bhargav123@gmial.com",
        mobileno: 1234567890,
        city: "valsad"
    },
    {
       
        name: "Vatsal",
        emialId: "bhargav123@gmial.com",
        mobileno: 1234567890,
        city: "valsad"
    },
]
// to get data
getdata(users);
function getdata(data) {
    const tableData = document.querySelector("#table-data");
    //    for each loop
    data.forEach((user) => {
        // creating table row 
        const tablerow = document.createElement('tr');
        //  puting items in table  
        for (const item in user) {
            const tablecol = document.createElement('td');
            // puting values in items
            const value = user[item];
            // values in tablecolum
            tablecol.textContent = value;
            tablerow.appendChild(tablecol)
        }
        tableData.appendChild(tablerow);
    });
}

// filter data
function filterData() {
    debugger
    const filter = document.querySelector('#search-bar').value.toUpperCase();

    const letTable = document.getElementById('table-data');

    const tr =letTable.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        
        let td = tr[i].getElementsByTagName('td')[0];
        console.log(td);
        if (td) {
            let textvalue = td.textContent || td.innerHTML;

            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// pop up
document.querySelector(".buton").addEventListener("click", function () {
    document.querySelector(".popup-wrapper").style.display = "flex";
})

document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".popup-wrapper").style.display = "none";
})