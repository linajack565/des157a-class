(function () {
    'use strict';
    console.log('reading js')

    const demonArea = document.querySelector('#demonArea');
    const paperArea = document.querySelector('#paperArea');
    const templeArea = document.querySelector('#templeArea');
    const manekiArea = document.querySelector('#manekiArea');
    const glassArea = document.querySelector('#glassArea');

    demonArea.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayDemon').className = 'showing';
    })

    document.querySelector('.closeDemon').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayDemon').className = 'hidden';
    })


    paperArea.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayPaper').className = 'showing';
    })

    document.querySelector('.closePaper').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayPaper').className = 'hidden';
    })

    templeArea.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayCastle').className = 'showing';
    })

    document.querySelector('.closeCastle').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayCastle').className = 'hidden';
    })

    manekiArea.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayManeki').className = 'showing';
    })

    document.querySelector('.closeManeki').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayManeki').className = 'hidden';
    })

    glassArea.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayGlass').className = 'showing';
    })

    document.querySelector('.closeGlass').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayGlass').className = 'hidden';
    })



    document.addEventListener('keydown', function (event){
        if(event.key === 'Escape') {
            document.querySelectorAll('.overlay').forEach(function(overlay) {
                overlay.className = 'hidden';
            });
        }
    });


})();