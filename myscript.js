$(function(){
    $('.profile_container').on('click', function(e){
      var $biginfo = $('#teamcontent');
      var $bigname = $('#bigname');
      var $bigjob  = $('#bigjob');
      var $bigdesc = $('#bigdesc');
      var $bigimg  = $('.bigimg');  
      
      var newimg  = $(this).find('.profilepic').attr('src');
      var newname = $(this).find('.profilepic').attr('alt');
      var newrole = $(this).siblings('.job').eq(0).html();
      var newdesc = $(this).siblings('.desc').eq(0).html();
      
      $bigimg.css('background-image', "url(" + newimg + ")");
      $bigname.html(newname);
      $bigjob.html(newrole);
      $bigdesc.html(newdesc);
      
      if($biginfo.css('display') == 'none') {
        $biginfo.slideDown(350);
      }
        
      $('html, body').animate({ scrollTop: $('.team_box').offset().top }, 'slow');  
    });
  });
      
  function biograph(e) {
      if(e.className == 'about__slot') {
          e.className = 'about__slot bio';
      }
      else {
          e.className = 'about__slot';
      }
  }