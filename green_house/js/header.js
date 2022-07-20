(function(){

    const headerEl = document.querySelector('.inheader')
    const logoEl = document.querySelector('.hd_logo_wrap')
    const mapiconEl = document.querySelector('.hd_map')
    const menuicon = document.querySelectorAll('.hd_menu')
    const section_1 = document.querySelector('.section_1')
    
    
    // let stc = window.pageYOffset
    // =>구글맵 머시기대매 안먹힘 쌤한테 물어볼것.
    // 왜? 함수안에 변수를 선언해야되는지 모르겠음.


    const hdScroll = () => {
        const stc = window.pageYOffset
        // const section_1_top = Math.abs(section_1.getBoundingClientRect().top)
        const act_point = window.innerHeight

        if(stc > act_point){              
            headerEl.classList.add('inheader_2')
            logoEl.classList.add('hd_logo_wrap_2')
            mapiconEl.classList.add('hd_map_icon_2')
            menuicon[0].classList.add('hd_menu_2')
            menuicon[1].classList.add('hd_menu_2')
            menuicon[2].classList.add('hd_menu_2')
        }else{
            headerEl.classList.remove('inheader_2')
            logoEl.classList.remove('hd_logo_wrap_2')
            mapiconEl.classList.remove('hd_map_icon_2')
            menuicon[0].classList.remove('hd_menu_2')
            menuicon[1].classList.remove('hd_menu_2')
            menuicon[2].classList.remove('hd_menu_2')
        }
        

        
    }

    window.addEventListener('scroll', hdScroll)



})()