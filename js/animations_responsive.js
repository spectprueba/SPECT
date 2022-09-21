//Apenas cargue la pagina
window.onload = function() {
    
    var Width = 0, Height = 0;
    Width = document.documentElement.clientWidth;
    Height = document.documentElement.clientHeight;

    switch (true) {

        case Width <= 815:

            //INDEX
            setTimeout(function () {
                document.getElementById('SPECT_tittle').style.width = '60%';
            }, 1500)
            setTimeout(function () {
                document.getElementById("SPECT_tittle_txt").style.opacity='1';
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
                document.getElementById('SPECT_tittle_servicios').style.width = '60%';
            }, 1500)
            setTimeout(function () {
                document.getElementById("SPECT_tittle_txt_servicios").style.opacity='1';
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
            document.getElementById('SPECT_tittle').style.width = '40%';
        }, 1500)
        setTimeout(function () {
            document.getElementById("SPECT_tittle_txt").style.opacity='1';
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
            document.getElementById('SPECT_tittle_servicios').style.width = '40%';
        }, 1500)
        setTimeout(function () {
            document.getElementById("SPECT_tittle_txt_servicios").style.opacity='1';
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
            document.getElementById('SPECT_tittle_contacto').style.width = '40%';
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
                    document.getElementById('SPECT_tittle').style.width = '40%';
                }, 1501)

                setTimeout(function () {
                    document.getElementById('SPECT_tittle_contacto').style.width = '40%';
                }, 1501)
            break

            case Width <= 815:
                setTimeout(function () {
                    document.getElementById('SPECT_tittle').style.width = '60%';
                }, 1501)

                setTimeout(function () {
                    document.getElementById('SPECT_tittle_contacto').style.width = '60%';
                }, 1501)
            break

            default: 
            setTimeout(function () {
                document.getElementById('SPECT_tittle').style.width = '60%';
            }, 1501)

            setTimeout(function () {
                document.getElementById('SPECT_tittle_contacto').style.width = '60%';
            }, 1501)
        }
    }
    
    
    //Las barritas de menu
    let menutoggle = document.getElementById('toggle'); //Animacion de pestaña de menu
    let menubackground = document.getElementById('container_toggle_bar'); //Fondo oscuro
    let menubar = document.getElementById('cont_toggle_bar'); //El menú como tal

    function desplegar_menu(){
        menutoggle.classList.toggle('active');
        menubackground.classList.toggle('active');
        menubar.classList.toggle('active');
    }
    menutoggle.addEventListener("click" , desplegar_menu);

    //Las barritas de SSD Update
    let menutoggle_ssd = document.getElementById('toggle_ssd_options'); //Animacion de pestaña de menu
    let menubackground_ssd = document.getElementById('container_toggle_bar_ssd'); //Fondo oscuro
    let menubar_ssd = document.getElementById('cont_toggle_bar_ssd'); //El menú como tal

    function desplegar_menu_del_ssd(){
        menutoggle_ssd.classList.toggle('active');
        menubackground_ssd.classList.toggle('active');
        menubar_ssd.classList.toggle('active');
    }
    menutoggle_ssd.addEventListener("click" , desplegar_menu_del_ssd);