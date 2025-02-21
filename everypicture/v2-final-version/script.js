(function () {

    'use strict';

    console.log('reading js')

    const demonArea = document.querySelector('#demonArea');

    demonArea.addEventListener('mouseover', function(){
        console.log('hover demonArea');
    })

    demonArea.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayDemon').className = 'showing';
    })

    document.querySelector('.closeDemon').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayDemon').className = 'hidden';
    })


    document.querySelector('.openPaper').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayPaper').className = 'showing';
    })

    document.querySelector('.closePaper').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayPaper').className = 'hidden';
    })

    document.querySelector('.openManeki').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayManeki').className = 'showing';
    })

    document.querySelector('.closeManeki').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayManeki').className = 'hidden';
    })

    document.querySelector('.openGlass').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayGlass').className = 'showing';
    })

    document.querySelector('.closeGlass').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayGlass').className = 'hidden';
    })

    document.querySelector('.openCastle').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayCastle').className = 'showing';
    })

    document.querySelector('.closeCastle').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlayCastle').className = 'hidden';
    })

    document.addEventListener('keydown', function (event){
        if(event.key === 'Escape') {
            document.querySelectorAll('.overlay').forEach(function(overlay) {
                overlay.className = 'hidden';
            });
        }
    });


})();