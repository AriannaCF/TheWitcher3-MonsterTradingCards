console.log ("Hello from my first JS File")


const cursedOnes = document.querySelectorAll(".curse");
const draconids = document.querySelectorAll(".draco");
const elementas = document.querySelectorAll(".eleme");
const hybrids = document.querySelectorAll(".hybri");
const insectoids = document.querySelectorAll(".insec");
const necrophages = document.querySelectorAll(".necro");
const ogroids = document.querySelectorAll(".ogroi");
const relicts = document.querySelectorAll(".relic");
const specters = document.querySelectorAll(".spect");
const vampires = document.querySelectorAll(".vampi");

const curseCheck = document.querySelector("#curseCheck");
const dracoCheck = document.querySelector("#dracoCheck");
const elemeCheck = document.querySelector("#elemeCheck");
const hybriCheck = document.querySelector("#hybriCheck");
const insecCheck = document.querySelector("#insecCheck");
const necroCheck = document.querySelector("#necroCheck");
const ogroiCheck = document.querySelector("#ogroiCheck");
const relicCheck = document.querySelector("#relicCheck");
const spectCheck = document.querySelector("#spectCheck");
const vampiCheck = document.querySelector("#vampiCheck");

const checks = document.getElementsByName("selector");
const select = document.querySelector("#selectAllButton");
const deselect= document.querySelector("#deselectAllButton");

curseCheck.addEventListener("click", curseDisplayer);
dracoCheck.addEventListener("click", dracoDisplayer);
elemeCheck.addEventListener("click", elemeDisplayer);
hybriCheck.addEventListener("click", hybriDisplayer);
insecCheck.addEventListener("click", insecDisplayer);
necroCheck.addEventListener("click", necroDisplayer);
ogroiCheck.addEventListener("click", ogroiDisplayer);
relicCheck.addEventListener("click", relicDisplayer);
spectCheck.addEventListener("click", spectDisplayer);
vampiCheck.addEventListener("click", vampiDisplayer);
select.addEventListener("click", selectAll);
deselect.addEventListener("click", deselectAll);


//when SelectAll is clicked, check all boxes, display all cards, 
//when Deselect all is clicked, uncheck all boxes, hide all cards

function selectAll() {
    for(check of checks) {
        check.checked=true;
}        for (cursedOne of cursedOnes) {
    cursedOne.style.display="block";
}        for (draconid of draconids) {
    draconid.style.display="block";    
}        for (elementa of elementas) {
    elementa.style.display="block";
}for (hybrid of hybrids) {
    hybrid.style.display="block";
}        for (insectoid of insectoids) {
    insectoid.style.display="block";
}        for (necrophage of necrophages) {
    necrophage.style.display="block";
}        for (ogroid of ogroids) {
    ogroid.style.display="block";
}        for (relict of relicts) {
    relict.style.display="block";
}        for (specter of specters) {
    specter.style.display="block";
}        for (vampire of vampires) {
    vampire.style.display="block";
}
}

function deselectAll() {
    for (check of checks) {
        check.checked=false;
    }for (cursedOne of cursedOnes) {
        cursedOne.style.display="none";
    }        for (draconid of draconids) {
        draconid.style.display="none";    
    }        for (elementa of elementas) {
        elementa.style.display="none";
    }for (hybrid of hybrids) {
        hybrid.style.display="none";
    }        for (insectoid of insectoids) {
        insectoid.style.display="none";
    }        for (necrophage of necrophages) {
        necrophage.style.display="none";
    }        for (ogroid of ogroids) {
        ogroid.style.display="none";
    }        for (relict of relicts) {
        relict.style.display="none";
    }        for (specter of specters) {
        specter.style.display="none";
    }        for (vampire of vampires) {
        vampire.style.display="none";
    }
}

// while box is checked, if classList contains the class then display the card.

function curseDisplayer () {
    if (curseCheck.checked===false) {
        for (cursedOne of cursedOnes) {
            cursedOne.style.display="none";
        }
    } else if(curseCheck.checked) {
        for (cursedOne of cursedOnes) {
            cursedOne.style.display="block";
        }
}        
}


function dracoDisplayer () {
    if (dracoCheck.checked===false) {
        for (draconid of draconids) {
            draconid.style.display="none";
        }
    } else if(dracoCheck.checked) {
        for (draconid of draconids) {
            draconid.style.display="block";    
        }
}
}

function elemeDisplayer () {
    if (elemeCheck.checked===false) {
        for (elementa of elementas) {
            elementa.style.display="none";
        }
    } else if(elemeCheck.checked) {
        for (elementa of elementas) {
            elementa.style.display="block";
        }
}
}

function hybriDisplayer () {
    if (hybriCheck.checked===false) {
        for (hybrid of hybrids) {
            hybrid.style.display="none";
        }
    } else if(hybriCheck.checked) {
        for (hybrid of hybrids) {
            hybrid.style.display="block";
        }
}
}

function insecDisplayer () {
    if (insecCheck.checked===false) {
        for (insectoid of insectoids) {
            insectoid.style.display="none";
        }
    } else if(insecCheck.checked) {
        for (insectoid of insectoids) {
            insectoid.style.display="block";
        }
}
}

function necroDisplayer () {
    if (necroCheck.checked===false) {
        for (necrophage of necrophages) {
            necrophage.style.display="none";
        }
    } else if(necroCheck.checked) {
        for (necrophage of necrophages) {
            necrophage.style.display="block";
        }
}
}

function ogroiDisplayer () {
    if (ogroiCheck.checked===false) {
        for (ogroid of ogroids) {
            ogroid.style.display="none";
        }
    } else if(ogroiCheck.checked) {
        for (ogroid of ogroids) {
            ogroid.style.display="block";
        }
}
}

function relicDisplayer () {
    if (relicCheck.checked===false) {
        for (relict of relicts) {
            relict.style.display="none";
        }
    } else if(relicCheck.checked) {
        for (relict of relicts) {
            relict.style.display="block";
        }
}
}

function spectDisplayer () {
    if (spectCheck.checked===false) {
        for (specter of specters) {
            specter.style.display="none";
        }
    } else if(spectCheck.checked) {
        for (specter of specters) {
            specter.style.display="block";
        }
}
}

function vampiDisplayer () {
    if (vampiCheck.checked===false) {
        for (vampire of vampires) {
            vampire.style.display="none";
        }
    } else if(vampiCheck.checked) {
        for (vampire of vampires) {
            vampire.style.display="block";
        }
}
}