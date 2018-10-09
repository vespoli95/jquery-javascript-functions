    $('li.tabs').on('click', function () {
        var tab;
        $('li.tabs').each(function () {
            if (this.className.indexOf('selected') > -1)
                $(this).removeClass('selected');
        });
        if (this.className.indexOf('selected') < 0) {
            tab = this.id;
            console.log(this.id);
            $(this).addClass('selected');
        }
        switchTabs(tab);
    });
    
   /**
   *switchTabs: function that will change DOM depending on given tab that is selected.
   **/
