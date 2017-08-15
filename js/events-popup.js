// Pop up events

// Evento confirmado
$(function () {
	$('[data-toggle="calendar"] > .row > .calendar-day > .events > .event').popover({
		container: 'body',
		content: 'Hello World',
		html: true,
		placement: 'bottom',
		template: '<div class="popover calendar-event-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});
	$('[data-toggle="calendar"] > .row > .calendar-day > .events > .event').on('show.bs.popover', function () {
		var html = [
				'<button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>',
				'<h3>'+$(this).find('h3').text()+'</h3>',
				'<div class="area">'+$(this).find('div.area').html()+'</div>',
				'<div class="desc">'+$(this).find('div.desc').html()+'</div>',
				'<div class="location">'+$(this).find('div.location').html()+'</div>',
				'<div class="datetime">'+$(this).find('div.datetime').html()+'</div>',
				'<div class="contacto">'+$(this).find('div.contacto').html()+'</div>',
				//'<div class="mailto">'+$(this).find('div.mailto').html()+'</div>',
				'<div class="googlecalendar">'+$(this).find('div.googlecalendar').html()+'</div>',
				'</div>',
				
				//'<a href="#signup" class="btn btn-success escribinos" role="button">Escribínos para participar</a>'
			].join('\n');
		$(this).attr('title', $(this).find('h4').text());
		$(this).attr('data-content', html);
	});
	$('[data-toggle="calendar"] > .row > .calendar-day > .events > .event').on('shown.bs.popover', function () {
		var $popup = $(this);
		$('.popover:last-child').find('.close').on('click', function(event) {
			$popup.popover('hide');
		});
		//if ($(".event").hasClass("no-confirmado")) {
    	//$(".popover:last-child").addClass("stripes");};
	});
});


// Evento no confirmado

$(function () {
	$('[data-toggle="calendar"] > .row > .calendar-day > .events > .event2').popover({
		container: 'body',
		content: 'Hello World',
		html: true,
		placement: 'bottom',
		template: '<div class="popover calendar-event-popover stripes" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content "></div></div>'
	});
	$('[data-toggle="calendar"] > .row > .calendar-day > .events > .event2').on('show.bs.popover', function () {
		var html = [
				'<button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>',
				'<h3>'+$(this).find('h3').text()+'</h3>',
				'<div class="area">'+$(this).find('div.area').html()+'</div>',
				'<div class="desc">'+$(this).find('div.desc').html()+'</div>',
				'<div class="location">'+$(this).find('div.location').html()+'</div>',
				'<div class="datetime">'+$(this).find('div.datetime').html()+'</div>',
				'<div class="contacto">'+$(this).find('div.contacto').html()+'</div>',
				//'<div class="mailto">'+$(this).find('div.mailto').html()+'</div>',
				'</div>',
				
				//'<a href="#signup" class="btn btn-success escribinos" role="button">Escribínos para participar</a>'
			].join('\n');
		$(this).attr('title', $(this).find('h4').text());
		$(this).attr('data-content', html);
	});
	$('[data-toggle="calendar"] > .row > .calendar-day > .events > .event2').on('shown.bs.popover', function () {
		var $popup = $(this);
		$('.popover:last-child').find('.close').on('click', function(event) {
			$popup.popover('hide');
		});
		//if ($(".event").hasClass("no-confirmado")) {
    	//$(".popover:last-child").addClass("stripes");};
	});
});

// Evento Reunión de Seguimiento
$(function () {
	$('[data-toggle="calendar"] > .row > .calendar-day > .events > .event3').popover({
		container: 'body',
		content: 'Hello World',
		html: true,
		placement: 'bottom',
		template: '<div class="popover calendar-event-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});
	$('[data-toggle="calendar"] > .row > .calendar-day > .events > .event3').on('show.bs.popover', function () {
		var html = [
				'<button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>',
				'<h3>'+$(this).find('h3').text()+'</h3>',
				'<div class="location">'+$(this).find('div.location').html()+'</div>',
				'<div class="datetime">'+$(this).find('div.datetime').html()+'</div>',
				'</div>',
				
				//'<a href="#signup" class="btn btn-success escribinos" role="button">Escribínos para participar</a>'
			].join('\n');
		$(this).attr('title', $(this).find('h4').text());
		$(this).attr('data-content', html);
	});
	$('[data-toggle="calendar"] > .row > .calendar-day > .events > .event3').on('shown.bs.popover', function () {
		var $popup = $(this);
		$('.popover:last-child').find('.close').on('click', function(event) {
			$popup.popover('hide');
		});
		//if ($(".event").hasClass("no-confirmado")) {
    	//$(".popover:last-child").addClass("stripes");};
	});
});


// ================ Esconder popover cuando se hace clic en cualqueir lado de la pantalla

$(document).mouseup(function (e)
{
    var container = new Array();
    container.push($('.popover'));
        
    $.each(container, function(key, value) {
        if (!$(value).is(e.target) // if the target of the click isn't the container...
            && $(value).has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(value).hide();
        }
    });
});
