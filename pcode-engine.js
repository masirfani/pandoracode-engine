$(document).ready(function(){

    load_css_pcode();
    function load_css_pcode(){

        var getClass = $("[class*=pcode-]").attr("class");
        var expClass = getClass.split(" ");

        let term = 'pcode-';
        
        var getCss = expClass.filter(item => item.toLowerCase().indexOf(term) > -1);

        getCss.forEach(function(index){
            var expCss = index.split("_");
            expCss = expCss.join(" ");
            expCss = expCss.toString().split("-");
            expCss.shift();
            if (expCss.length == 2) {
                let style = expCss[0];
                let value = expCss[1];
                $("."+index).css(style, value);
            }

            if (expCss.length > 2) {
                let value = expCss[expCss.length - 1];
                expCss.pop();
                let style = expCss.join("-");
                $("."+index).css(style, value);
            }
        });
    }
});
