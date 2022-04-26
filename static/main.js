function windowonload() {
    $('#gangnam').hide();
    $('#gangdong').hide();
    $('#gangbuk').hide();
    $('#gangseo').hide();
    $('#gwanak').hide();
    $('#gwangjin').hide();
    $('#guro').hide();
    $('#geumcheon').hide();
    $('#nowon').hide();
    $('#dobong').hide();
    $('#dongdaemun').hide();
    $('#dongjak').hide();
    $('#mapo').hide();
    $('#seodaemun').hide();
    $('#seocho').hide();
    $('#seongdong').hide();
    $('#seongbuk').hide();
    $('#songpa').hide();
    $('#yangcheon').hide();
    $('#yeongdeungpo').hide();
    $('#yongsan').hide();
    $('#eunpyeong').hide();
    $('#jongno').hide();
    $('#jung').hide();
    $('#jungnang').hide();

    $.ajax({
        type: 'GET',
        url: '/cafe',
        data: {},
        success: function (response) {
            let rows = response['cafe']
            for (let i = 0; i < rows.length; i++) {
                let name = rows[i]['name']
                let add = rows[i]['add']
                let add_more = rows[i]['add_more']
                let star = rows[i]['star']
                let img = rows[i]['image']
                let temp_html = `<article>
												<a href="/review" class="image featured"><img src="http://${img}" alt="" /></a>
												<header class="cafe_info">
													<h3><a href="/review">${name}</a></h3>
													<h5>주소 : ${add}</h5>
													<h5>지번 : ${add_more}</h5>
													<h5>⭐ ${star}</h5>
												</header>
											</article>`
                if (add.includes('강남구') == true) {
                 $('#cafe_card_gangnam').append(temp_html)
                }
                else if (add.includes('강동구') == true) {
                    $('#cafe_card_gangdong').append(temp_html)
                }
                else if (add.includes('강북구') == true) {
                    $('#cafe_card_gangbuk').append(temp_html)
                }
                else if (add.includes('강서구') == true) {
                    $('#cafe_card_gangseo').append(temp_html)
                }
                else if (add.includes('관악구') == true) {
                    $('#cafe_card_gwanak').append(temp_html)
                }
                else if (add.includes('광진구') == true) {
                    $('#cafe_card_gwangjin').append(temp_html)
                }
                else if (add.includes('구로구') == true) {
                    $('#cafe_card_guro').append(temp_html)
                }
                else if (add.includes('금천구') == true) {
                    $('#cafe_card_geumcheon').append(temp_html)
                }
                else if (add.includes('노원구') == true) {
                    $('#cafe_card_nowon').append(temp_html)
                }
                else if (add.includes('도봉구') == true) {
                    $('#cafe_card_dobong').append(temp_html)
                }else if (add.includes('동대문구') == true) {
                    $('#cafe_card_dongdaemun').append(temp_html)
                }
                else if (add.includes('동작구') == true) {
                    $('#cafe_card_dongjak').append(temp_html)
                }
                else if (add.includes('마포구') == true) {
                    $('#cafe_card_mapo').append(temp_html)
                }
                else if (add.includes('서대문구') == true) {
                    $('#cafe_card_seodaemun').append(temp_html)
                }
                else if (add.includes('서초구') == true) {
                    $('#cafe_card_seocho').append(temp_html)
                }else if (add.includes('성동구') == true) {
                    $('#cafe_card_seongdong').append(temp_html)
                }
                else if (add.includes('성북구') == true) {
                    $('#cafe_card_seongbuk').append(temp_html)
                }
                else if (add.includes('송파구') == true) {
                    $('#cafe_card_songpa').append(temp_html)
                }
                else if (add.includes('양천구') == true) {
                    $('#cafe_card_yangcheon').append(temp_html)
                }
                else if (add.includes('영등포구') == true) {
                    $('#cafe_card_yeongdeungpo').append(temp_html)
                }else if (add.includes('용산구') == true) {
                    $('#cafe_card_yongsan').append(temp_html)
                }
                else if (add.includes('은평구') == true) {
                    $('#cafe_card_eunpyeong').append(temp_html)
                }
                else if (add.includes('종로구') == true) {
                    $('#cafe_card_jongno').append(temp_html)
                }
                else if (add.includes('중구') == true) {
                    $('#cafe_card_jung').append(temp_html)
                }
                else if (add.includes('중랑구') == true) {
                    $('#cafe_card_jungnang').append(temp_html)
                }
            }
        }
    });
}
window.onload = windowonload;

function q1() {
    $('#gangnam').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q2() {
    $('#gangdong').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q3() {
    $('#gangbuk').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q4() {
    $('#gangseo').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q5() {
    $('#gwanak').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q6() {
    $('#gwangjin').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q7() {
    $('#guro').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q8() {
    $('#geumcheon').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q9() {
    $('#nowon').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q10() {
    $('#dobong').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q11() {
    $('#dongdaemun').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q12() {
    $('#dongjak').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q13() {
    $('#mapo').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q14() {
    $('#seodaemun').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q15() {
    $('#seocho').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q16() {
    $('#seongdong').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q17() {
    $('#seongbuk').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q18() {
    $('#songpa').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q19() {
    $('#yangcheon').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q20() {
    $('#yeongdeungpo').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q21() {
    $('#yongsan').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q22() {
    $('#eunpyeong').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q23() {
    $('#jongno').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q24() {
    $('#jung').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function q25() {
    $('#jungnang').show();


    $(document).ready(function(){
        window.scrollTo(0, 50000);
    });
}

function reload() {
    $(document).ready(function(){
        window.scrollTo(0, 0);
    });
}
