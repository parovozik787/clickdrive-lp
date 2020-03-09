function scroll() {
    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 400);
        return false;
    })
}