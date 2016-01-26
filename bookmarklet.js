/**
 * @author Samuele Artuso <samuele.a@gmail.com>
 */

var videoUrl;

if (location.pathname.split('/')[1] == 'embed') { // video "embeddato" in un articolo

    videoUrl = $('body > script').last()[0].innerHTML.split('mp4\', \'')[1].split('\'')[0];

} else { // video su Repubblica TV

    videoUrl = $('#player meta[itemprop=contentUrl]').attr('content');

}
$('#alertflashnotinstalled').remove();
$('#playerCont').append('<video src="' + videoUrl + '" controls>');
