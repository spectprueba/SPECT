//Apenas cargue la pagina
window.onload = function() {
    
    var Width = 0, Height = 0;
    Width = document.documentElement.clientWidth;
    Height = document.documentElement.clientHeight;

    switch (true) {

        case Width <= 815:

            //INDEX
            setTimeout(function () {
                document.getElementById('SPECT-tittle').style.width = '60%';
            }, 1500)
            setTimeout(function () {
                document.getElementById("SPECT-tittle-txt").style.opacity='1';
            }, 2500)
            setTimeout(function () {
                document.getElementById("welcome").style.width='0%';
            }, 950)
            setTimeout(function () {
                document.getElementById("welcome").style.opacity='0';
            }, 900)
            setTimeout(function () {
                document.getElementById("welcome").style.display='none';
            }, 1700)

            //SERVICES
            setTimeout(function () {
                document.getElementById('SPECT-tittle-servicios').style.width = '60%';
            }, 1500)
            setTimeout(function () {
                document.getElementById("SPECT-tittle-txt-servicios").style.opacity='1';
            }, 2500)
            setTimeout(function () {
                document.getElementById("welcome").style.width='0%';
            }, 950)
            setTimeout(function () {
                document.getElementById("welcome").style.opacity='0';
            }, 900)
            setTimeout(function () {
                document.getElementById("welcome").style.display='none';
            }, 1700)

            //CONTACT US
            setTimeout(function () {
                document.getElementById('SPECT_tittle_contacto').style.width = '60%';
            }, 1500)
            setTimeout(function () {
                document.getElementById('SPECT_tittle_txt_contacto').style.opacity='1';
            }, 2500)
            setTimeout(function () {
                document.getElementById("welcome").style.width='0%';
            }, 950)
            setTimeout(function () {
                document.getElementById("welcome").style.opacity='0';
            }, 900)
            setTimeout(function () {
                document.getElementById("welcome").style.display='none';
            }, 1700)

        break

        default:
        //INDEX
        setTimeout(function () {
            document.getElementById('SPECT-tittle').style.width = '40%';
        }, 1500)
        setTimeout(function () {
            document.getElementById("SPECT-tittle-txt").style.opacity='1';
        }, 2500)
        setTimeout(function () {
            document.getElementById("welcome").style.width='0%';
        }, 950)
        setTimeout(function () {
            document.getElementById("welcome").style.opacity='0';
        }, 900)
        setTimeout(function () {
            document.getElementById("welcome").style.display='none';
        }, 1700)

        //SERVICES
        setTimeout(function () {
            document.getElementById('SPECT-tittle-servicios').style.width = '40%';
        }, 1500)
        setTimeout(function () {
            document.getElementById("SPECT-tittle-txt-servicios").style.opacity='1';
        }, 2500)
        setTimeout(function () {
            document.getElementById("welcome").style.width='0%';
        }, 950)
        setTimeout(function () {
            document.getElementById("welcome").style.opacity='0';
        }, 900)
        setTimeout(function () {
            document.getElementById("welcome").style.display='none';
        }, 1700)

        //CONTACT US
        setTimeout(function () {
            document.getElementById('SPECT-tittle-contacto').style.width = '40%';
        }, 1500)
        setTimeout(function () {
            document.getElementById('SPECT-tittle-txt-contacto').style.opacity='1';
        }, 2500)
        setTimeout(function () {
            document.getElementById("welcome").style.width='0%';
        }, 950)
        setTimeout(function () {
            document.getElementById("welcome").style.opacity='0';
        }, 900)
        setTimeout(function () {
            document.getElementById("welcome").style.display='none';
        }, 1700)
    }
}

//Con el resize para que sea responsive
start();
    window.onresize = start;
    function start(){

        var Width = 0, Height = 0;
        Width = document.documentElement.clientWidth;
        Height = document.documentElement.clientHeight;
        
        switch (true) {

            case Width > 815:
                setTimeout(function () {
                    document.getElementById('SPECT-tittle').style.width = '40%';
                }, 1501)

                setTimeout(function () {
                    document.getElementById('SPECT-tittle-contacto').style.width = '40%';
                }, 1501)
            break

            case Width <= 815:
                setTimeout(function () {
                    document.getElementById('SPECT-tittle').style.width = '60%';
                }, 1501)

                setTimeout(function () {
                    document.getElementById('SPECT-tittle-contacto').style.width = '60%';
                }, 1501)
            break

            default: 
            setTimeout(function () {
                document.getElementById('SPECT-tittle').style.width = '60%';
            }, 1501)

            setTimeout(function () {
                document.getElementById('SPECT-tittle-contacto').style.width = '60%';
            }, 1501)
        }
    }